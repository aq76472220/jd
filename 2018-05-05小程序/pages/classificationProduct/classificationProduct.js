// pages/classificationProduct/classificationProduct.js
Page({
  data: {
    navdata: [//一级菜单
      { id: 1, name: '产品类型' }, 
      { id: 2, name: '额度范围' }, 
      { id: 3, name: '期限范围' }, 
      { id: 4, name: '城市范围' }
      ],
    currentTab: -1, // 一级菜单当前tab选中 
    filterTab: -1,//二级菜单当前tab选中 
    filterLists: [ //二级筛选条件
      [
        { name: '不限', isSelect: false }, 
        { name: '车贷', isSelect: false }, 
        { name: '房贷', isSelect: false }, 
        { name: '信用贷', isSelect: false }, 
        { name: '企业贷', isSelect: false }
      ], 
      [
        { name: '不限', isSelect: false },
        { name: '10万', isSelect: false }
      ],
      [
        { name: '不限', isSelect: false },
        { name: '12个月', isSelect: false }
      ], 
      [
        { name: '不限', isSelect: false },
        { name: '北京北京北京北京北京北京北京北京', isSelect: false },
        { name: '北京北京北京北京北京北京北京北京', isSelect: false },
        { name: '南京', isSelect: false }
      ]],
    pageList01: [//列表
      { btnType: 1, btnFont: '申请借款' }, 
      { btnType: 1, btnFont: '申请合作' }, 
      { btnType: 1, btnFont: '申请借款' }, 
      { btnType: 1, btnFont: '申请借款' }
      ]

  },
  onLoad: function (options) {

  },
  swichNav: function (e) { // 点击一级菜单事件
    this.setData({
      filterTab: -1
    })
    var that = this;
    var idx = e.currentTarget.dataset.current;
    if (this.data.currentTab === idx) {
      that.setData({
        currentTab: -1,
      });
    } else { 
      this.data.filterLists[idx].map((item,index)=>{
        if (item.isSelect){ 
          this.data.filterTab = index
        }
      }) 
      that.setData({
        currentTab: e.currentTarget.dataset.current,
        filterTab: this.data.filterTab
      });
 
    }
  },
  filterNav: function (e) {//点击二级菜单事件
    var that = this;
    var idx = e.currentTarget.dataset.current; 
    if (this.data.filterTab === idx) { 
      this.setData({
        currentTab: -1
      })
      return false
    } else { 
      var filterList = this.data.filterLists[this.data.currentTab].map((item, index)=>{
        item.isSelect=false 
        if (index == idx){
          item.isSelect = true; 
          this.data.navdata[this.data.currentTab].name = item.name 
        };
        return item
      }); 
      
      
    
      console.log('这里后台更新数据');
      
      that.setData({
        filterLists: this.data.filterLists,
        navdata: this.data.navdata,
        currentTab: -1
      }); 
     
    }; 
  }
})