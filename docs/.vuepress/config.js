module.exports = {
  title: '去冲浪鸭',
  description: '耶耶耶耶耶✌️',
  base: "/write-something/",
  themeConfig: {
    displayAllHeaders: false, // 默认值：false
    nav: [
      { text: '主页', link: '/' },
      {
        text: '知识库',
        items: [
          { text: 'JavaScript', link: '/knowledge/javascript/' },
          { text: 'Graphql', link: '/knowledge/graphql/' },
          { text: '常用链接', link: '/knowledge/links/' },
        ]
      },
      {
        text: '杂文',
        items: [
          { text: '生活记录', link: '/essay/diary/' },
          { text: '好文摘抄', link: '/essay/docs/' },
          { text: '读书笔记', link: '/essay/notes/' },
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
      '/knowledge/links/': [
        {
          title: '常用链接',
          children: [
            '',
          ]
        }
      ],
      '/knowledge/tools/': [
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
    sidebarDepth: 1
  }
}
