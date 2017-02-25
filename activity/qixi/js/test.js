var scores = 0;
var shareTitle = '七夕除了啪啪啪啪啪啪，我原来还能玩这个……'; 
$(function(){

    alert("成功")
    var win_h = $(window).height();
    var win_w = $(window).width();

    
    $(".container").css("min-height",win_h+"px");
    $(".container_result").css("min-height",win_h+"px");

    $(".result_bg").css("height",win_h+"px");
    $(".modal_share").css("height",win_h+"px");
    // $(".result_bg").css("width",win_w+"px");
    // 
    // 

})

function down(self,classname){
    $(self).css("margin-top","42px");
    $(self).addClass(classname);  
}
function move(self,classname){
    $(self).css("margin-top","30px");
    $(self).removeClass(classname);
}

function up(self,classname,fa,to){
    $(self).css("margin-top","30px");
    $(self).removeClass(classname);
    if(fa=="3") //第三个问题
    {
        //结果统计
        var temp_chose= $(self).attr("data-num");
        $.ajax({
            url: 'http://wx.1sight.cn/activity/qixi/statisic',
            type: 'GET',
            dataType: 'json',
            data: {chose: temp_chose},
        })

        //计算结果
        $(".container_3").hide();
        $(".result_egg").append('<img src="http://static.qiezipai.cn/activity/qixi/image/result/waiting.gif" class="result_wait">');      
        $(".container_result").show();

        window.setTimeout(function(){
        $(".result_wait").css("display","none");
        $(".sale_code span").css("background-color","rgba(0,0,0,0)");
        },4000);
        if( scores<5){
            setTimeout(function(){
                $(".result3").css("display","block");
            },4000)
            var temp_title=$(".result3").attr("data-value");
            shareTitle = "在异地恋中我最需要的是“"+temp_title+"”，你的呢？"
        }else if( 5<=scores<=8){
            setTimeout(function(){
                $(".result2").css("display","block");
            },4000)
            var temp_title=$(".result2").attr("data-value");
            shareTitle = "在异地恋中我最需要的是“"+temp_title+"”，你的呢？"
        }else if(scores>8){
            setTimeout(function(){
                $(".result1").css("display","block");
            },4000)
            var temp_title=$(".result1").attr("data-value");
            shareTitle = "在异地恋中我最需要的是“"+temp_title+"”，你的呢？"
        }

        alert(shareTitle);
    }else if(fa=="4"){
        // 结果页分享
        modal_show();
    }else if(fa=="5"){
        // 结果页下载
        // 
        $.ajax({
            url: 'http://wx.1sight.cn/activity/qixi/statisic',
            type: 'GET',
            data: { openId: openId,
                    type:'share_succ_friend',
                },
           })
    }else
    {   
        var temp_num = $(self).attr("data-num");
        scores = parseInt(scores) + parseInt(temp_num);
        $(".container_"+fa+"").hide();
        $("."+to+"").show();
    }
}

function modal_show(){
    $(".modal_share").css("left","0");
    $(".share_guide").css("left","0");
    window.setTimeout(function(){
    $(".modal_share").on("click",function(){
        $(".modal_share").css("left","-640px");
        $(".share_guide").css("left","-640px");

        $(".modal_share").off("click");//注销
    });
    },500);
}


function weixin_init(){ 
    var appid=$("#appid").val();
    var timestamp=$("#timestamp").val();
    var nonceStr=$("#nonceStr").val();
    var signature=$("#signature").val();
    var openId = $("#openid").val();

    var imgUrl = 'http://www.qiezipai.cn/image_m/logo_m.png';  // 分享后展示的一张图片
    var lineLink = $("#lineLink").val(); // 点击分享后跳转的页面地址
    var descContent = "又到七夕，朋友圈微博满屏爱，只是你不在？牛郎织女都在天上约了，异地恋们你们怕了吗？";  // 分享后的描述信息
    
    wx.onMenuShareAppMessage({
        title: shareTitle, // 分享标题
        desc: descContent, // 分享描述
        link: lineLink, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
           $.ajax({
               url: 'http://wx.1sight.cn/activity/qixi/statisic',
               type: 'GET',
               data: { openId: openId,
                type:'share_succ_friend',
               },
           })
        }, 
    cancel: function () { 
           $.ajax({
               url: 'http://wx.1sight.cn/activity/qixi/statisic',
               type: 'GET',
               data: { openId: openId,
                type:'share_cancel_friend',
               },
           })

        },

    });  


    wx.onMenuShareTimeline({
        title: shareTitle, // 分享标题
        link: lineLink, // 分享链接
        imgUrl: imgUrl, // 分享图标
    success: function () { 
           $.ajax({
               url: 'http://wx.1sight.cn/activity/qixi/statisic',
               type: 'GET',
               data: { openId: openId,
                type:'share_succ_quan',
               },
           })
        }, 
    cancel: function () { 
           $.ajax({
               url: 'http://wx.1sight.cn/activity/qixi/statisic',
               type: 'GET',
               data: { openId: openId,
                type:'share_cancel_quan',
               },
           })
           
        },     
});
}