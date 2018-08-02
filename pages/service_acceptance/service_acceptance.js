// pages/service_acceptance/service_acceptance.js
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
    // console.log(options)
    const page = this;
    const id = options.id;
    wx.request({
      url: 'https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/user/1',
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data.user)
        const user = res.data.data.user;
        page.setData(user)
      }
    });
    var array = this.data.arr
    for (let i = 1; i < 1; i++) {
      array.push("img/" + i + ".jpg")
    }
    this.setData({ arr: array })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  copyToClipboard: function () {
    wx.setClipboardData({
      url: "tt700367"
    })
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