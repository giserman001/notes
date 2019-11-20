module.exports = {
  title: '去冲浪鸭',
  description: '耶耶耶耶耶✌️',
  base: "/write-something/",
  themeConfig: {
    displayAllHeaders: false, // 默认值：false
    lastUpdated: true,
    nav: [
      {
        text: '知识库',
        items: [
          { text: 'JavaScript', link: '/knowledge/javascript/' },
          { text: 'Graphql', link: '/knowledge/graphql/' },
          { text: 'React', link: '/knowledge/react/' },
          { text: '网络请求', link: '/knowledge/http/' },
        ]
      },
      {
        text: '工具库', link: '/tool/tools/',
      },
      {
        text: '杂记',
        items: [
          { text: '生活记录', link: '/essay/diary/' },
          { text: '好文摘抄', link: '/essay/docs/' },
          { text: '读书笔记', link: '/essay/notes/' },
        ]
      },
      {
        text: '我的其他主页',
        items: [
          { text: '掘金', link: 'https://juejin.im/user/5b446be0f265da0f793a56e4/posts' },
          { text: 'NPM', link: 'https://www.npmjs.com/settings/yizhen.fan/packages' },
        ]
      },
    ],
    sidebar: {
      '/knowledge/javascript/': [
        {
          title: 'javascript',
          children: [
            '',
            'type',
          ]
        }
      ],
      '/knowledge/graphql/': [
        {
          title: 'Graphql',
          children: [
            '【译】保护您的GraphQL API免受恶意查询的影响'
          ]
        }
      ],
      '/knowledge/react/': [
        {
          title: 'React 学习记录',
          children: [
            '',
          ]
        }
      ],
      '/knowledge/http/': [
        {
          title: '网络请求',
          children: [
            ''
          ]
        }
      ],
      '/tool/tools/': [
        {
          title: '工具',
          children: [
            '',
          ]
        }
      ],
      '/essay/diary/': [
        {
          title: '生活记录',
          children: [
            '20190118',
          ]
        }
      ],
      '/essay/docs/': [
        {
          title: '好文摘抄',
          children: [
            '互联网行业的裁员潮'
          ]
        }
      ],
      '/essay/notes/': [
        {
          title: '读书笔记',
          children: [
            '软技能职业篇',
            '小狗钱钱',
            '吃掉那只青蛙',
          ]
        }
      ],
    },
    sidebarDepth: 2
  }
}
