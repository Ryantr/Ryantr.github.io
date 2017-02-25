var win_H;
var scale;
var timerBtn;
var sevBtnhtml,sevId;//sevbtn hover临时变量

$(function(){
    $('.setBtnod').addClass('cloudBtn')
    getLogin();
    position();//js计算适配
    $(".mainContainer").css("opacity","1");
    $(window).resize(function(){
        position();
    });//resize重定位


    $(".pagination-pages").hover(function(){
        $(this).children('.pagination-pages-hover').show();
        $(this).children('.pagination-guide').show('300');
    },function(){
        $(this).children('.pagination-pages-hover').hide();
        $(this).children('.pagination-guide').hide();
    });
    $(".pagination-pages").on("click",function(){
        var pageNums = $(this).attr("data-id");
        mainSwiper.slideTo(pageNums);
    });//翻页器
    //slide1
    $("#searchInput").focus(function(){
        var searchH = win_H/900*230;
        if(searchH < 180){searchH = 180;}
        $(".searchResultContainer").transition({height:searchH},300,function(){
            $(".lineTitle-lm").show();
            $(".ResultBtnContainer").show();
        });
    })
    // $("#searchInput").blur(function(event) {
    //     // $(".searchResultContainer").slideUp();
    //     $(".lineTitle-lm").hide();
    //     $(".ResultBtnContainer").hide();
    //     $(".searchResultContainer").transition({height:0},200);
    // });
    $("#searchBtn").on("click",function(){
        var searchI = $('#searchInput').val();
        var strSev = "静物产品空间拍摄美食餐饮精选形象照精选团队照活动摄影活动摄像";
        var searchFlag = strSev.indexOf(searchI);
        if ( 0 < searchFlag && searchFlag <= 3)
        {   
            window.location.href="/service/type?type=10&city=1";
        }else if(3 < searchFlag && searchFlag <= 7)
        {
            window.location.href="/service/type?type=20&city=1";
        }else if(7 < searchFlag && searchFlag <= 11)
        {
            window.location.href="/service/type?type=30&city=1";
        }else if(11 < searchFlag && searchFlag <= 16)
        {
            window.location.href="/service/type?type=40&city=1";
        }else if(16 < searchFlag && searchFlag <= 21)
        {
            window.location.href="/service/type?type=50&city=1";
        }else if(21 < searchFlag && searchFlag <= 23)
        {
            window.location.href="/service/type?type=60&city=1";
        }else if(23 < searchFlag)
        {
            window.location.href="/service/type?type=70&city=1";
        }else{
            mainSwiper.slideTo(2);
        }
    })

    //meun
    $(".userInfoContainer").hover(function(){
        $('.userInfoMenu').stop().slideDown('300');
    },function(){
        $('.userInfoMenu').stop().slideUp('300');
    })
    //slide2 hover
    $(".cardDoor").on("click",function(){
        $(".cardDoor").removeClass('cardOpen');
        $(this).addClass('cardOpen');

    });
    //slide3 hover
    $(".cardPic").hover(function(){
        $(this).stop().transition({ scale: 1.1},200); 
        $(this).children(".cardPicBg").children(".hoverCover").stop().transition({height:400},300,'linear');
        $(this).children(".cardPicBg").children(".hoverCover").children('p').stop().show()
    },function(){
        $(this).stop().transition({ scale: 1},200); 
        $(this).children(".cardPicBg").children(".hoverCover").children('p').stop().hide();
        $(this).children(".cardPicBg").children(".hoverCover").stop().transition({height:0},100);
    });

    $(".cardPicBg").on("click",function(){
        var toP = $(this).attr("data-p");
        mainSwiper.slideTo(toP);
    })
    //slide4 hover

    $(".sevContainer").each(function(){
        $(this).children(".sevPic").eq(0).addClass('sevShow');
        $(this).siblings('.sevTitleContainer').children(".sevTitle").children(".sevType").eq(0).addClass('sevShow');
    });
    $(".sevBtn").hover(function(){
        //$('.sevBtnhover').text(sevBtnhtml).removeClass('sevBtnhover');
        sevBtnText(this);
        sevId = $(this).attr("data-id");
        $("#sevPic-"+sevId+"").addClass("sevShow").siblings('.sevPic').removeClass("sevShow");
        $("#sevType-"+sevId+"").addClass("sevShow").siblings('.sevType').removeClass("sevShow");
    },function(){});
    clickListen();//监听



    
})//main
//改变sevbtn的内容
function sevBtnText(self){
    $('.sevBtnhover').text(sevBtnhtml).removeClass('sevBtnhover');
    $(self).addClass("sevBtnhover");
    sevBtnhtml = $(".sevBtnhover").text();
    $(".sevBtnhover").text("立即预约");
}
//页面适配
function position(){
    win_H = $(window).height();
    scale = win_H/900;
    //div高度需要适配
    $(".mainContainer").height(win_H);
    $(".pagination").css("top",(win_H-310)/2);
    //slide1
    // $(".searchResultContainer").height(win_H/900*230);
    //slide2文字居中
    $(".cardDoor .titleOpen").each(function(){
        var thisH = $(this).height();
        var marginT = (win_H - thisH)/2;
        $(this).css("top",marginT);
    })
    $(".cardDoor .titleClose").each(function(){
        var thisH = $(this).height();
        var marginT = (win_H - thisH)/2;
        $(this).css("margin-top",marginT);
    })
    //slide3
    $(".picContainer .cardPic").each(function(){
        $(this).css("margin-top",90*scale);
    });
    $(".picContainer .cardPicBg").each(function(){
        var cardW = $(this).width()
        $(this).height(cardW*0.65).css("margin-top",30*scale);
    });

    $(".hoverCover p").each(function(){
        var thisH = $(this).height();
        var parentH = $(".cardPicBg").height();
        $(this).css("padding-top",(parentH - thisH)/2);
    });
    var picContainerH = $(".picContainer").height();
    $(".picContainer").css("margin-top",(win_H - picContainerH)/2);
    //slide4,slide5,slide6
    $(".sevBtnContainer").css("padding-top",70*scale)
    $(".sevBtn").each(function(){
        $(this).css("line-height",($(this).width()*3/11)+"px");
    });

    // $(".sevTitleContainer").each(function(){
    //     var sevH = $(this).height();
    //     $(this).css("padding-top",(win_H - sevH)/2)
    // });

    //slide8
    $(".dataTableContainer").height(484*$(".dataTableContainer").width()/830);
    $(".dataTableContainer").css("margin-top", (win_H-$(".dataTableContainer").height())/2)
    var w_dataBtn = $(".dataBtnContainer button").width();
    $(".dataBtnContainer button").height(w_dataBtn);
    $(".dataTableTitleContainer h4").css("margin-top",60*scale);
    $(".dataTableTitleContainer h5").css("margin-top",40*scale);
    // $(".activeDateBtn .btnGuide").height(w_dataBtn);
    var dataContainerH = $(".dataTableTitleContainer").height();
    $(".dataTableTitleContainer").css("margin-top",(win_H - dataContainerH)/2);
    timerBtn = setInterval(function(){
        $(".activeDateBtn .btnGuide").transition({ scale : 1.2,opacity:0},1500,function(){
            $(".activeDateBtn .btnGuide-l").css({ scale : 1,opacity:0.15});
            $(".activeDateBtn .btnGuide-s").css({ scale : 1,opacity:0.2});
        });   
    },1500);

    $(".point p").css({ scale: 0.1});
    //slide11
    $(".toTopBtn").css("line-height",$(".toTopBtn").width()*0.27+"px");

    $(".toTopBtn").on("click",function(){
        mainSwiper.slideTo(0);
    })
}


var mainSwiper = new Swiper('.mainContainer', {
    direction: 'vertical',
    keyboardControl:true,
    mousewheelControl:true,
    observer:true,
    effect : 'fade',
    resistanceRatio : 0,
    onSlideChangeEnd: function(swiper){
        console.log(swiper.activeIndex);
        pagination(swiper.activeIndex);
        switch (swiper.activeIndex)
        {
            case 3: 
                changeRightB();
                changeLeftW();
                var self = $(".section-4").find(".sevBtn").eq(0);
                sevBtnText(self);
                $(".section-4").find(".sevPic").removeClass("sevShow");
                $(".section-4").find(".sevPic").eq(0).addClass("sevShow");
                $(".section-4").find('.sevType').removeClass("sevShow");
                $(".section-4").find('.sevType').eq(0).addClass("sevShow");

            break;
            case 4: 
                changeRightW();
                changeLeftB();
                var self = $(".section-5").find(".sevBtn").eq(0);
                sevBtnText(self);
                $(".section-5").find(".sevPic").removeClass("sevShow");
                $(".section-5").find(".sevPic").eq(0).addClass("sevShow");
                $(".section-5").find('.sevType').removeClass("sevShow");
                $(".section-5").find('.sevType').eq(0).addClass("sevShow");

            break;
            case 5: 
                changeRightB();
                changeLeftW();
                var self = $(".section-6").find(".sevBtn").eq(0);
                sevBtnText(self);
                $(".section-6").find(".sevPic").removeClass("sevShow");
                $(".section-6").find(".sevPic").eq(0).addClass("sevShow");
                $(".section-6").find('.sevType').removeClass("sevShow");
                $(".section-6").find('.sevType').eq(0).addClass("sevShow");
            break;
            case 6:   
                changeRightB();
                changeLeftB();
                numUp1.start();
                numUp2.start();
                mapShow();
            break;
            case 7:   
                changeRightB();
                changeLeftB();
            break;
            case 8:   
                changeRightW();
                changeLeftW();
                commentFly()
            break;
            case 9:   
                changeRightB();
                changeLeftB();

            break;
            default: 
                changeRightW();
                changeLeftW();
            break;
        }
      // if(swiper.activeIndex == 6)
      // {
      //   numUp1.start();
      //   numUp2.start();
      //   mapShow();
      // }
    },

});
function changeLeftB(){
    $(".topLogoImg").attr("src","http://static.1sight.cn/official/code/image/logoblack.png")
    $(".pagination-pages").addClass("pagination-pages-black");
}
function changeLeftW(){
    $(".topLogoImg").attr("src","http://static.1sight.cn/official/code/image/logo.png")
    $(".pagination-pages-black").removeClass('pagination-pages-black');
}
function changeRightB(){
    $(".navBtnContainer").addClass('navBtnBlack');
    $(".userInfo").addClass('userInfoBlack');
}
function changeRightW(){
    $(".navBtnBlack").removeClass('navBtnBlack');
    $(".userInfo").removeClass('userInfoBlack');
}
//分页器的激活状态
function pagination(pages){
    $(".pagesActived").removeClass("pagesActived");
    $(".pagination-pages").each(function(){
        var pages_ = $(this).attr("data-id");
        var self_ = $(this)
        if(pages_ == pages)
        {           
            $(self_).children('.pagination-pages-active').addClass("pagesActived");
        }
    })
}
//刷新swiper 暂时没用
function newSwiper(){
    swiper = new Swiper('.mainContainer', {
        direction: 'vertical',
        keyboardControl:true,
        mousewheelControl:true,
        observer:true,
        resistanceRatio : 0,
    });
}
//地图点的出现
function mapShow(){
    $(".pointG1 p").each(function(){
        $(this).transition({ scale: 1},800,'easeInOutBack');
    });
    setTimeout(function(){
        $(".pointG2 p").each(function(){
            $(this).transition({ scale: 1},800,'easeInOutBack');
        });
    },600);
}

//数字递增
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var numUp1 = new CountUp("carmersNum", 0, 1892, 0, 3, options);
var numUp2 = new CountUp("citysNum", 0, 23, 0, 3, options);
//数据线
function dataLine(per,per2,per3,step,self){
    clearInterval(timerBtn);
    $(".dataTableLine").transition({height:""+per+"%"},500);
    $(".dataTablePoint").transition({height:""+(per*1+3)+"%"},800);
    $(".dataTableDLine-1").transition({width:""+per2+"%"},800);
    $(".dataTableDLine-2").transition({width:""+per3+"%"},800);
    $(self).addClass('btnDisabled').attr("disabled","disabled").removeClass("activeDateBtn");
    $(self).next("button").addClass('activeDateBtn').removeClass('btnDisabled').removeAttr("disabled");
    
    $(".activeDateBtn .btnGuide").transition({ scale : 1.2,opacity:0},1600,function(){
        $(".activeDateBtn .btnGuide-l").css({ scale : 1,opacity:0.15});
        $(".activeDateBtn .btnGuide-s").css({ scale : 1,opacity:0.2});
    });     
    timerBtn = setInterval(function(){
        $(".activeDateBtn .btnGuide").transition({ scale : 1.2,opacity:0},1500,function(){
            $(".activeDateBtn .btnGuide-l").css({ scale : 1,opacity:0.15});
            $(".activeDateBtn .btnGuide-s").css({ scale : 1,opacity:0.2});
        });  
    },1500);
    if(step < 4)
    {
        $(".dataTableP1").removeClass('sevShow');
        $(".dataTableP1").eq(step).addClass('sevShow');
        $(".dataTableP2").removeClass('sevShow');
        $(".dataTableP2").eq(step).addClass('sevShow');   
    }

}

//评论
function commentFly(){
    var win_W_comment = $(window).width();
    setTimeout(function(){
        $(".fly-2").transition({x:-(0.85*win_W_comment)},2500,function(){});
    },1000);
    $(".fly-1").transition({x:-(0.85*win_W_comment)},2500,function(){});

    // setTimeout(function(){
    //     $(".fly-2").transition({x:-(0.85*win_W_comment)},2500,function(){});
    // },1000);
    
    //$(".fly-3").transition({x:-2000},2000,function(){});
}
//判断登陆
function getLogin(){
    $.ajax({
        url: '/index/status',
        type: 'get',
        dataType: 'json',
        data: {},
        success:function(data){
            if(data.code == 0)
            {   
                $(".userInfoName").html(data.result.username);
                $(".userInfoTx").css("background-image","url("+data.result.avater+")");
                $(".navLogout").hide();
                $(".navLogin").show();
            }else{
                //没有登陆
                $(".navLogin").hide();
                $(".navLogout").show();
            }
        },
    });
    
}


function clickListen(){
    //退出
    $('.logoutBtn').click(function(){
        $.ajax({
            url: '/user/logout',
            type: 'POST',
            dataType: 'json',
            data: {},
            success:function(data){
                if(data.code == 0)
                {  
                    getLogin();
                }else{
                    
                }
            },
        });
    })
    //我的订单
    $('.listBtn').on('click',function(){
        window.location.href = '/order?urlcode=1';
    });
    //我的云图库
    $('.setBtnod').on('click',function(){
        window.location.href = '/ablum?urlcode=2';
    });
    //公司资料设置
    $('.setBtn').on('click',function(){
        window.location.href = 'profile?urlcode=3';
    });
    //帮助
    $('#helpBtn1').on('click',function(){
        window.location.href = '/views/help_center.html';
    });
    //帮助
    $('#helpBtn2').on('click',function(){
        window.location.href = '/views/help_center.html';
    });
    //成为摄影师 
    $('#tobeBtn').on('click',function(){
        window.location.href = '/views/to_camera.html';
    });
    //未登录 注册
    $('#signinBtn1').on('click',function(){
        window.location.href = '/register';
    });
    //登录
    $("#loginBtn").on("click",function(){
        window.location.href="/login";
    });

    $(".sevBtn").on("click",function(){
        $('.qf_nav_top').click(function(){
            $('.qf_tan').hide();
        });
        var city = remote_ip_info.city;
        $('.qf_didian').html(remote_ip_info.city);
        var type_ = $(this).attr("data-type");
        $('.qf_tan').show();
        $('.qf_dianji div').unbind('click').on('click', function() {
            $(this).css({"border":"5px"});
            $(this).siblings('div').css({"border":0})
            var data_name = $(this).attr('data-name');
            var city = remote_ip_info.city;
            window.open("/service/type?type="+type_+"&city="+data_name+"");
        });
        
    })
    //$(".searchResultBtn")

    $('.searchResultBtn').click(function(){
        var _ind = $(this).text();
        $("#searchInput").val(_ind);
        $(".lineTitle-lm").hide();
        $(".ResultBtnContainer").hide();
        $(".searchResultContainer").transition({height:0},200);
    })
}