$(function(){
    $("#fansWeibo").on("click",function(){
        window.open("http://weibo.com/plusspace");
        //window.location.href = "http://weibo.com/plusspace";
    })
    $("#weibo").on("click",function(){
        window.open("http://weibo.com/plusspace");
        //window.location.href = "http://weibo.com/plusspace";
    })

    $("#fansWechat").on("click",function(){
        window.open("http://mp.weixin.qq.com/s?__biz=MzI5NzAyOTAxMw==&mid=400407282&idx=1&sn=6fab1c09abc3d8322d336296b484cd04&scene=0#rd");
    })
    $("#wechat").on("click",function(){
        window.open("http://mp.weixin.qq.com/s?__biz=MzI5NzAyOTAxMw==&mid=400407282&idx=1&sn=6fab1c09abc3d8322d336296b484cd04&scene=0#rd");
    })
})


function mobi(){
    addTouchListeners();
    $("#menuIcon").on("click",function(){
        $(".meunContainer").addClass('meunshow');
    });
    $("#meunClose").on("click",function(){
        $(".meunContainer").removeClass('meunshow');
    });
}

function addTouchListeners() {     
    var mx_s=0;mx_e=0;
    //var dom = document.getElementById("fans");
    if(typeof(window.ontouchstart) === 'undefined'){    
        //alert("请使用移动设备打开")
        return;    
    }; 
    document.body.addEventListener('touchstart', function(e) {
        // e.preventDefault();
        mx_s=e.touches[0].pageX;
        mx_e = mx_s;
    }, false);
    document.body.addEventListener('touchmove', function(e) {
                //单点触摸
        // e.preventDefault();
        mx_e=e.touches[0].pageX;
    }, false);
    document.body.addEventListener('touchend', function(e) {
        // e.preventDefault();
        var dx = mx_e - mx_s;
        if(dx>200){
            $(".meunContainer").removeClass('meunshow');
        }else if(dx<-200){
            $(".meunContainer").addClass('meunshow');
        }
    }, false);
}



function downmask(){
    var dom ='<div class="modalDownContainer" style="position:fixed;z-index:9999;top:0;left:0;height:100%;width:640px;background:rgba(0,0,0,0.8);display:none;"><img src="http://static.qiezipai.cn/plus_api/share/image/downmask.png" style="width:640px;position:absolute;top:0;left:0;"></div>'

    $("body").append(dom).css("overflow","hidden");
    $(".modalDownContainer").show();
    $(".modalDownContainer").on("click",function(){
        $(this).hide();
        $("body").css("overflow","auto");
    })

    window.location.href="https://itunes.apple.com/us/app/plus/id1023380370"

}