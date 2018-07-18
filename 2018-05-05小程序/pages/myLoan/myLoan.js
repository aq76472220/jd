// pages/myLoan/myLoan.js
Page({
  data: {
    navdata: [{ id: 1, name: '全部' }, { id: 2, name: '受理中' }, { id: 3, name: '已受理' }],
    currentTab: 0,
    pageList01: [{ btnType: 3, btnFont: '已受理' }, { btnType: 3, btnFont: '已受理' }, { btnType: 3, btnFont: '已受理' }, { btnType: 3, btnFont: '已受理' }],
    pageList02: [{ btnType: 3, btnFont: '受理中' }],
    pageList03: [{ btnType: 3, btnFont: '已受理' }]

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