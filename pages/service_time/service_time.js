// pages/service_time/service_time.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: '',
    date1: '',
    date2: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options:")
    console.log(options)
    const page = this;
    this.setData({
      service_id: options.id,
      user_id: wx.getStorageSync('user_id')
    })
    console.log(12233,this.data.user_id)
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${this.data.user_id}`,
      method: 'GET',
      success: function (res) {
        const dog_id = res.data.user.dogs[0].id
        page.setData ({
          dog_id: res.data.user.dogs[0].id
        })
      }
    })
  },

  bindDateChangeStart: function (e) {
    console.log("date1:")
    console.log(e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChangeEnd: function (e) {
    console.log("date2:")
    console.log(e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  buttonClickedNext: function (e) {
    const pageData= this.data;
    const date1 = new Date(pageData.date1);
    const date2 = new Date(pageData.date2);

    const newBooking = {
      start_date: date1,
      end_date: date2,
      serivce_id: +pageData.service_id,
      // user_id: wx.getStorageSync('user_id'), 
      dog_id: pageData.dog_id
    }
    const page = this;
    const serviceId = pageData.service_id;
     wx.request({
       url: `https://dog-sitter-woof.herokuapp.com/api/v1/services/${serviceId}/bookings`,
       method: 'POST',
      data: {
        booking: newBooking
      },
      success: function(res) {
        console.log('res', res)
      }
    }),

    console.log(page.data.categories)
  },
  
  buttonClickedBack: function (e) {
    wx.navigateTo({
      url: '../user_show/user_show',
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