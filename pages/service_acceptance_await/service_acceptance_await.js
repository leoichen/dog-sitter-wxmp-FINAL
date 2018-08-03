// pages/service_acceptance_await/service_acceptance_await.js
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
    categories: '',
    price: '',
    'user': []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    const id = options.id;
    const userId = wx.getStorageSync('user_id');
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${userId}`,
      method: 'GET',
      success: function (res) {
        const currentUser = res.data.user;
        page.setData({
          'user': currentUser
        })
      }
    })
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
        const categories = res.data.user.services[0].categories
        // const categories = res.data.user.services.categories
        // price is not in heroku for now
        // console.log(res.data.user)
        page.setData({
          id: options.id,
          first_name: first_name,
          last_name: last_name,
          address: address,
          bio: bio,
          image_url: image_url,
          categories: categories,
          price: price,
          
        })
      }
    });
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