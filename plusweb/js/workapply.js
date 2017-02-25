    $(function(){
        var win_H = $(window).height();
        var win_W = $(window).width();
        if(win_W<=640){
            mobi(win_H);
        }
        if(win_W<1050 && win_W > 640)
        {
          var scale = win_W / 1050;
          $(".nav").css("width",scale*940);
          $(".contentA").css("width",scale*940);
          $(".contentB").css("width",scale*940);
          $(".contentC").css("width",scale*940);
        }

        if(win_W <1050 && win_W > 750)
        {   
            $("#back").css("margin-left",win_W/1920*400);
        }
        else if(win_W <= 750 && win_W >640)
        {   
            $("#back").css("display","block");
        }
        $(window).resize(function(){
            win_H = $(window).height();
            win_W= $(window).width();
            if(win_W<1050 && win_W > 640)
            {
                var scale = win_W / 1050;
                $(".nav").css("width",scale*940);
                $(".contentA").css("width",scale*940);
                $(".contentB").css("width",scale*940);
                $(".contentC").css("width",scale*940);
                
            }
            if(win_W <1050 && win_W > 750)
            {   
                $("#back").css("margin-left",win_W/1920*400);
            }
            else if(win_W <= 750 && win_W >640)
            {   
                $("#back").css("display","block");
            }
        })

        $(".headImg").on("click",function(){
            window.location.href="index.html";
        })

    })