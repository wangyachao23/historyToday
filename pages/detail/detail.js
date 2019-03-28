// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateOfToday: "",
    detail: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options:" + options);
    var year = options.year;
    var date = options.date;
    var title = options.title;
    this.setData({
      dateOfToday: year + "年" + date,
      detail: title
    });
  }
})