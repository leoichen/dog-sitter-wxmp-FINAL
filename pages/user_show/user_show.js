// pages/user_show/user_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_name: '',
    last_name: '',
    address: '',
    bio: '',
    id: '',
    price: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    const id = options.id;
    // const categories = options.categories
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${id}`,
      method: 'GET',
      success: function (res) {
        const first_name = res.data.user.first_name;
        const last_name = res.data.user.last_name;
        const language = res.data.user.language;
        const address = res.data.user.address;
        const bio = res.data.user.bio;
        const image_url = res.data.user.image_url
        const price = res.data.user.price
        page.setData({
          id: options.id,
          first_name: first_name,
          last_name: last_name,
          address: address,
          bio: bio,
          image_url: image_url,
          price: price
        })
      }
    })
  },
  onClick: function (e) {
    const page = this;
    wx.navigateTo({
      url: '../service_request/service_request?id=' + page.data.id
    })
    console.log(page.data.id)
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