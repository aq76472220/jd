// pages/collection/collection.js
Page({ 
  data: {
    navdata: [{ id: 1, name: '全部' }, { id: 2, name: '信用贷' }, { id: 3, name: '房贷' }, { id: 4, name: '车贷' }, { id: 5, name: '企业贷' }],
    currentTab: 0,
    pageList01: [{ btnType: 1, btnFont: '申请借款', txtStyle: "" }, { btnType: 1, btnFont: '申请合作', txtStyle: "" }, { btnType: 2, btnFont: '失效', txtStyle: "" }],
    pageList02: [{ btnType: 1, btnFont: '申请合作', txtStyle: "" }, { btnType: 1, btnFont: '申请合作', txtStyle: "" }],
    pageList03: [{ btnType: 1, btnFont: '申请合作', txtStyle: ""}],
    pageList04: [{ btnType: 1, btnFont: '申请合作', txtStyle: ""}],
    pageList05: [{ btnType: 1, btnFont: '申请合作', txtStyle: "" }, { btnType: 1, btnFont: '申请合作', txtStyle: ""}],
    delBtnWidth: 80,//删除按钮宽度单位（rpx）
    
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
  },


  // 以下是侧滑菜单
  _initdata: function () { 
    var pageArry = this.data['pageList0' + (this.data.currentTab + 1)]
    for (var i = 0; i < pageArry.length; i++) {
      this.data['pageList0' + (this.data.currentTab + 1)][i].txtStyle = ""
    }
    this.setData({ ['pageList0' + (this.data.currentTab + 1)]: pageArry })
  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    this._initdata()
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {
        txtStyle = "left:0px";
      } else if (disX > 0) {
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      var index = e.currentTarget.dataset.index;
      var pageArry = this.data['pageList0' + (this.data.currentTab + 1)] 
      pageArry[index].txtStyle = txtStyle;
      this.setData({
        ['pageList0' + (this.data.currentTab + 1)]: pageArry
      });
    }
  },

  // touchE: function (e) {
  //   if (e.changedTouches.length == 1) {
  //     var endX = e.changedTouches[0].clientX;
  //     var disX = this.data.startX - endX;
  //     var delBtnWidth = this.data.delBtnWidth;
  //     var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
  //     var index = e.currentTarget.dataset.index;
  //     var pageArry = this.data['pageList0' + (this.data.currentTab + 1)]
  //     pageArry[index].txtStyle = txtStyle;
  //     this.setData({
  //       ['pageList0' + (this.data.currentTab + 1)]: pageArry
  //     });
  //   }
  // },

  //点击删除按钮事件  
  delItem: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否删除？',
      success: function (res) {
        if (res.confirm) {
          var index = e.currentTarget.dataset.index;
          var pageArry = that.data['pageList0' + (that.data.currentTab + 1)]
          pageArry.splice(index, 1);
          that.setData({
            ['pageList0' + (that.data.currentTab + 1)]: pageArry
          });
        } else {
          that._initdata()
        }
      }
    }) 
  }


})