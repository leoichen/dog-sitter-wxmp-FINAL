// pages/service_index/service_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedCategories: 'Dog Sitter',
    items: [
      { name: 'Dog Sitter', value: 'Dog Sitter' },
      { name: 'Dog Walker', value: 'Dog Walker', checked: 'true' },
      { name: 'Dog Boarder', value: 'Dog Boarder' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   const page = this;
  // wx.request({
  //   url: 'https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/services',
  //   method: 'GET',
  //   success: function(res) {
  //     console.log(res)
  //     const services = res.data.data;
  //     console.log(services)
  //     page.setData(services)
  //   }
  // })
  },
  radioChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      selectedCategories: e.detail.value
    });
  },
  buttonClicked: function () {
    let page = this;
    wx.request({
      url: 'http://localhost:3000/api/v1/services',
      method: 'GET',
      data: {
        categories: page.data.selectedCategories
      },
      success: function(res) {
        console.log(res.data);
        console.log(res.data.services.map((item) => item.user_id));
        wx.redirectTo({
          // url: '../user_index/user_index?user_ids=' + res.data.services.map((item) => item.user_id),
          url: '../service_time/service_time?categories=' + page.data.selectedCategories,
        })
      }
    })
  },
  buttonClicked: function (event) {
    wx.redirectTo({
      url: '/pages/service_time/service_time',
    })
  },
  buttonClicked: function (event) {
    wx.redirectTo({
      url: '/pages/service_time/service_time',
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


