//index.js

var functions = require('../../utils/function.js');


Page({
    data: {
      hotList: [],
      hot_last_id: 0
    },
    onLoad: function(){
      //调用在function.js里面暴露的swiper方法
      functions.swiper(this);

      //调用获取最热门的接口
      functions.hot(this,this.data.hot_last_id);

    },
    onPullDownRefresh: function(){
      functions.hot(this);
      //下拉刷新请求完后，关闭请求数据
            wx.stopPullDownRefresh()
    }

  
})
