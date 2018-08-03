var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userId: 0,
    user:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function () {
    let page = this
    wx.getStorage({
    key: 'user_id',
    success: function (res) {
      console.log("useridblabla")
      console.log(res.data)
      const userId = res.data
      wx.request({
        url:`https://dog-sitter-woof.herokuapp.com/api/v1/users${userId}`, 
    method: 'GET',
    success(res) {

          console.log(res.data.dogs)
          const dogs = res.data.dogs;

          console.log('dogsss')
          const user = res.data
          page.setData(user)
          // console.log(33, dogs)    
        url:`https://dog-sitter-woof.herokuapp.com/api/v1/users/${userId}`, 
    method: 'GET',
    success(res) {
          console.log('dogsss') 
          console.log(res.data.user)
          const user = res.data.user
          page.setData({user: user})
    }
  });
    }
  })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  
  
  
  onReady: function () {
  
  },
  leftArrow: function (e) {
    wx.switchTab({
      url: '/pages/user_profile/user_profile',
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