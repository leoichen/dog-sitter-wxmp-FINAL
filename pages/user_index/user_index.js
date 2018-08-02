// pages/user_index/user_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: '',
    categories: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    this.setData({
      categories: options.query
    })
    
    wx.request({
      url: 'https://dog-sitter-woof.herokuapp.com/api/v1/users?query=' + options.query,
      method: 'GET',
      success: function (res) {
        const users = res.data;
        page.setData(users)
        console.log(users)
      },
    })
  },
  onClick: function (event) {
    const page = this;
    wx.navigateTo({
      url: '../user_show/user_show?id=' + event.currentTarget.dataset.id
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