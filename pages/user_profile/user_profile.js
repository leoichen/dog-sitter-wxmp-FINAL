// pages/user_profile/user_profile.js

const app = getApp();

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
    const newUserInfo = e.detail.userInfo;
    console.log(typeof newUserInfo.avatarUrl)
    const newUser = {
      first_name: newUserInfo.nickName,
      address: newUserInfo.city,
      gender: newUserInfo.gender,
      image_url: newUserInfo.avatarUrl
    };

    this.setData({
      userInfo: e.detail.userInfo
    }),

      wx.request({
        url: 'http://localhost:3000/api/v1/users',
        method: 'POST',
        data: {
          user: newUser
        },
        success: function (res) {
          console.log(res);
        }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  
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