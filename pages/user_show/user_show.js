// pages/user_show/user_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: ["https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cf9c13e09f5f2ec5139b6475751b310&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cf9c13e09f5f2ec5139b6475751b310&auto=format&fit=crop&w=800&q=60"],
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 5000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const page = this;
    const id = options.id;
    wx.request({
      url:    'https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/user/1',
      method: 'GET',
      success: function(res) {
        // console.log(res.data.data.user)
        const user = res.data.data.user;
        page.setData(user)
      }
    });

    wx.request({
      url: 'https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/services/1/bookings/1',
      method: 'GET',
      success: function (res) {
        console.log(res.data.data.booking)
        const booking = res.data.data.booking;
        page.setData(booking)
      }
    })
    var array = this.data.arr
    for (let i = 1; i < 1; i++) {
      array.push("img/" + i + ".jpg")
    }
    this.setData({ arr: array })
  },

  buttonClickedConfirm: function (event) {
    wx.navigateTo({
      url: '/pages/service_request/service_request',
    })
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