//index.js
//获取应用实例
const app = getApp()
  
Page({
  handleJump:function(e){
    var id = e.target.dataset.id;
    console.log(id);
    if(id==1){
     wx.navigateTo({
        url: '/pages/tvlist/tvlist',
      })
    }
  },
  sou:function(){
    wx.navigateTo({
      url: '/pages/sou/sou',
    })
  },
  update:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/upd',
      success:(result)=>{
        console.log(result.data);
        this.setData({
          upd:result.data,
        })
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
      { id: 4, img_url:"http://127.0.0.1:3000/img/fa1918b333b4cf61f7d5ac1fdd7b84f8.jpg"}
    ],
    navlist: [{ id:1,img_url:"http://127.0.0.1:3000/icons/4.png",title:"剧集"},
      { id: 2, img_url: "http://127.0.0.1:3000/icons/2.png",title:"电影"},
      { id: 3, img_url: "http://127.0.0.1:3000/icons/3.png",title:"综艺"},
      { id: 4, img_url: "http://127.0.0.1:3000/icons/1.png",title:"动漫"},
    ],
    upd:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.update();
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