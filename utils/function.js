
var aUrl = {
    "swiper": "http://ios1.artand.cn/discover/home/rank",
    "hot": "http://ios1.artand.cn/discover/work/hot?last_id=",
    "new": "http://ios1.artand.cn/discover/work/new?last_id=0"
};


//请求幻灯片
function getSwiper(that){
    //console.log(that);
    wx.request({
        url: aUrl.swiper,
        method: 'GET',
        success: function(res){
            console.log(res);
            that.setData({
                swiperList: res.data.ads
            })
        }
    })
};


//请求热门的接口
function getHot(that,last_id){
    wx.request({
        url: aUrl.hot+last_id,
        method: 'GET',
        success: function(res){
            console.log(1);
           var oldList = that.data.hotList;
          // console.log(oldList);
          var newList = res.data.list.concat(oldList);
          newList.length = 2;
            that.setData({
                hotList: newList,
                hot_last_id: res.data.last_id
            });
           
        },
        complete: function(){
             
        }
    })
}

module.exports = {
    swiper: getSwiper,
    hot: getHot
}