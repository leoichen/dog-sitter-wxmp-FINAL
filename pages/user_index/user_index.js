// pages/user_index/user_index.js
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
    const page = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/users',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.users)
        const users = res.data.data;
        page.setData(users)
      }
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
  onClick: function (event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/user_show/user_show?id=${id}`
    })
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