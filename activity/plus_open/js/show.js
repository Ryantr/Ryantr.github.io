
$(function(){   
    FastClick.attach(document.body);


    $(".sky").transition({x: -120},4000);
    $(".sky").transition({x:0},4000);
    $(".plane").transition({x:500,y:-400},8000);
    $(".plane").transition({x:0,y:0},0);
    
    var timer_sky = setInterval(function(){
        $(".sky").transition({x: -120},4000,'linear');
        $(".sky").transition({x:0},4000,'linear');
        $(".plane").transition({x:500,y:-400},8000);
        $(".plane").transition({x:0,y:0},0);
    },8000);//guidehand

    $(".square").on("click",function(){
        $("#square_arrow").css("display","none");
        $(".square_container").transition({ scale: [2, 2],opacity:0},800);
        setTimeout(function(){        
            $(".door_container").css("display","block");
            $(".square_container").css("display","none");
        },1000);
    });

    $("#door").on("click",function(){
        $("#door").css("opacity",0);
        $("#door_open").css("opacity",1);
        $("#door_arrow").css("display","none");
        setTimeout(function(){
            $(".door_container").transition({ scale: [2, 2],opacity:0},800);
        },500);
        setTimeout(function(){        
            $(".door_container").css("display","none");
            $(".main_container").css("display","block");
            addTouchListeners();
        },1000);
    });//开门
    $("#guide_hand").transition({ opacity: 0.5,x: -100},1000);
    $("#guide_hand").transition({ opacity: 1,x:0},0);
    var timer = setInterval(function(){
        $("#guide_hand").transition({ opacity: 0.5,x: -100},1000);
        $("#guide_hand").transition({ opacity: 1,x:0},0);
    },1000);//guidehand

    $("#exit_arrow").transition({ opacity: 0.5,x:100},1000);
    $("#exit_arrow").transition({ opacity: 1,x:0},0);
    var timer_arrow = setInterval(function(){
        $("#exit_arrow").transition({ opacity: 0.5,x: 100},1000);
        $("#exit_arrow").transition({ opacity: 1,x:0},0);
    },1000); //exitarrow

    $(".pic_click").on("click",function(){
        var self_id  = $(this).attr("id");
        var modal_id = "modal_"+self_id+"";
        var temp_src = $("#"+modal_id+" .modal_cantent img").attr("data-src");

        $("#"+modal_id+" .modal_cantent img").attr("src",temp_src);
        $("#"+modal_id+"").show();
    })

    $(".modal_show").on("click",function(){
        $(this).hide();
    })
    $(".modal_header").on("click",function(){
        $(".modal_show").hide();
    })
    $(".exit_click").click(function(){
        $(".share_container").css("display","block");
        $(".main_container").css("display","none");
    })
    $(".share_link").click(function(){
        $(".shareguide_container").show();
    })
    $(".shareguide").click(function(){
        $(".shareguide_container").hide();
    })

    position();
})

function addTouchListeners() {     
    var mx_s=0;mx_e=0;
    var dom = document.getElementById("warp");
    if(typeof(window.ontouchstart) === 'undefined'){    
        alert("请使用移动设备打开")
        return;    
    };       
    dom.addEventListener('touchstart', function(e) {
        e.preventDefault();
        mx_s=e.touches[0].pageX;
        mx_e = mx_s;
    }, false);
    dom.addEventListener('touchmove', function(e) {
            //单点触摸
        e.preventDefault();
        mx_e=e.touches[0].pageX;
        var d_x = mx_s-mx_e;
        var tranX = $(".main_container").css('x');
        tranX = parseInt(tranX);
        if(tranX <= 0 && tranX + con_W - 630 >= 0 )
        {
            $(".main_container").css({x : "-="+2*d_x});
            mx_s = mx_e ;
        }else if(tranX > 0){
            $(".main_container").css({x : -1});
        }else {
            $(".main_container").css({x : -(con_W - 640)});
        }
    }, false);
    dom.addEventListener('touchend', function(e) {
        e.preventDefault();
        if(timer_flag == 1)
        {
            timer_flag = 0;
            $("#guide_hand").css("display","none");
            clearInterval(timer);
        } 
    }, false);
}


function position(){
    //屏幕适配
    $(".main_container").css("height",win_H).css("width",con_W);
    $("#board").css({
        width: 1211*scale,
        height: 612*scale,
        top:186*scale
    });

    $("#pic1").css({
        width:240*scale,
        height:408*scale,
        top: 304*scale,
        left: 1232*scale,
    });
    $("#pic2").css({
        width:280*scale,
        height:250*scale,
        top: 350*scale,
        left: 1532*scale,
    });
    $("#pic3").css({
        width:332*scale,
        height:410*scale,
        top: 280*scale,
        left: 2150*scale,
    });
    $("#pic4").css({
        width:310*scale,
        height:276*scale,
        top: 310*scale,
        left: 2810*scale,
    });
    $("#pic5").css({
        width:246*scale,
        height:278*scale,
        top: 326*scale,
        left: 3592*scale,
    });
    $("#pic6").css({
        width:190*scale,
        height:256*scale,
        top: 346*scale,
        left: 4030*scale,
    });
    $(".modal_show").css("height",win_H);
    $(".door_container").css("height",win_H);
    $(".square").css("height",win_H);
    $(".sky").css("height",win_H);
    $(".exit_click").css("height",win_H);
    
    $(".share_container").css("height",win_H);
    $(".shareguide_container").css("height",win_H);

}