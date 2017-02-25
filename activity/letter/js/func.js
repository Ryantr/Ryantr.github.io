var audioflag =0;
var mydate = new Date();
var date = mydate.getDate();

$(function(){
  $("#audioBtn").on("click",function(){
    document.getElementById('backaudio').pause();
    $(this).hide();
    $("#audioStop").show();
  });
  $("#audioStop").on("click",function(){
    document.getElementById('backaudio').play();
    $(this).hide();
    $("#audioBtn").show();
  });

  $(".hand2").on("click",function(){
    $(this).css("opacity",1);
    mainSwiper.unlockSwipeToNext();
    setTimeout(function(){
      mainSwiper.slideNext();
    },500);
  })

  $(".writeLetterBtn").on("click",function(){
    mainSwiper.unlockSwipeToNext();
    $("#letterInput").val("").removeAttr("readonly");
    $("#letterName").val("").removeAttr("readonly");
    $("#date").html(date).removeAttr("readonly");
    $(".sentLetterBtn").val("发送信件");
    mainSwiper.slideNext();
  })//自己写清空

  $(".xfContainer").on('click',function(){
    mainSwiper.unlockSwipeToNext();
    $("#letterInput").val($("#letterOwnerContent").val()).attr("readonly","readonly");
    $("#letterName").val($("#letterOwnerName").val()).attr("readonly","readonly");
    $("#date").html($("#letterOwnerDate").val().attr("readonly","readonly"));
    $(".sentLetterBtn").val("我也要写封家书给爸妈");
    mainSwiper.slideNext();
  })//取值
  $(".shareBtn").on("click",function(){
    $(".modalContainer").show();
  })

  $(".sentLetterBtn").on("click",function(){
    var val = $(this).val();
    if (val == "发送信件")
    {
      alert("sente");
    }
    else
    {

    }
  })

  $(".shareGuide").on("click",function(){
    $(".modalContainer").hide();
  })
})


// function typing(contain,speed,num){
//   var self = $("."+contain+"");
//   var self_w = self.width();
//   var flag = 0;
//   var typetimer = setInterval(function(){
//     self_w = self.width();
//     self.width(self_w+speed);
//     if( ++flag == num)
//     {
//       clearInterval(typetimer);
//     }
//   },200)

// }