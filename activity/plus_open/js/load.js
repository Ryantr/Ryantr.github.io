var win_H;
var con_W;
var scale;
var timer_flag=1;//动画标志
var pic_load=0;
$(function(){
    win_H = $(window).height();
    scale = (win_H/1008);
    con_W = scale*4650;

    $(".loading").css("height",win_H);
    preload();
    loadappend();
})

function preload(){
    var dom_per ='<div class="preload"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/loading.gif"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/door_open.png"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/bg.jpg"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/board.jpg"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/door_bg.png"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/square_bg.png"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/sky.png"><img onload="loaded()" src="http://static.qiezipai.cn/activity/plus_open/image/share_bg.png"></div>'
    $(document.body).append(dom_per);
}

function loaded(){
    pic_load += 1;
    if(pic_load>7 )
    {
        setTimeout(function(){
            $(".square_container").css("display","block");
            $(".loading").transition({opacity:0},500);
            $(".loading").css("display","none");
        },3000);
    }
}

function loadappend(){
    var dom_square ='<div class="square_container"><img class="plane" src="http://static.qiezipai.cn/activity/plus_open/image/plane.png"><div class="sky"></div><div class="square"><img id="square_arrow" src="http://static.qiezipai.cn/activity/plus_open/image/arrow.gif"></div></div>'
    var dom_door ='<div class="door_container"><img id="door" src="http://static.qiezipai.cn/activity/plus_open/image/door.png"><img id="door_open" src="http://static.qiezipai.cn/activity/plus_open/image/door_open.png"><img id="door_arrow" src="http://static.qiezipai.cn/activity/plus_open/image/arrow_up.gif"></div>'
    var dom_main ='<div class="background"><div id="board"></div></div>'
    var dom_share='<div class="share_container"><div class="share_link"></div></div><div class="shareguide shareguide_container"><img class="shareguide" src="http://static.qiezipai.cn/activity/plus_open/image/share_guide.png"></div>'
    
    $(document.body).append(dom_square).append(dom_door).append(dom_share);
    $("#warp").append(dom_main);


    jQuery.getScript("http://static.qiezipai.cn/activity/plus_open/js/show.js", function(data, status, jqxhr) {
    });

}