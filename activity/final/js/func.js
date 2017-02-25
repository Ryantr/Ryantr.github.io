
var openid;
$( function(){
    openid = $("#openId").val();
    var oimg =$(".momentImgOne");
    imgGetSrc(oimg);
    imgload(oimg);

    var username = $("#username").val();
    var usertx = $("#usertx").val();
    var coverurl = $("#coverurl").val();
    $(".userTx").css("background-image","url("+usertx+")");
    $(".headerTx").attr("src",usertx);
    $(".qizhi").attr("src",usertx);

    $(".userName").html(username);
    $(".headerContainer").css("background-image","url("+coverurl+")");

    $(".foldbtn").on("click",function(){
      $(".fold").addClass('foldOpen');
      $(this).html("不能收起");
      pv("buttom-quanwen");
    })


    $(".modalContainer").on("click",function(){
      $(this).hide();
      $("body").css("overflow","auto");
    })

    $(".shareBtn").on("click",function(){
      $(".modalContainer").show();
      $("body").css("overflow","hidden");
      pv("buttom-shareguide");
    })

    $(".actBtn").on("click",function(){
      var url = $("#selfUrl").val();
      pv("buttom-act");
      window.location.href=url;
    })


    
})




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
            imgonload();
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
    $(".loadingContainer").hide();
    $("body").css("overflow","auto");
  }

  function pv(actions){
    $.ajax({
      async:true,
      url: '/activity/quan/statistic',
      type: 'post',
      data: { 
        openId:openid,
        action:actions,
      },
    }) 
  }