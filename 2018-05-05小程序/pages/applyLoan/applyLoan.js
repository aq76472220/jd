// pages/applyLoan/applyLoan.js
Page({ 
  data: {
    isCollection:0,
    isShowModel: 1//组件模态框（影藏）
  },
  collectionHandle:function(){
    this.setData({
      isCollection: !this.data.isCollection
    })
  },
  // 模态框
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)

    this.setData({
      isShowModel: !this.data.isShowModel
    })
  }, 
})