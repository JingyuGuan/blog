module.exports = {
  "title": "Muggle",
  "description": "记录前端知识总结",
  "dest": "blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/JingyuGuan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "sidebar":'auto',
    "sidebarDepth":1,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Muggle",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang", {
        theme: ["miku", "whiteCat", "haru1", "haru2", "haruto", "koharu", "izumi", "shizuku", "wanko", "blackCat", "z16"],
        clean: false,
        messages: {
          welcome: "欢迎来到我的博客", home: "心里的话，我想要带你回家。", theme: "好吧，希望你能喜欢我的其他小伙伴。", close: "你不喜欢我了吗？痴痴地望着你"
        },
        messageStyle: { right: "68px", bottom: "290px"},
        width: 250,
        height: 320
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover', {
        title: "公告",
        body: [
          {
            type: "title",
            content: "欢迎加我的QQ 🎉🎉🎉",
            style: "text-align: center;"
          },
          {
            type: "text",
            content: "QQ：317357960",
            style: "text-align: center;"
          },
          {
            type: "text",
            content: "友链或疑问均可在留言板给我留言",
            style: "text-align: center;"
          }
        ]
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", {
        audios: [
          {
            name: 'I Wanted You',
            artist: 'Ina Wroldsen',
            url: '/bgm/Ina Wroldsen - I Wanted You.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003uuwhB44nowM_1.jpg?max_age=2592000'
          },
          {
            name: 'I Am You',
            artist: 'Kim Taylor',
            url: '/bgm/Kim Taylor - I Am You.mp3',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004ZRwxd3aCZ2Z_1.jpg?max_age=2592000'
          }
        ],
        autoplay: true,
        autoShrink: true,
      }
    ],
    [
      "cursor-effects", {
        size: 2, 
        shape: ['circle'], 
        zIndex: 999999999, 
      }
    ],
  ]
}