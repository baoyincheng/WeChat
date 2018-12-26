// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    hasMore: true,
    pageIndex: 0,
    pageSize: 3,
  },
  loadMore: function () {
    //没有下一页的情况下停止
    if (this.data.hasMore == false) return;
    //获取两个参数
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    //创建ajax
    wx.request({
      url: 'http://127.0.0.1:3000/getMovie',
      data: { pno: pno, pageSize: ps },
      //接收返回数据
      success: (result) => {
        // //拼接数组

        var rows = this.data.list.concat(
          result.data.data
        );
        //获取总页数判断是否有下一页
        var pageCount = result.data.pageCount;
        var flag = pno < pageCount;
        //将返回数据保存data属性
        this.setData({
          list: rows,
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