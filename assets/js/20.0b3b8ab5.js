(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{224:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-搭建静态博客全攻略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-搭建静态博客全攻略"}},[s._v("#")]),s._v(" Vuepress 搭建静态博客全攻略")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#vuepress-搭建静态博客"}},[s._v("Vuepress 搭建静态博客")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-安装-vuepress"}},[s._v("1. 安装 Vuepress")])]),e("li",[e("a",{attrs:{href:"#_2-初始化博客项目"}},[s._v("2. 初始化博客项目")])]),e("li",[e("a",{attrs:{href:"#_3-进一步的配置"}},[s._v("3. 进一步的配置")])]),e("li",[e("a",{attrs:{href:"#_4-部署"}},[s._v("4. 部署")])])])]),e("li",[e("a",{attrs:{href:"#github-actions-自动构建-部署"}},[s._v("GitHub Actions 自动构建/部署")]),e("ul",[e("li",[e("a",{attrs:{href:"#写-workflow-脚本"}},[s._v("写 workflow 脚本")])]),e("li",[e("a",{attrs:{href:"#设置-workflow-的环境变量"}},[s._v("设置 workflow 的环境变量")])]),e("li",[e("a",{attrs:{href:"#注意事项："}},[s._v("注意事项：")])])])]),e("li",[e("a",{attrs:{href:"#给-vuepress-博客加上评论系统"}},[s._v("给 Vuepress 博客加上评论系统")])]),e("li",[e("a",{attrs:{href:"#给-vuepress-博客加上全文搜索"}},[s._v("给 Vuepress 博客加上全文搜索")])]),e("li",[e("a",{attrs:{href:"#给-vuepress-博客做-seo-优化"}},[s._v("给 Vuepress 博客做 SEO 优化")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"vuepress-搭建静态博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-搭建静态博客"}},[s._v("#")]),s._v(" Vuepress 搭建静态博客")]),s._v(" "),e("p",[s._v("可以参照 "),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vuepress 的官方文档"),e("OutboundLink")],1),s._v(" 一步一步来就好了😊，我这里就简单说下步骤：")]),s._v(" "),e("h3",{attrs:{id:"_1-安装-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-vuepress"}},[s._v("#")]),s._v(" 1. 安装 Vuepress")]),s._v(" "),e("p",[s._v("你可以全局安装：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用 npm 来全局安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g Vuepress\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以使用 yarn 来全局安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" Vuepress\n")])])]),e("p",[s._v("也可以安装在你静态博客项目的开发依赖里面:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --dev Vuepress\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D Vuepress\n")])])]),e("h3",{attrs:{id:"_2-初始化博客项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化博客项目"}},[s._v("#")]),s._v(" 2. 初始化博客项目")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用 npm 来初始化项目")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以使用 yarn 来初始化项目")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init\n")])])]),e("p",[s._v("然后在项目的根目录下新建一个 "),e("code",[s._v("docs")]),s._v(" 文件夹，以后我们写的 "),e("code",[s._v("markdown")]),s._v(" 文件都会放在 "),e("code",[s._v("docs")]),s._v(" 文件夹下。")]),s._v(" "),e("p",[s._v("我们先随便初始化一个文件来看看效果：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress!'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])]),e("p",[s._v("执行命令 "),e("code",[s._v("vuepress dev docs")])]),s._v(" "),e("p",[s._v("可以看到启动了一个页面：\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69302580-11496e80-0c55-11ea-973b-539c0cd73c65.png",alt:"image"}})]),s._v(" "),e("p",[s._v("为了后续运行方便，我们可以把这些命令写在项目的 "),e("code",[s._v("package.json")]),s._v(" 文件里面的 "),e("code",[s._v("scripts")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h3",{attrs:{id:"_3-进一步的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-进一步的配置"}},[s._v("#")]),s._v(" 3. 进一步的配置")]),s._v(" "),e("p",[s._v("目前我们只写了一个 "),e("code",[s._v("markdown")]),s._v(" 文档，所以只有一个页面，后续我们的博客会陆续加入很多内容，肯定需要做目录分级，配置导航栏，可以看"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档里的这部分"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"_4-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署"}},[s._v("#")]),s._v(" 4. 部署")]),s._v(" "),e("p",[s._v("静态博客搭好了，我们就可以把它部署到服务器上正式给别人访问了，你可以使用 GitHub Pages（GitHub 的静态页面托管服务 ）来托管自己的静态博客。\n我们可以使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("gh-pages"),e("OutboundLink")],1),s._v(" 来将打包好的静态博客快速部署到 GitHub Pages 上。")]),s._v(" "),e("p",[s._v("同样的，我们可以将部署的命令加入到 "),e("code",[s._v("package.json")]),s._v(" 文件里面的 "),e("code",[s._v("scripts")]),s._v("，现在，我们的 "),e("code",[s._v("scripts")]),s._v(" 就是这样的：")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build && gh-pages -d docs/.vuepress/dist"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("也可以使用其他第三方静态页面托管服务（如 Netlify、Coding Pages、Gitlab Pages 等），"),e("a",{attrs:{href:"https://juejin.im/post/5b57dc9f6fb9a04fb136e91e",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),e("OutboundLink")],1),s._v("里面介绍了很多免费的静态页面托管服务。")])]),s._v(" "),e("h2",{attrs:{id:"github-actions-自动构建-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-自动构建-部署"}},[s._v("#")]),s._v(" GitHub Actions 自动构建/部署")]),s._v(" "),e("blockquote",[e("p",[s._v("大家有注意到 GitHub 悄悄上线了一个 Actions 功能吗？还不了解的同学可以看"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/77751445",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),e("OutboundLink")],1),s._v("，写的非常全面。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("GitHub 官方号称 Actions 可以让你的"),e("strong",[s._v("工作流自动化")]),s._v("：GitHub 监听某个事件（可能是某个分支的提交），然后触发你预定义的工作流，让大家在GitHub服务器上直接测试代码、部署代码。所以，我们可以利用这里特性来做 CI/CD，开发者只要写一下 workflow 脚本就可以了，不用费心思去想要用哪个第三方的 CI/CD 服务, 💯。")])]),s._v(" "),e("p",[s._v("actions 其实就是由一些脚本组成，所以它们是可以复用的，GitHub 做了一个官方市场，可以搜索到他人提交的 actions。另外，还有一个 awesome actions 的仓库，也可以找到不少 action。这样一来，你甚至都不用自己写具体的脚本，直接引用别人的脚本就行啦。")]),s._v(" "),e("p",[s._v("话不多说，赶紧用起来！")]),s._v(" "),e("h3",{attrs:{id:"写-workflow-脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写-workflow-脚本"}},[s._v("#")]),s._v(" 写 workflow 脚本")]),s._v(" "),e("p",[s._v("首先我们需要到项目仓库的页面上进入 Actions 这个 tab, 选择 Node 环境进入脚本的编辑页面\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69306766-9e93bf80-0c63-11ea-8ff8-3c51058cded0.png",alt:"image"}}),s._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69306808-c2ef9c00-0c63-11ea-8c0e-37e385fb3f16.png",alt:"image"}})]),s._v(" "),e("p",[s._v("这里我直接使用了 peaceiris 的 "),e("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("actions-gh-pages")]),e("OutboundLink")],1),s._v("，这个 "),e("code",[s._v("action")]),s._v(" 可以帮你把打包好的静态文件部署到 "),e("code",[s._v("GitHub Pages")]),s._v(" 上去。")]),s._v(" "),e("p",[s._v("最终我的 workflow 脚本如下：\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69312573-52984900-0c6a-11ea-9d4c-92d477410d6e.png",alt:"image"}}),s._v(" "),e("a",{attrs:{href:"https://github.com/fyz1994/write-something/blob/master/.github/workflows/deploy.yml",target:"_blank",rel:"noopener noreferrer"}},[s._v("脚本源文件"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("更详细的语法可以去看 "),e("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Actions 的官方文档"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"设置-workflow-的环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-workflow-的环境变量"}},[s._v("#")]),s._v(" 设置 workflow 的环境变量")]),s._v(" "),e("p",[s._v("上面的脚本里面第21行的环境变量是怎么回事呢？\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69312974-482a7f00-0c6b-11ea-828c-8780aaafdf92.png",alt:"image"}})]),s._v(" "),e("p",[s._v("因为我们需要 GitHub actions 把构建成果发到 GitHub 仓库，因此需要 GitHub 密钥，相当于是给 GitHub actions 授权。")]),s._v(" "),e("p",[s._v("首先运行下面的命令生成一对密钥：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen -t rsa -b "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -f gh-pages -N "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You will get 2 files:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   gh-pages.pub (public key)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   gh-pages     (private key)")]),s._v("\n")])])]),e("p",[s._v("然后：")]),s._v(" "),e("ol",[e("li",[s._v("在博客项目的仓库的 Settings 栏下，找到 "),e("code",[s._v("Deploy keys")]),s._v("这一项，把你的公钥加进去，"),e("strong",[s._v("注意勾选"),e("code",[s._v("Allow write access")])])]),s._v(" "),e("li",[s._v("同样在博客项目的仓库的 Settings 栏下，找到 "),e("code",[s._v("Secrets")]),s._v("这一项，把你的私钥加进去\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/16002911/69307473-b4a27f80-0c65-11ea-908c-c8da810709fb.png",alt:"image"}})])]),s._v(" "),e("h3",{attrs:{id:"注意事项："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项："}},[s._v("#")]),s._v(" 注意事项：")]),s._v(" "),e("ol",[e("li",[s._v("大家还记得前面我们说 vuepress 可以全局安装吗？如果你要使用 GitHub Actions 来帮你自动构建/部署 Vuepress 博客，那你就要把 "),e("code",[s._v("Vuepress")]),s._v(" 作为你的开发依赖加入到项目的 "),e("code",[s._v("package.json")]),s._v(" 文件里面进行管理，否则在 GitHub 的 docker 容器里打包的时候会找不到 "),e("code",[s._v("Vuepress")]),s._v(" 这个命令。")]),s._v(" "),e("li",[s._v("同样的，因为我们使用了 GitHub Actions，所以如果你前面使用了 yarn 来作为包管理工具，最好换成 npm，因为 npm 是 node 环境自带的包管理工具，无需额外安装，另外， peaceiris 的 "),e("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("actions-gh-pages")]),e("OutboundLink")],1),s._v(" 也是使用 npm 作为包管理工具的。")]),s._v(" "),e("li",[s._v("使用 "),e("code",[s._v("npm ci")]),s._v(" 来安装依赖包，而不是 "),e("code",[s._v("npm install")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("npm ci 和 npm i 的区别")]),s._v(" "),e("p",[s._v("可以看 medium 上的"),e("a",{attrs:{href:"https://medium.com/better-programming/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),e("OutboundLink")],1),s._v(" 了解一下。")]),s._v(" "),e("p",[s._v("简单来说就是：不像"),e("code",[s._v("npm install")]),s._v("，"),e("code",[s._v("npm ci")]),s._v("永远不会修改您的"),e("code",[s._v("package-lock.json")]),s._v("，它的使用依赖于 "),e("code",[s._v("package-lock.json")]),s._v("文件。所以如果使用npm ci，您将获得可靠的版本。通常这个命令会在 "),e("code",[s._v("Jenkins")]),s._v("或"),e("code",[s._v("GitLab CI")]),s._v("之类的持续集成工具中使用。")])]),s._v(" "),e("p",[s._v("好了，这样每次你的项目 "),e("code",[s._v("master")]),s._v(" 分支一旦有新的提交，就会自动触发这个 workflow，就可以自动完成静态博客的构建和部署了～")]),s._v(" "),e("p",[s._v("也就是说，我们可以直接利用 GitHub 的 markdown 编辑器，直接新建一个文档进行协作，然后提交到 master 分支就行了，完全不用再次去做 git 提交以及本地的构建和部署，简直太方便了 🚀")]),s._v(" "),e("h2",{attrs:{id:"给-vuepress-博客加上评论系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-vuepress-博客加上评论系统"}},[s._v("#")]),s._v(" 给 Vuepress 博客加上评论系统")]),s._v(" "),e("p",[s._v("待补充...")]),s._v(" "),e("h2",{attrs:{id:"给-vuepress-博客加上全文搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-vuepress-博客加上全文搜索"}},[s._v("#")]),s._v(" 给 Vuepress 博客加上全文搜索")]),s._v(" "),e("p",[s._v("待补充...")]),s._v(" "),e("h2",{attrs:{id:"给-vuepress-博客做-seo-优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-vuepress-博客做-seo-优化"}},[s._v("#")]),s._v(" 给 Vuepress 博客做 SEO 优化")]),s._v(" "),e("p",[s._v("待补充...")]),s._v(" "),e("comment-comment")],1)}),[],!1,null,null,null);t.default=r.exports}}]);