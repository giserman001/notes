# 使用 GitHub Actions 自动构建/部署 Vuepress 静态站点

大家有注意到 GitHub 悄悄上线了一个 Actions 功能吗？GitHub 官方号称 Actions 可以让你的日常开发流程很多事情可以自动化起来，其实相当于是 GitHub 官方接入了 CI/CD，我们开发者只要写一下 workflow 脚本就可以了，不用费心思去想要用哪个第三方的 CI/CD 服务。

话不多说，赶紧用起来！

Vuepress 是 Vue 生态下一个用于构建静态站点的工具，我一般喜欢使用 Vuepress 来建自己的博客。博客写完之后要怎么部署呢？之前我是通过
