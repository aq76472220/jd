
var utils = require('../../utils/util.js')
Page({
  data: {
    isShow: false,//默认按钮1显示，按钮2不显示
    sec: "30",//设定倒计时的秒数，
    region: [], 
  },
  onLoad: function (options) {
  
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  getCode: function (e) {//发送验证码
    var _this = this;  
    utils.getCode(_this, _this.data.sec);//调用倒计时函数 
    wx.showToast({
      title: '发送成功',
      icon: 'success',
      duration: 2000
    })

  },
})