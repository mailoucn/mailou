const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = ""
innerAudioContext.obeyMuteSwitch = false
innerAudioContext.volume = 1

innerAudioContext.onPlay(() => {
  console.log('开始播放')
})

innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
innerAudioContext.onStop((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    musics:[
      { "name": "1.生日快乐", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90.mp3", "state": "cuIcon-playfill" },
      { "name": "2.再见只是陌生人", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E5%86%8D%E8%A7%81%E5%8F%AA%E6%98%AF%E9%99%8C%E7%94%9F%E4%BA%BA.mp3", "state": "cuIcon-playfill" },
      { "name": "3.只是太爱你", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E5%8F%AA%E6%98%AF%E5%A4%AA%E7%88%B1%E4%BD%A0.mp3", "state": "cuIcon-playfill" },
      { "name": "4.幸福是被你需要", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E5%B9%B8%E7%A6%8F%E6%98%AF%E8%A2%AB%E4%BD%A0%E9%9C%80%E8%A6%81.mp3", "state": "cuIcon-playfill" },
      { "name": "5.有点甜", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E6%9C%89%E7%82%B9%E7%94%9C.mp3", "state": "cuIcon-playfill" },
      { "name": "6.期待爱", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E6%9C%9F%E5%BE%85%E7%88%B1.mp3", "state": "cuIcon-playfill" },
      { "name": "7.直到遇见了你我只喜欢你", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E7%9B%B4%E5%88%B0%E9%81%87%E8%A7%81%E4%BA%86%E4%BD%A0%E6%88%91%E5%8F%AA%E5%96%9C%E6%AC%A2%E4%BD%A0.mp3", "state": "cuIcon-playfill" },
      { "name": "8.流星雨", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E6%B5%81%E6%98%9F%E9%9B%A8.mp3", "state": "cuIcon-playfill" },
      { "name": "9.说好不哭", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD.mp3", "state": "cuIcon-playfill" },
      { "name": "10.白羊", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E7%99%BD%E7%BE%8A.mp3", "state": "cuIcon-playfill" },
      { "name": "11.为你写诗", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E4%B8%BA%E4%BD%A0%E5%86%99%E8%AF%97.mp3", "state": "cuIcon-playfill" },
      { "name": "12.小星星", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E5%B0%8F%E6%98%9F%E6%98%9F.mp3", "state": "cuIcon-playfill" },
      { "name": "13.童话", "url": "https://xbt-data.oss-cn-beijing.aliyuncs.com/ktv/%E7%AB%A5%E8%AF%9D.mp3", "state": "cuIcon-playfill" },
     
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function (event) {
      let value = event.currentTarget.dataset.value

      if ("cuIcon-playfill" == value.state){
        for (var i = 0; i < this.data.musics.length ; i ++){
          if (this.data.musics[i].name == value.name){
            this.data.musics[i].state = "cuIcon-stop";
            innerAudioContext.src = this.data.musics[i].url;
            innerAudioContext.play()
          }else{
            this.data.musics[i].state = "cuIcon-playfill";
          }
        }
      }else{
        for (var i = 0; i < this.data.musics.length; i++) {
          if (this.data.musics[i].name == value.name) {
            this.data.musics[i].state = "cuIcon-playfill";
            innerAudioContext.stop();
          } else {
            this.data.musics[i].state = "cuIcon-playfill";
          }
        }
      }
      this.setData({
        musics: this.data.musics
      })
      console.log(this.data.musics);
    },
    onHide: function () {
      innerAudioContext.stop();
      const bgMusic = wx.getBackgroundAudioManager()
      bgMusic.paly();
    },
    onUnload: function () {
      innerAudioContext.stop();
      const bgMusic = wx.getBackgroundAudioManager()
      bgMusic.play();
    },
    onLoad: function (options) {

      const bgMusic = wx.getBackgroundAudioManager()
      bgMusic.pause();
    },
  }
})
