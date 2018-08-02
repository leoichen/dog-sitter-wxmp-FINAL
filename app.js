//app.js
const AV = require('./utils/av-weapp-min.js');
const config = require('./key');
AV.init({
  appId: config.appId,
  appKey: config.appSecret,
});
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/';
    const heroku = 'https://dog-sitter-woof.herokuapp.com/'
    console.log('processing to login')
    wx.login({
      success: (res) => {
        console.log(res)
        wx.request({
          url: heroku + 'api/v1/login',
          method: 'POST',
          data: {
            code: res.code
          },
          success: (res) => {
            // console.log(res)
            this.globalData.userId = res.data.userId;
          }
        })
      }
    })
  },
  globalData: {}
})