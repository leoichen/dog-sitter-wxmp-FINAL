// pages/service_index/service_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedCategories: 'Dog Sitter',
    items: [
      { name: 'Dog Sitter', value: 'Dog Sitter', checked: 'true' },
      { name: 'Dog Walker', value: 'Dog Walker' },
      { name: 'Dog Boarder', value: 'Dog Boarder' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  radioChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      selectedCategories: e.detail.value
    });
  },
  buttonClicked: function () {
    const page = this;
        wx.redirectTo({
          // url: '../service_time/service_time?categories=' + page.data.selectedCategories,
          url: '../user_index/user_index?query=' + page.data.selectedCategories,
        })
    console.log(page.data.selectedCategories)
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


