// pages/asccountSafe/asccountSafe.js
Page({
  data: {
    isSee01: false,
    isSee02: false,
    isSee03: false
  },
  onLoad: function (options) {
  
  },
  seeHandle01: function () {
    if (!this.data.isSee01) {
      this.setData({
        isSee01: true
      })
    } else {
      this.setData({
        isSee01: false
      })
    }
  },
  seeHandle02: function () {
    if (!this.data.isSee02) {
      this.setData({
        isSee02: true
      })
    } else {
      this.setData({
        isSee02: false
      })
    }
  },
  seeHandle03: function () {
    if (!this.data.isSee03) {
      this.setData({
        isSee03: true
      })
    } else {
      this.setData({
        isSee03: false
      })
    }
  },
})