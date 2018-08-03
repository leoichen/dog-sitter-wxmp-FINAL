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
    serviceid: '',
    price: '',
    user: [],
    mode: "scaleToFill",
    user: [{}],
    arr: ["https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cf9c13e09f5f2ec5139b6475751b310&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cf9c13e09f5f2ec5139b6475751b310&auto=format&fit=crop&w=800&q=60"],
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 5000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this;
    const id = options.id;
    const sitterId = options.id;
    console.log(1, id);
    console.log(2, sitterId);
    // const categories = options.categories
    wx.request({
      url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${sitterId}`,
      method: 'GET',
      success: function (res) {
        console.log(28, res.data.user.longitude);
        const user = res.data.user
        const first_name = res.data.user.first_name;
        const last_name = res.data.user.last_name;
        const language = res.data.user.language;
        const address = res.data.user.address;
        const bio = res.data.user.bio;
        const image_url = res.data.user.image_url;
        const serviceid = res.data.user.services[0].id;
        const price = res.data.user.price

        page.setData({
          id: options.id,
          first_name: first_name,
          last_name: last_name,
          address: address,
          bio: bio,
          image_url: image_url,
          price: price,
          user: user,
          serviceid: serviceid
        })
      }
    }),
      wx.getStorage({
        key: 'user_id',
        success: function (res) {
          // const userId = res.data
          wx.request({
           // url: `http://localhost:3000/api/v1/users/${sitterId}`,         
            url: `https://dog-sitter-woof.herokuapp.com/api/v1/users/${sitterId}`,
            method: 'GET',
            success(res) {
              console.log("res", res)
              const user = res.data.user;
              const longitude = res.data.user.longitude;
              const latitude = res.data.user.latitude;
              console.log(55,typeof longitude);
              console.log(56, typeof user);
              page.setData({
                'user': user,
                'user.longitude': longitude,
                'user.latitude': latitude,
                'map.hasMarkers': true,
               'markers': [{
                  iconPath: "/icons/shared_icons/marker.png",
                  latitude: latitude,
                  longitude: longitude,
                  width: 50,
                  height: 50,
                }],
                'circles': [{
                  latitude: latitude,
                  longitude: longitude,
                  radius: 150,
                  fillColor: "#00000015",
                  color: "#74CFCC",
                  strokeWidth: 2
                }]
                });
            }
          });
        }
    });
  },

  onClick: function (e) {
    const page = this;
 console.log(12, wx.getStorageSync('user_id'))
 if (wx.getStorageSync('user_id')) {
      wx.navigateTo({
      // url: '../service_request/service_request?id=' + page.data.id
      url: '../service_time/service_time?id=' + page.data.serviceid
    })
 }
 else {
   wx.navigateTo({
     url: '/pages/dog_new/dog_new',
   })
 }
  
 
    // console.log(page.data.serviceid)
    // console.log(page.data.id)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("onReady markers", this.data.markers)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("onShow markers", this.data.markers)
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