// pages/signPassword/signPassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSee01: false
  },
  onLoad: function (options) {
  
  },
  seeHandle01:function (){
    if (!this.data.isSee01){
      this.setData({
        isSee01: true
      })
    }else{
      this.setData({
        isSee01: false
      })
    }
  }
})