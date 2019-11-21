---
sidebar: auto
tags: 工具
---

# Vuepress 搭建静态博客全攻略

[[toc]]

## 使用 Vuepress 搭建静态博客

可以参照 [Vuepress 的官方文档](https://vuepress.vuejs.org/zh/) 一步一步来就好了:blush:，我这里就简单说下步骤：

### 1. 安装 Vuepress
你可以全局安装：
```sh
# 可以使用 npm 来全局安装
npm i -g Vuepress

# 也可以使用 yarn 来全局安装
yarn global add Vuepress
```

也可以安装在你静态博客项目的开发依赖里面:
```sh
yarn add --dev Vuepress

# 或者
npm i -D Vuepress
```

### 2. 初始化博客项目
```sh
# 可以使用 npm 来初始化项目
npm init

# 也可以使用 yarn 来初始化项目
yarn init
```

然后在项目的根目录下新建一个 `docs` 文件夹，以后我们写的 `markdown` 文件都会放在 `docs` 文件夹下。

我们先随便初始化一个文件来看看效果：
```sh
echo '# Hello VuePress!' > docs/README.md
```
执行命令 `vuepress dev docs`

可以看到启动了一个页面：
![image](https://user-images.githubusercontent.com/16002911/69302580-11496e80-0c55-11ea-973b-539c0cd73c65.png)

为了后续运行方便，我们可以把这些命令写在项目的 `package.json` 文件里面的 `scripts`：
```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
 }
```
### 3. 进一步的配置
目前我们只写了一个 `markdown` 文档，所以只有一个页面，后续我们的博客会陆续加入很多内容，肯定需要做目录分级，配置导航栏，可以看[文档里的这部分](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

### 4. 部署
静态博客搭好了，我们就可以把它部署到服务器上正式给别人访问了，你可以使用 GitHub Pages（GitHub 的静态页面托管服务 ）来托管自己的静态博客。
我们可以使用 [gh-pages](https://www.npmjs.com/package/gh-pages) 来将打包好的静态博客快速部署到 GitHub Pages 上。

同样的，我们可以将部署的命令加入到 `package.json` 文件里面的 `scripts`，现在，我们的 `scripts` 就是这样的：
```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "npm run build && gh-pages -d docs/.vuepress/dist"
  },
 }
```

::: tip
也可以使用其他第三方静态页面托管服务（如 Netlify、Coding Pages、Gitlab Pages 等），[这篇文章](https://juejin.im/post/5b57dc9f6fb9a04fb136e91e)里面介绍了很多免费的静态页面托管服务。
:::

## 使用 GitHub Actions 自动构建/部署 Vuepress 博客

> 大家有注意到 GitHub 悄悄上线了一个 Actions 功能吗？还不了解的同学可以看[这篇文章](https://zhuanlan.zhihu.com/p/77751445)，写的非常全面。

::: tip
GitHub 官方号称 Actions 可以让你的**工作流自动化**：GitHub 监听某个事件（可能是某个分支的提交），然后触发你预定义的工作流，让大家在GitHub服务器上直接测试代码、部署代码。所以，我们可以利用这里特性来做 CI/CD，开发者只要写一下 workflow 脚本就可以了，不用费心思去想要用哪个第三方的 CI/CD 服务, :100:。
:::

actions 其实就是由一些脚本组成，所以它们是可以复用的，GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外，还有一个 awesome actions 的仓库，也可以找到不少 action。这样一来，你甚至都不用自己写具体的脚本，直接引用别人的脚本就行啦。

话不多说，赶紧用起来！

### 写 workflow 脚本

首先我们需要到项目仓库的页面上进入 Actions 这个 tab, 选择 Node 环境进入脚本的编辑页面
![image](https://user-images.githubusercontent.com/16002911/69306766-9e93bf80-0c63-11ea-8ff8-3c51058cded0.png)
![image](https://user-images.githubusercontent.com/16002911/69306808-c2ef9c00-0c63-11ea-8c0e-37e385fb3f16.png)
 
这里我直接使用了 peaceiris 的 [`actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)，这个 `action` 可以帮你把打包好的静态文件部署到 `GitHub Pages` 上去。

最终我的 workflow 脚本如下：
![image](https://user-images.githubusercontent.com/16002911/69312573-52984900-0c6a-11ea-9d4c-92d477410d6e.png)
[脚本源文件](https://github.com/fyz1994/write-something/blob/master/.github/workflows/deploy.yml)

更详细的语法可以去看 [GitHub Actions 的官方文档](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)

#### 注意事项

这里有几个注意事项：

1. 大家还记得前面我们说 vuepress 可以全局安装吗？如果你要使用 GitHub Actions 来帮你自动构建/部署 Vuepress 博客，那你就要把 `Vuepress` 作为你的开发依赖加入到项目的 `package.json` 文件里面进行管理，否则在 GitHub 的 docker 容器里打包的时候会找不到 `Vuepress` 这个命令。
2. 同样的，因为我们使用了 GitHub Actions，所以如果你前面使用了 yarn 来作为包管理工具，最好换成 npm，因为 npm 是 node 环境自带的包管理工具，无需额外安装，另外， peaceiris 的 [`actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) 也是使用 npm 作为包管理工具的。
3. 大家有注意到脚本里面我们使用的是 `npm ci` 来安装依赖包，而不是 `npm install`吗？关于这两者的详细区别大家可以自行去搜索一下，也可以看 medium 上的[这篇文章](https://medium.com/better-programming/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26)。这里我简单介绍一下：不像`npm install`，`npm ci`永远不会修改您的`package-lock.json`，它的使用依赖于 `package-lock.json`文件。所以如果使用npm ci，您将获得可靠的版本。通常这个命令会在 `Jenkins`或`GitLab CI`之类的持续集成工具中使用。

### 设置 workflow 的环境变量

上面的脚本里面第21行的环境变量是怎么回事呢？
![image](https://user-images.githubusercontent.com/16002911/69312974-482a7f00-0c6b-11ea-828c-8780aaafdf92.png)

因为我们需要 GitHub actions 把构建成果发到 GitHub 仓库，因此需要 GitHub 密钥，相当于是给 GitHub actions 授权。

首先运行下面的命令生成一对密钥：
```sh
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# You will get 2 files:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```

然后：
1. 在博客项目的仓库的 Settings 栏下，找到 `Deploy keys`这一项，把你的公钥加进去，**注意勾选`Allow write access`**
2. 同样在博客项目的仓库的 Settings 栏下，找到 `Secrets`这一项，把你的私钥加进去
![image](https://user-images.githubusercontent.com/16002911/69307473-b4a27f80-0c65-11ea-908c-c8da810709fb.png)

好了，这样每次你的项目 `master` 分支一旦有新的提交，就会自动触发这个 workflow，就可以自动完成静态博客的构建和部署了～

也就是说，我们可以直接利用 GitHub 的 markdown 编辑器，直接新建一个文档进行协作，然后提交到 master 分支就行了，完全不用再次去做 git 提交以及本地的构建和部署，简直太方便了 :kissing_heart:

## 给 Vuepress 博客加上评论系统
待补充...

## 给 Vuepress 博客做 SEO 优化
待补充...
