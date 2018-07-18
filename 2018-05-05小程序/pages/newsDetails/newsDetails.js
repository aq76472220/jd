// pages/newsDetails/newsDetails.js
Page({ 
  data: {
    isThumbs: false
  }, 
  onLoad: function (options) {
  
  },
  thumbsUphandle:function(){
    if (!this.data.isThumbs) {
      wx.showToast({
        title: '点赞成功',
        icon: 'success',
        duration: 2000
      })
    }

    this.setData({
      isThumbs:true
    }); 
    
  }
})