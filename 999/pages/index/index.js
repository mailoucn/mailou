Page({
  data: {
  },
  showModal(e) {
    // this.setData({
    //   modalName: e.currentTarget.dataset.target
    // })
    wx.navigateTo({
      url: '../999/menu/menu'
    });
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  sub(e){
    console.log(this.data.message);
    if ("1416142436" == this.data.message){
      wx.navigateTo({
        url: '../999/menu/menu'});
    }else{
      wx.showToast({
        title: '笨蛋',
        icon: 'loading',
        duration: 1000
      });
    }
  },
  input(e) {
    this.setData({
      message: e.detail.value
    })
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
})