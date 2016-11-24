Page({
    data: {
        nav: ['最新','最热','辅导'],
        nowIndex: '0'
    },
    navClick(e){
        //要获取到当前所点击导航的的data-index的值
        console.log(e.currentTarget.dataset.index);
        this.setData({
            nowIndex: e.currentTarget.dataset.index
        })
    }
})