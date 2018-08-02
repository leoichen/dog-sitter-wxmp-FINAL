// pages/user_index/user_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: '',
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    wx.request({
      url: 'https://dog-sitter-woof.herokuapp.com/api/v1/users?query=' + options.query,
      method: 'GET',
      success: function (res) {
        // console.log(res.data)
        // console.log(21, res.data.users)
        const users = res.data;
        page.setData(users)
        console.log(users)
      }
    })

    this.setData({
      categories: options.categories
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