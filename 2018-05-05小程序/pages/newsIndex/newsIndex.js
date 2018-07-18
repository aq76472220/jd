// pages/news/news.js
Page({

  data: {
    navdata: [{ id: 1, name: '热门推荐' }, { id: 2, name: '行业新闻' }, { id: 3, name: '产品业务' }, { id: 4, name: '华仓资讯' }],
    currentTab: 0,
    pageList01: [{}, {}, {}, {}, {}],
    pageList02: [{}, {}, {}],
    pageList03: [{}, {}, {}, {}, {}],
    pageList04: [{}], 

  },
  onLoad: function (options) {

  },
  swichNav: function (e) { // tab切换 
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current,
      });
    }
  }
})