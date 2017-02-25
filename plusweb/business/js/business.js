   var _srcList = [];
   var i = 0;
   var pos;
   var cardH;
    $(function(){
        var win_H = $(window).height();
        var win_W= $(window).width();


        if(win_W<=640){
            mobi(win_H);
            position(win_H,win_W);
        }
        if(win_W > 640)
          {
            
            position(win_H,win_W);
          }

        $(".headImg").on("click",function(){
            window.location.href="../index.html";
        })

        $(window).resize(function(){
            win_H = $(window).height();
            win_W= $(window).width();
            if(win_W > 640)
            {
                position(win_H,win_W);
            }
        })

        $(".cardInnerContainer").on("click",function(){
            var child = $(this).siblings(".cardCover");
            child.css("display","block");
            $(".mask").css("display","block");
            $("body").css("overflow","hidden");

            AnchorClick(this);
            child.animate({height:win_H},0);

            setTimeout(function(){
                child.css("position","fixed");
                $("html,body").animate({ scrollTop: 0 }, 0);
                child.siblings('.mainOpenContainer').show();
                if(win_W > 640)
                {
                    $('.booking').animate({opacity:1,height:60,marginTop:120},300);
                }else{
                    $('.booking').animate({opacity:1,height:90,marginTop:300},300);
                }
               child.siblings('.close').show();
            },400);

            $(window).scroll(function(){
                if($(window).scrollTop()>=(win_H+100)){
                    $(".close").attr("src","image/closeg.png");
                } 
                else{
                    $(".close").attr("src","image/closew.png");
                } 
            });
            //读取图片
            var oimg = $(this).siblings('.mainOpenContainer').find(".imgs");
            imgload(oimg);
            imgGetSrc(oimg);

        });//打开一个card

        $(".close").on("click",function(e){
            e.preventDefault;
            var self= $(this);
            $("html,body").animate({ scrollTop: 0 }, 400);
            self.siblings('.mainOpenContainer').hide();
            $(".arrow").hide();
            if(win_W>640)
            {
                self.siblings(".cardCover").animate({
                height:parseInt(win_W / 1920*650)
            },400);  
            }else{
                self.siblings(".cardCover").animate({
                height:360
            },400);
            }
            $("html,body").animate({ scrollTop: pos}, 0);
            $(".mask").fadeOut(1000);

            setTimeout(function(){
                self.siblings(".cardCover").hide().css("position","absolute");
                self.hide();
                
                $('.booking').css({opacity:0,height:0,marginTop:0});
                $(".loading").show();
            },800);

        });
        $(".headImg").on("click",function(){
            window.location.href="../index.html";
        });
        $(".booking").on("click",function(){
            var which = $(this).attr("data-url");
            window.location.href="form.html#"+which+"";
        });
        $(".arrow").on("click",function(e){
            e.preventDefault;
            $("html,body").animate({ scrollTop: win_H}, 400)
        })
    }); //onload
    function position(win_H,win_W){
        var scale = win_W / 1920;
        cardH = parseInt(scale*650); //一个card的高度
        $(".mask").height(win_H);
        var coverD = $(".cardCover").css("display");
        if(coverD == "block") //openstate
        {
            $(".cardCover").height(win_H);
        }
        if(win_W>640)
        {
            $(".navContainer").css("height",win_H*0.13);
            var navH = $(".navContainer").height();
            var headimgH = $(".headImg").height();
            $(".headImg").css("top",(navH-headimgH)/2); //logo居中
            $(".cardContainer").height(cardH);
            $(".cardInnerContainer").height(cardH);
            $(".card1").css("top",win_H);
            $(".card2").css("top",win_H-cardH);
            $(".card3").css("top",win_H-cardH*2);
            $(".card4").css("top",win_H-cardH*3);

        }else{
            $(".navContainer").css("height",120);
            $(".headImg").css("margin-top",0);
            cardH = 360;
            $(".card1").css("top",win_H);
            $(".card2").css("top",win_H-cardH);
            $(".card3").css("top",win_H-cardH*2);
            $(".card4").css("top",win_H-cardH*3);
        }

        //mainopencontianer定位

    }
   
    var AnchorClick = function (obj) {
        pos = $(obj).offset().top;
        $("html,body").animate({ scrollTop: pos }, 400);
    };

    function imgload(oimg){
        _srcList = [];
        i = 0;　　　　 //获取所有图片路径，存为数组
        oimg.each(function(){
            _srcList.push($(this).attr('data-src'));
        });
        imgLoadComplate(_srcList[i]);
    }
    function imgLoadComplate(imgSrc){
        var _img = new Image();
        _img.src = imgSrc;
        _img.onload = function()
        {　　　　　//判断是否加载到最后一个图片
            if (i < _srcList.length-1) {
                i++;
                imgLoadComplate(_srcList[i]);
            }else{
                $(".loading").hide();
                $(".arrow").show();
                $("body").css("overflow","auto");
            }
        }
    }
    function imgGetSrc(oimg){
        oimg.each(function(){
            var othis=$(this)
            othis.attr("src",othis.attr("data-src"));
        })
    }  
    