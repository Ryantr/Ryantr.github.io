
var win_H;
var step = 1 ;
var txObject ="";
var i,persentage;
var _srcList = [];
var timer = [];
var choselist = [];
var _loadtimer = null;
var choseid;
var openid;
var audioflag = 0;
$(function(){
      openid = $("#openId").val();
      var win_H = $(window).height();
      $("body").height(win_H);
      $(".mainContainer").height(win_H);
      $(".modalContainer").css("margin-top",0.08*win_H);
      if(win_H < 950)
      {
        $(".modalContainer").height(790/1070*win_H);
      }
      $("#loadTitle2").css("top",$("#loadTitle").height()); 
      $("#earth").css("top",420/1000*win_H);
      $("#persentage").css("top",320/1000*win_H);

      $(".bg").height(win_H);
      $("#carbj").css("top",580/1070*win_H);
      
      $("#dljp").css("top",410/1070*win_H);

      $("#watersydney").css("top",420/1070*win_H);
      $("#housesydney").css("top",380/1070*win_H);
      $("#dssydney").css("top",170/1070*win_H);


      $("#qepole").height(win_H).css("top",-(113/1070*win_H));

      $(".modal_container_alert").css("height",win_H);
      $(".infoForm").css("margin-top",(win_H-620)/2);
      $(".modal_body").css("margin-top",(win_H-300)/2);
      loading();//loading
      //onclick
      
      // $('.mainContainer').on("click",function(){
      //     $(".modalContainer").show();
      // });

      // $(".modalInfo").on("click",function(){
      //   $(this).hide();
      //   $(".txArrow").hide();
      // });

      $(".txCard").on("click",function(){
        if(step<=6)
        { 
          var num = $(this).attr("data-num");
          if(txObject=="" || txObject == null)
          {
            txObject = $(this);
          }else{
            txObject.children(".txArrow").hide();
          }
          txObject = $(this);
          $(".modalInfo").hide();
          $("."+num+"").show();
          txObject.children(".txArrow").show();
          $("."+num+"").find(".modalHeaderTag").transition({ 
              scale:1,
              opacity:1,
              duration: 400, 
              easing: 'linear', 
          });

          $(".close").on("click",function(){
              $("."+num+"").hide();
              txObject.children(".txArrow").hide();
          })
        }

      })//头像

      $(".modalBtn").on("click",function(){
          // txObject.hide();
          txObject.removeClass('chose');
          var tempgrapher = txObject.attr("data-num");
          var tempid = txObject.attr("data-value");
          $("."+tempgrapher+"").hide();
          choselist.push(tempid);
          if (step<6)
          {
            if(step == 1)
            {
              pv("page-japan");
            }
            txObject.transition({ 
                opacity:0,
                scale:0.2,
                duration: 500, 
                easing: 'linear', 
                complete: function(){
                  txObject.hide();
                }
            });
          }
          else if(step == 6)//隐藏所有tx
          { 
            pv("page-paris");
            $(".txContainer").transition({ 
                opacity:0,
                scale:0.2,
                duration: 500, 
                easing: 'linear', 
                complete: function(){
                  $(".txContainer").hide();
                }
            });
          }
          $(".step"+step).transition({ 
              rotate:-90,
              opacity:0,
              x:-win_H,
              duration: 500, 
              easing: 'linear', 
              complete: function(){
                  $(".step"+step).hide();
                  step++;
                  if(step == 7)
                  {
                    var dom = $(".chose");
                    $(".chose").addClass("choseTx");
                    choseid = dom.attr("data-value");
                    $("#pariscard"+choseid+"").show();
                    // $(".infoparis").append(dom);//拿出摄影师信息
                  }
                  if(step <= 7)
                  {
                    for(j=0;j<=timer.length;j++)
                    {
                      clearInterval(timer[j]);
                    }//清除当前定时器
                    var func = "step"+step+"zoom";
                    window[func]();
                  }  
              }
          });
      });//切换城市

      $("#enter").on("click",function(){
        if(openid.length<=1)
        {
          $("#qrContainer").show();
          pv("page-qr");
        }
        else
        {
          pv("button-1");
          $(".modalGuide").show();
          var guideflag = 0;
          $("#guideok").on("click",function(){
            if(guideflag == 0)
            {
              $("#guideFirst").hide();
              $("#guideSecond").show();
              guideflag++;
            }
            else{
              $(".modalGuide").hide();
              

            

            }
          });
          $(".step").css("display","block");
          $(".loadingContainer").transition({ 
              rotate:-90,
              opacity:0,
              x:-win_H,
              duration: 500, 
              easing: 'linear', 
              complete: function(){
                $(".loadingContainer").hide();
              }
            });
          $(".txContainer").transition({bottom:30},500);
          step1zoom();
        }
      });//loading


      $(".infoparis").on("click",function(){
          pv("button-2");
          var dom=$(this).html();
          $(".txShareContainer").append(dom);

          $(".step7").transition({ 
            rotate:-90,
            opacity:0,
            x:-win_H,
            duration: 500, 
            easing: 'linear', 
            complete: function(){
              $(".step7").hide();
              $(".step8").css("overflow","auto");
            }
          });
      });//获得巴黎耶

      $("#getphone").on("click",function(){
          $(".getInfo").show();
          // pv("button-phone");
          // choselist.push(choseid);
          // var str = choselist[0]+choselist[1]+choselist[2]+choselist[3]+choselist[4]+choselist[5]+choselist[6];

      });
      $("#sendphone").on("click",function(){
        var phonenum = $("#infoPhone").val();
        var tempname = $("#infoName").val();
        var check_phone = mobilephoneFormatCheck(phonenum);
        if(tempname.length<1)
        {
          $("#infoName").addClass('userinfoalert');
        }
        else if(!check_phone)
        {
          $("#infoPhone").addClass('userinfoalert');
        }
        else
        {
            // $.ajax({
            //     url: 'http://wx.plus.1sight.cn/activity/godcamer/select',
            //     type: 'post',
            //     data: {
            //         openId:openid,
            //         phone:phonenum,
            //         name:tempname,
            //     },
            //     success:function(){
            //        $(".getInfo").hide();
            //        $("#getphone").css("background-color","#ccc").val("您的信息已收录，如中奖我们会电话通知");
            //     }
            //  });//手机号
        }

      })

      $("#checkresult").on("click",function(){
        $(".modalResult").show();
      })

      $("#checkshare").on("click",function(){
        $(".shareGuideContainer").show();
      })

      $(".userinfo").focus(function(){
        $(this).removeClass('userinfoalert')
      })
      $(".shareGuideContainer").on("click",function(){
        $(this).hide();
      })
      $("#audioBtn").on("click",function(){

        if(audioflag == 0)
        {
          document.getElementById('backaudio').pause();
          audioflag = 1;
          $("#audioBtn").removeClass('audiorotate');
        }
         else if(audioflag == 1)
        {
          document.getElementById('backaudio').play();
          audioflag = 0;
          $("#audioBtn").addClass('audiorotate');
        }
      })

      $(".closeother").on("click",function(){
        var tempobj = $(this).attr("data-obj");
        $("."+tempobj+"").hide();
      })      
  });//funtion


  function step1zoom(){
    var bjtimer = setInterval(function(){
        $("#carbj").transition({ x: 670 }, 5000,'linear',function(){
          $("#carbj").css({x:"-670px"}); 
        }); 
    },100);
    var bjtimer2 = setInterval(function(){
        $("#fogbj").transition({ x: -640 }, 10000,'easeInOutQuad');
        $("#fogbj").transition({ x: 0}, 10000,'easeInOutQuad'); 
    },100);
    timer = [];
    timer[0] = "bjtimer";
    timer[1] = "bjtimer2";
  }

  function step2zoom(){
    $("#monjp").transition({ y:-400 }, 500,'linear'); 
    setTimeout(function(){
       $("#sunjp").transition({ x: 50,y:-500 }, 500,'linear'); 
    },500);
    
    var jptimer = setInterval(function(){
        $("#dljp").transition({ rotate:10}, 1500,'linear'); 
        $("#dljp").transition({ rotate:-10}, 1500,'linear'); 
    },100);

    timer = [];
    timer[0] = "jptimer";
  }

  function step3zoom(){
    var sydneytimer = setInterval(function(){
        $("#watersydney").transition({x:50}, 2500,'linear'); 
        $("#watersydney").transition({ x:-50}, 2500,'linear'); 
    },100);

    var sydneytimer2 = setInterval(function(){
        $("#dssydney").transition({ y:-10}, 400,'linear'); 
        $("#dssydney").transition({ y:10}, 400,'linear'); 
    },0);
    timer = [];
    timer[0] = "sydneytimer";
    timer[1] = "sydneytimer2";
  }
  function step4zoom(){
    timer = [];
  }
  function step5zoom(){
    var lastimer = setInterval(function(){
        $("#lightlas").transition({rotate:-90}, 2500,'in-out'); 
        $("#lightlas").transition({rotate:0}, 2500,'in-out');

    },100);
    var lastimer2 = setInterval(function(){
        $("#wheellas").transition({rotate:180}, 40000,'linear',function(){
          $("#wheellas").css({rotate:0});
        });

    },100);
    timer = [];
    timer[0] = "lastimer";
    timer[1] = "lastimer2";
  }


  function step6zoom(){
    $("#jztskl").transition({ y:-300 }, 500,'linear'); 
    $("#jztlkl").transition({ y:-300 }, 500,'linear');
    timer = []; 
  }

  function step7zoom(){
    $(".infoparis").height(338);

    var paristimer = setInterval(function(){
        $("#cloudparis").transition({x:-40}, 2500,'in-out'); 
        $("#cloudparis").transition({x:0}, 2500,'in-out');

    },100);
    timer = [];
    timer[0] = "paristimer";
  }

  function loading(){
      $("#earth").transition({ 
        rotate:360,
        width:414,
        duration: 1500, 
        easing: 'linear', 
        complete: function(){
            $("#earth").css({rotate:0});
            $("#earth").addClass("earthLoading");
            var oimg = $(".lazy");
            imgload(oimg);  
        }
      });
  }



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
              var scale = 100/_srcList.length;
              persentage =parseInt( i * scale);
              imgLoadComplate(_srcList[i]);
              $("#persentage").html(persentage+"%");
          }else{
            var oimg = $(".lazy");
            imgGetSrc(oimg);
            imgonload();
            $("#earth").removeClass('earthLoading');
          }
      }
  }
  function imgGetSrc(oimg){
      oimg.each(function(){
          var othis=$(this)
          othis.attr("src",othis.attr("data-src"));
      })
  }

  function imgonload(){
      $("#persentage").hide();
      $("#enter").show();
      $("#loadTitle").transition({ 
        top:0,
        duration: 600, 
        easing: 'easeOutBack', 
        complete: function(){
          $("#loadTitle2").transition({width:424},400,"easeOutBack");

          $("#enter").transition({opacity:1},200);
        }
      });

      // $(".infoload").transition({ 
      //   bottom:150,
      //   duration: 600, 
      //   easing: 'easeOutExpo', 
      //   complete: function(){
      //     $("#enter").transition({opacity:1},200)
      //   }
      // });

  }


  function mobilephoneFormatCheck(mobilephone){
    var format = /^[1][0-9]{10,10}$/;
    if (!mobilephone.match(format)) {
    return false;
    }
    return true;
  }// 正则表达式

  function piu(text){
    $(".modal_body_title").html(text);
    $(".modal_container_alert").show();

    $(".modal_footer").on("click",function(){
        $(".modal_container_alert").hide();
    })//警告框
  }

  function pv(actions){
    // $.ajax({
    //   async:true,
    //   url: '/activity/godcamer/statistic',
    //   type: 'post',
    //   data: { 
    //     openId:openid,
    //     action:actions,
    //   },
    // }) 
  }