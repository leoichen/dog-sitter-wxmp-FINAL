// pages/dog_new/dog_new.js
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
//     wx.request({
//       // url:`http://localhost:3000/api/v1/dogs` ,
//       url: `https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/users/1/dogs
// `,
//       method:'POST',
//       data:dog, 

//       success() {

//       }
//     })
  },

  bindSubmit: function(event) {
    console.log(event)
    const newDog = event.detail.value;
    wx.request({
     // url: "https://easy-mock.com/mock/5b5fda719581b5586d6a6a37/dog-sitter/users/1/dogs",
     url:"http://localhost:3000/api/v1/dogs",
      method:'POST',
      data: {dog: newDog},
      success(res) {
        console.log(res) 
        wx.navigateTo({
          url: '/pages/dog_show/dog_show'
        })
      }
    })
  }, 

  takePhoto: function () {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];

        that.uploadPromise(tempFilePath).then(res => {
          console.log('You can execute anything here')
          return res
        }).then(res => {
          console.log('Or .. execute more')
          return res
        }).then(res => {
          let url = `/pages/show/show?leanCloudImage=${res}`
          wx.navigateTo({ url })
        })

      }
    });
  },
  uploadPromise: function (tempFilePath) {
    return new Promise((resolve, reject) => {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save()
        .then(file => resolve(file.url()))
        .catch(e => reject(e));
    })
  },
  
  viewDog:function() {
    wx.navigateTo({
      url: '/pages/dog_show/dog_show'
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


