// pages/signPhone/signPhone.js
var utils = require('../../utils/util.js')

Page({ 
  data: {
    isShow: false,//默认按钮1显示，按钮2不显示
    sec: "30"//设定倒计时的秒数
  },
  onLoad: function (options) {

  },
  getCode: function (e) {
    var _this = this;
    utils.getCode(_this, _this.data.sec);//调用倒计时函数 
    wx.showToast({
      title: '发送成功',
      icon: 'success',
      duration: 2000
    })
  },

})