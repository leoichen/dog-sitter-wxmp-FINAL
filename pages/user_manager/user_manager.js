// pages/user_manager/user_manager.js
Page({

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
  
  },

  bindSubmit: function (res) {
    console.log(res)
    const updatedUser = res.detail.value;
    const userId = wx.getStorageSync('user_id');
    console.log(23, userId);
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${userId}`,
      method: 'PUT',
      data: {
        user: updatedUser
      },
      success: function(res) {
        console.log(24, res)
        wx.redirectTo({
          url: '/pages/user_profile/user_profile',
        })
      }
    })
  }
})

