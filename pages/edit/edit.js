// pages/edit/edit.js
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
  const id = options.id;

  wx.request({
    url: `http://localhost:3000/api/v1/restaurants/${id}`,
    success: function(res) {
      console.log(res.data);
      const restaurant = res.data;
      page.setData(res.data)
    }
  })
  },


bindSubmit: function (event) {
console.log(event)
const restaurant_form = event.detail.value;
const id = this.data.id;

// get data from api
wx.request({
  url: `http://localhost:3000/api/v1/restaurants/${id}`,
  method: 'PUT',
  data: {restaurant: restaurant_form},
  success: function(res) {
    console.log(res);
  }
})

wx.reLaunch({
  url: '/pages/index/index',
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