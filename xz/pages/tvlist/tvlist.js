// pages/shoplist/shoplist.js
Page({
  
  loadMore: function () {
    
    //没有下一页的情况下停止
    if (this.data.hasMore == false) return;
    console.log("和大V好uvdbuicu");
    //获取两个参数
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    //创建ajax
    wx.request({
      url: 'http://127.0.0.1:3000/getupd',
      data: { pno: pno, pageSize: ps },
      //接收返回数据
      success: (result) => {
        // //拼接数组
       
        var rows = this.data.upd.concat(
          result.data.data
        );
        
        //获取总页数判断是否有下一页
        var pageCount = result.data.pageCount;
        var flag = pno < pageCount;
        //将返回数据保存data属性
        this.setData({
          upd: rows,
          hasMore: flag,
          pageIndex: pno
        });
        
        // //添加动态  添加动画
        wx.showLoading({
          title: '正在努力加载',
        });
        // 卸载加载动画
        setTimeout(function () {
          wx.hideLoading();
        }, 500)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/4f367fb63d22d3269f071a0085c7b7a4.jpg" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/5cbeb7a3bb8a32b788c8e0e6068f16b7.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/c7566e10c304f119994bb0d81c0f76f6.jpg" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/fa1918b333b4cf61f7d5ac1fdd7b84f8.jpg" }
    ],
    upd:[],
    hasMore: true,
    pageIndex: 0,
    pageSize: 6,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})