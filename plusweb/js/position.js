$(function(){
    var win_W = $(window).width();
    var win_H = $(window).height();

    var content_H = win_H-250;
    $(".content").height(content_H);
    $(".iconContainer").css("top",(content_H-235)/2);

    $("#cIcon").hover(function(){
        $("#f_bg").hide();
        $("#p_bg").hide();
        $("#c_bg").show();
    },
    function(){
        $("#f_bg").show();
        $("#p_bg").hide();
        $("#c_bg").hide();
    }
    )

    $("#pIcon").hover(function(){
        $("#f_bg").hide();
        $("#c_bg").hide();
        $("#p_bg").show();
    },
    function(){
        $("#f_bg").show();
        $("#p_bg").hide();
        $("#c_bg").hide();
    })

})

