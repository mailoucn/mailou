//index.js
//获取应用实例
const app = getApp()

const bgMusic = wx.getBackgroundAudioManager()



Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    swiperList: [{
      url: 'cloud://ts-lbl.7473-ts-lbl/99/1.jpg'
    }, {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/2.jpg'
    }, {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/3.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/4.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/5.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/6.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/7.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/8.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/9.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/10.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/11.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/12.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/13.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/14.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/15.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/16.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/17.jpg'
    },
    {
      url: 'cloud://ts-lbl.7473-ts-lbl/99/18.jpg'
    },
    ],
    desires:[
      { name:"第一愿：一辈子",url:"../1/1"},
      { name: "第二愿：两种状态", url: "../2/2" },
      { name: "第三愿：三种期待", url: "../3/3" },
      { name: "第四愿：四个季节", url: "../4/4" },
      { name: "第五愿：五种感觉", url: "../5/5" },
      { name: "第六愿：缺失的第六天", url: "../6/6" },
      { name: "第七愿：七种情", url: "../7/7" },
      { name: "第八愿：八个方向", url: "../8/8" },
      { name: "第九愿：唯有小九", url: "../9/9" },
      { name: "第十愿：十方呵护", url: "../10/10" },
      { name: "第十一愿：十一个数字", url: "../11/11" },
      { name: "第十二愿：十二个星座", url: "../12/12" },
      { name: "第十三愿：十三首歌", url: "../13/13" },
      { name: "第十四愿：小惊喜", url: "../14/14" },
      { name: "第十五愿：一个承诺", url: "../15/15" },
      { name: "第十六愿：一个问题", url: "../16/16" },
      { name: "第十七愿：十七个晚安", url: "../17/17" },
      { name: "第十八愿：永远的十八岁", url: "../18/18" },
    ]
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function (options) {
    bgMusic.src = 'https://xbt-data.oss-cn-beijing.aliyuncs.com/1.mp3';
    bgMusic.title="我们结婚吧"
    bgMusic.play(); //播放音乐
    const db = wx.cloud.database()
    db.collection('essay').add({
      data: {
        title: "小九进来了",
        count: 15,
        userId: new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes()
      },
      success: res => {

      },
      fail: err => {

      }
    })
  }, 
  onShow: function () {
    // 页面出现在前台时执行
    bgMusic.play(); //播放音乐
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  goto(e){
    var url = e.currentTarget.dataset['url'];
    console.log(url);
    wx.navigateTo({
      url: url
    });
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})
