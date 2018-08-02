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
    markers: [{
      iconPath: "/icons/shared_icons/marker.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 50,
      height: 50
    }],
    circles: [{
      latitude: 0,
      longitude: 0,
      radius: 150,
      fillColor: "#00000015",
      color: "#74CFCC",
      strokeWidth: 2
    }],
    lt: "12.134534",
    lg: "33.13245",
    sc: '16',
    mk: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const sitterId = options.id;
    const page = this;
      wx.getStorage({
        key: 'user_id',
        success: function (res) {
          const userId = res.data
          wx.request({
            url: `http://localhost:3000/api/v1/users/${sitterId}`,
            method: 'GET',
            success(res) {
              // console.log("res", res)
              const longitude = res.data.user.longitude;
              const latitude = res.data.user.latitude;
              page.setData("data.markers.latitude", latitude);
              page.setData("data.markers.longitude", longitude);
            }
          });
        }
    });
    console.log("onLoad markers", this.data.markers)
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
    // console.log("onReady markers", this.data.markers)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("onShow markers", this.data.markers)
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