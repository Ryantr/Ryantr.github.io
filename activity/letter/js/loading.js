var oimg;
var mainSwiper;
var imgnum,persentage;
$(function(){
  oimg = $(".lazyLoad");
  imgload(oimg);
})
 
  function imgload(oimg){
      _srcList = [];
      imgnum = 0;　　　　 //获取所有图片路径，存为数组
      oimg.each(function(){
          _srcList.push($(this).attr('data-src'));
      });
      imgLoadComplate(_srcList[imgnum]);
  }
  function imgLoadComplate(imgSrc){
      var _img = new Image();
      _img.src = imgSrc;
      _img.onload = function()
      {　　　　　//判断是否加载到最后一个图片
          if (imgnum < _srcList.length-1) {
              imgnum++;
              var scale = 100/(_srcList.length-1);
              persentage =parseInt( imgnum * scale);
              imgLoadComplate(_srcList[imgnum]);
              $("#persentage").html(persentage+"%");
          }else{
            imgonload(oimg);
          }
      }
  }
  function imgonload(oimg){

      $(".tiananmen").css("margin-top",120);
      $("#persentage").fadeOut(600);
      oimg.each(function(){
          var othis=$(this)
          othis.attr("src",othis.attr("data-src"));
      });
      var backimg = $(".backImg");
      backimg.each(function(){
          var othis=$(this);
          var thisurl = othis.attr("data-src");
          othis.parent(".swiper-slide").css("background-image","url("+thisurl+")");
      });
      mainSwiper = new Swiper('.swiper-container', {
      //可选选项，自动滑动
        direction : 'vertical',
        resistanceRatio : 0,
        onSlideChangeEnd: function(swiper){
           if(swiper.activeIndex == "8" || swiper.activeIndex == "9" || swiper.activeIndex == "10")
           {
              swiper.lockSwipeToNext();
              $("#arrowDown").hide();
           }
           else
           {
              swiper.unlockSwipeToNext();
              $("#arrowDown").show();
           }

           
          titleComeout();
        }
      })
      setTimeout(function(){
        $(".loadingContainer").hide();
        titleComeout();
      },1000)
  }


  function titleComeout(){
      var activeIndex = mainSwiper.activeIndex;
      var self = $(".title"+activeIndex+"");
      var flag = 2;
      var contain = $(".title"+activeIndex+"-1");
      contain.fadeIn(1000);
      var typetimer = setInterval(function(){
        var contain = $(".title"+activeIndex+"-"+flag+"");
        contain.fadeIn(1000);
        if( flag++ == self.length)
        {
          clearInterval(typetimer);
        }
      },600);
  }
  