# 【译】保护您的GraphQL API免受恶意查询的影响
> 原文地址：[Securing Your GraphQL API from Malicious Queries – Apollo GraphQL](https://blog.apollographql.com/securing-your-graphql-api-from-malicious-queries-16130a324a6b)

>  Max Stoiber是Spectrum的CTO，这是一个面向在线社区的实时聊天平台。
> 在这篇文章中，他讲述了他们如何保护GraphQL API免受攻击。

使用GraphQL，您可以随时查询您想要的内容。这可以让我们很方便地使用API​​，但也具有复杂的安全隐患。不怀好意的人可以不去请求合法，有用的数据，而是提交复杂的嵌套查询来让您的服务器、数据库、网络或所有这些数据过分负载。如果没有正确的保护措施，您可能会让自己暴露在DoS（拒绝服务）攻击之下。

例如，在Spectrum的GraphQL API中，我们有这样的关系：

```js
type Thread {
  messages(first: Int, after: String): [Message]
}

type Message {
  thread: Thread
}

type Query {
  thread(id: ID!): Thread
}
```

如您所见，您可以查询Thread的messages或Message的thread。这种循环关系给一个不怀好意的人可乘之机来构造一个复杂的嵌套查询，如下所示：

```js
query maliciousQuery {
  thread(id: "some-id") {
    messages(first: 99999) {
      thread {
        messages(first: 99999) {
          thread {
            messages(first: 99999) {
              thread {
                # ...repeat times 10000...
              }
            }
          }
        }
      }
    }
  }
}
```

这种查询如果真的运行起来是非常糟糕的，因为它会以指数方式增加加载的对象数量，并会使整个服务器崩溃。虽然在其他层有某些缓解措施使得发送查询都没有那么简单（例如CORS），但它们也无法完全阻止这种查询发生。

## 大小限制
我们想到的第一个天真的方法是通过原始字节限制传入的查询大小。由于查询是作为字符串发送的，因此一个简单的字节检查就足够了：

```js
app.use('*', (req, res, next) => {
  const query = req.query.query || req.body.query || '';
  if (query.length > 2000) {
    throw new Error('Query too large');
  }
  next();
});
```

遗憾的是，这在真实场景中效果不佳：这种简单的检查无法阻止不怀好意的人使用短字段名称进行恶意查询，也会限制住那种使用长字段名称或嵌套片段来做的合法查询。

## 查询白名单
我们考虑的第二种方法是在我们自己的应用程序中使用已批准的查询白名单，并告诉服务器只让白名单上的查询通过。

```js
app.use('/api', graphqlServer((req, res) => {
  const query = req.query.query || req.body.query;
  // TODO: Get whitelist somehow
  if (!whitelist[query]) {
    throw new Error('Query is not in whitelist.');
  }
  /* ... */
}));
```

手动维护查询白名单显然会很麻烦，但幸好Apollo团队创建了persistgraphql，它自动从客户端代码中提取所有查询并从中生成一个不错的JSON文件。

```js
{
  "scripts": {
    "postbuild": "persistgraphql src api/query-whitelist.json"
  }
}
```

这种技术非常有效，可以可靠地阻止所有恶意查询。不幸的是，它还有两个主要的短板：
* 我们永远不能更改或删除查询，只能添加新查询：如果任何用户正在运行过时的客户端，我们不能阻止他们的请求。我们可能不得不保留所有在生产中使用的查询的历史记录。
* 我们无法向公众开放我们的API：未来的某个时候，我们希望向公众开放我们的API，以便其他开发人员可以参与到对Spectrum界面的构建中来。查询白名单严重限制他们的查询自由并且失去了使用GraphQL API的初衷。

以上是我们无法解决的限制因素，所以我们只能回到原点。

## （查询）深度限制
上面的恶意查询的一个有害方面是嵌套，按其深度分类，这使得查询的代价更加昂贵。每一层查询都为后端添加了更多工作，与列表结合使用时可以快速添加。

我们调研了一些工具，找到了graphql-depth-limit，一个由Andrew Carlson设计的可爱模块，它使我们能够轻松限制传入查询的最大深度。我们检查了我们的客户端，我们使用的最深层查询有7层，所以我们选择了（非常宽松）最大深度10并将其添加到我们的验证规则中：

```js
app.use('/api', graphqlServer({
  validationRules: [depthLimit(10)]
}));
```

这样就可以非常简单地限制住查询深度。

## （查询）数量限制
上述恶意查询的第二个风险点是获取99999个对象。无论那个对象是什么，查询数量这么大，查询代价总是很昂贵的。（尽管DataLoader可能会减轻数据库压力，但不会减轻网络和处理的压力）

我没有将第一个参数的类型设置为Int（允许任意数字），而是使用graphql-input-number创建自定义标量，将最大值限制为100：

```js
const PaginationAmount = GraphQLInputInt({
  name: 'PaginationAmount',
  min: 1,
  max: 100,
});
```

如果有人查询超过100个对象，这将抛出错误。然后我们就可以在任何相关的API中使用它：

```js
type Thread {
  messages(first: PaginationAmount, after: String): [Message]
}
```

现在我们完全阻止了上面的恶意查询！🎉

## 查询成本分析
不幸的是，在适当的条件下仍有可能让服务器不堪重负：某些特定于应用程序的查询既不太深也不会请求太多的对象，但查询代价仍然非常昂贵。对于我们Spectrum，这样的查询可能如下所示：

```js
query evilQuery {
  thread(id: "54887141-57a9-4386-807c-ed950c4d5132") {
    messageConnection(first: 100) { ... }
    participants(first: 100) {
      threadConnection(first: 100) { ... }
      communityConnection { ... }
      channelConnection { ... }
      everything(first: 100) { ... }
    }
  }
}
```

在此查询中，查询深度和查询数量都不是特别大，因此它将通过我们当前的限制。然而，它可能会获取数以万计的记录，这意味着它在数据库，服务器和网络上是密集的，这是最糟糕的情况。

为了防止这种情况，我们需要在运行它们之前分析查询以计算它们的复杂性并在过于昂贵时阻止它们。虽然这比我们之前的两个保护工作都要多，但它会100％确定没有恶意查询可以到达我们的解析器。

**在开始之前花费大量时间实现查询成本分析，确保您需要它。**
尝试使用恶意查询来崩溃或减慢您的API，并查看这些会对您的查询有多少危害——也许您的API没有这些嵌套关系，或者它可以处理一次抓取数千条记录完全正常并且不需要查询成本分析！

我在我的maxed-out 2017 MacBook Pro上本地运行了上述查询，我​​们的API服务器花费了10-15秒来响应一兆字节的JSON。（所以）我们真的需要它，因为我们从不希望任何人用它轰炸我们的API。（GitHub GraphQL API也使用查询成本分析）

## 实施查询成本分析
在npm上有几个包来实现查询成本分析。
我们用过的两个是graphql-validation-complexity——一个即插即用模块和graphql-cost-analysis，它通过让你指定@cost指令为你提供更多控制。还有graphql-query-complexity，但是相比于这个，我更推荐graphql-cost-analysis，因为这两者的工作原理是相同的，但是graphql-query-complexity 没有指令或multiplier。

我们使用graphql-cost-analysis，因为我们在最快的解析器（20μs）和最慢的解析器（10s +）之间存在很大的差异，所以我们需要从中获得控制。话虽这么说，也许graphql-validation-complexity对你来说已经足够了，一定要试一试！

它的工作方式是指定解析某个字段或类型的相对成本。它还具有multiplication支持，因此如果您请求带有任何嵌套字段的列表都将乘以分页量，这非常简洁。

这就是@cost指令在实践中的样子：

```js
type Participant {
  # The complexity of getting one thread in a thread connection is 3, and multiply that by the amount of threads fetched
  threadConnection(first: PaginationAmount, after: String): ThreadConnection @cost(complexity: 3, multipliers: ["first"])
}

type Thread {
  author: Author @cost(complexity: 1)
  participants(first: PaginationAmount,...): [Participant] @cost(complexity: 2, multipliers: ["first"])
}
```

这只是我们的API类型的一小部分，但您可以看懂了。您可以指定某个字段的复杂程度，乘以哪个参数以及最大成本，而graphql-cost-analysis将为您完成剩下的工作。

我通过Apollo Engine公开的性能跟踪数据确定了某些解析器的复杂程度。
我浏览了整个模式，并根据p99服务时间分配了一个值。然后我们查看了客户端上的所有查询，找出最昂贵的查询，得到~500个复杂点。为了给我们一些未来的余地，我们将最大复杂度设置为750。

运行上面的evilQuery，现在我们已经添加了graphql-cost-analysis，我收到一条错误消息，告诉我“GraphQL查询超出最大复杂度，请删除一些嵌套或字段，然后再试一次。（最大值：750，实际值：1010319）“

100万复杂点？拒绝！

## 总结
总而言之，我建议使用查询深度限制和查询数量限制来为任何GraphQL API来做最基本的防护——它们易于实现并且具有足够的安全性。
根据您的特定安全要求和架构，您可能还需要调查查询成本分析。
虽然它比其他工具更多的工作，但它确实提供了防御恶意行为者的全面覆盖。
