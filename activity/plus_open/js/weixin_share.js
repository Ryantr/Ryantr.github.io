
var appid=$("#appId").val();
var timestamp=$("#timestamp").val();
var nonceStr=$("#noncestr").val();
var signature=$("#signature").val();


var openId = $("#openId").val();
var imgUrl = 'http://static.1sight.cn/activity/plus_open/image/logo.png';  // 分享后展示的一张图片
var lineLink = $("#shareUrl").val(); // 点击分享后跳转的页面地址
var descContent = "因摄影相遇,为独立摄影发声,转发此页面现场可领取限量版勋章！";  // 分享后的描述信息
var shareTitle = 'Photos Link Us影展';  // 分享后的标题

wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appid, // 必填，公众号的唯一标识
    timestamp:timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature,// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage',''] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});


wx.ready(function(){
    
    wx.onMenuShareAppMessage({
        title: shareTitle, // 分享标题
        desc: descContent, // 分享描述
        link: lineLink, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '',
        success: function(){ 
            // $.ajax({
            //     url: 'http://wx.1sight.cn/activity/share/share',
            //     type: 'GET',
            //     data: {openId: openId},
            // })
            window.location.href="http://wx.1sight.cn/activity/share/share?openId="+openId+""
        }, 
    });  

    wx.onMenuShareTimeline({
        title: shareTitle, // 分享标题
        link: lineLink, // 分享链接
        imgUrl: imgUrl,
        success: function () { 
            window.location.href="http://wx.1sight.cn/activity/share/share?openId="+openId+""
        }, // 分享图标
    });

});
/*
wx.error(function(res){

    alert(res);

});
*/
