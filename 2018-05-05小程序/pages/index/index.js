// pages/index/index.js
Page({ 
  data: {
    imgUrls: [//banner
      '../../assets/banner1.png',
      '../../assets/banner2.png',
      '../../assets/banner3.png',
      '../../assets/banner4.png'
    ],
    newRecommend: { btnType: 1, btnFont: '申请借款' }, //新品推荐
    msgList: [  //公告
      { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代热点城市渐迎零折扣时代" },
      { url: "url", title: "悦如公寓三周年生日趴邀你免费吃喝欢唱" },
      { url: "url", title: "你想和一群有志青年一起过生日嘛？" }
    ]
  }, 
  onLoad: function (options) {
  
  }
})