// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, name: "top" }, { id: 2, name: "jreey" }, { id: 3, name: "tom" }]
  },
  handleUname:function(e){
    var uname = e.target.dataset.uname;
    wx.redirectTo({
      url: '/pages/exam2/exam2?uname=' +uname,
    })
  },
  handleUser:function(e){
    console.log(e.target.dataset.uid);
  },
  jumpExam2:function(e){
    var age = e.target.dataset.age;
    // 跳转
    wx.redirectTo({
      
      url: '/pages/exam2/exam2?age='+age,
    }),
      console.log(age);
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