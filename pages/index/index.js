var app = getApp()

Page({
  data: {

  },
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    // Get api data
    wx.request({
      url: 'http://localhost:3000/api/v1/cats',
      method: 'GET',
      success(cat) {
        const cats = cat.data.cats;
        // update local data
        page.setData({
          cats: cats
        });
        wx.hideToast();
      }
    });
    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 3000
    });
  },

  showCat(e) {
    const data = e.currentTarget.dataset;
    const cat = data.cat;

    wx.navigateTo({
      url: `../show/show?id=${cat.id}`
    });
  }

})