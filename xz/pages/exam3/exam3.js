// pages/exam3/exam3.js
Page({
  handle1:function(e){
    console.log(e.target.dataset.idx);
  },
  handle2:function(e){
    var pid = e.target.dataset.pid;
    // wx: wx.redirectTo({
    //   url: '/pages/exam4/exam4?pid='+pid,
    // });
    wx:wx.navigateTo({
      url: '/pages/exam4/exam4?pid='+pid, 
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[{pid:1,pname:"欧尼"},{pid:2,pname:"啊您"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})