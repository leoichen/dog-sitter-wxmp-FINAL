// pages/service_time/service_time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service_id: 0,
    categories: '',
    date1: '',
    date2: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'service_id': options.id
    })
  },

  bindDateChangeStart: function (e) {
    console.log(e.detail.value)
    this.setData({
      'date1': e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    console.log(e.detail.value)
    this.setData({
      'date2': e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  buttonClickedNext: function (e) {
    console.log(e)
    console.log(getApp().globalData)
    console.log(23, this.data)
    const pageData= this.data;
    console.log(24, typeof pageData.date1)
    console.log(24, typeof new Date(pageData.date1))
    const date1 = new Date(pageData.date1);;
    const date2 = new Date(pageData.date2);

    const newBooking = {
      start_date: date1,
      end_date: date2,
      serivce_id: service_id
    }
    const page = this;
    const id = pageData.service_id;
     wx.request({
       url: `https://dog-sitter-woof.herokuapp.com/api/v1/services/${id}/bookings`,
       method: 'POST',
      data: {
        booking: newBooking
      },
      success: function(res) {
        console.log('res', res)
      }
    }),
    
    // wx.navigateTo({
    //   url: '../user_index/user_index?query=' + page.data.categories,
    // })
    console.log(page.data.categories)
  },
  
  buttonClickedBack: function (e) {
    wx.navigateTo({
      url: '../service_request/service_request',
    })
  },
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