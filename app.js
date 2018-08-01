//app.js
const AV = require('./utils/av-weapp-min.js')
const config = require('./key')
AV.init({
  appId: config.appId,
  appKey: config.appSecret,
});
App({
  onLaunch: function () {
   
  },
  globalData: {

  }
})