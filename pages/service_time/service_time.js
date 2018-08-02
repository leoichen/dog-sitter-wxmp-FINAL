// pages/service_time/service_time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: ''
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id;
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/services/${id}/bookings`,
      method: 'POST',

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  buttonClickedNext: function (e) {
    const page = this;
    wx.navigateTo({
      url: '../user_index/user_index?query=' + page.data.categories,
    })
    console.log(page.data.categories)
  },
  bindDateChangeStart: function (e) {
    console.log(e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    console.log(e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  buttonClickedBack: function (e) {
    wx.navigateTo({
      url: '../service_request/service_request',
    })
  },
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