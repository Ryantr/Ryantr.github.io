

function mobilephoneFormatCheck(mobilephone){
    var format = /^[1][0-9]{10,10}$/;
    if (!mobilephone.match(format)) {
    return false;
    }
    return true;
    }

/*$(function(){$("#text_phone").blur(function(){
    if(!mobilephoneFormatCheck($("#text_phone").val()))
    {
   // alert("cuo");//$("#text_phone").siblings("p").html('请输入正确的手机号如：13800000000').show();
	$("#submit").css("background-color","#CCC");
    }
    else
    {
   // alert("bing");//$("#text_phone").siblings("p").html('').show();
	$("#submit").css("background-color","#63d1c3");
    }
    }); 
	}); */
	
$(function(){$("#text_phone").bind('propertychange input',function(){
    if(!mobilephoneFormatCheck($("#text_phone").val()))
    {
   // alert("cuo");//$("#text_phone").siblings("p").html('请输入正确的手机号如：13800000000').show();
	$("#submit").css("background-color","#CCC");
     $("#submit").attr("disabled","disabled");
    }
    else
    {
   // alert("bing");//$("#text_phone").siblings("p").html('').show();
	$("#submit").css("background-color","#63d1c3");
    $("#submit").removeAttr("disabled");
    }
    }); 
	});
	

var Terminal = {
            // 辨别移动终端类型
            platform : function(){
                var u = navigator.userAgent, app = navigator.appVersion;
				return {
                    //是否在微信内
					weixin: u.indexOf('MicroMessenger') >-1,
					// android终端
                    android: u.indexOf('Android') > -1 ,
                    // 是否为iPhone
                    iPhone: u.indexOf('iPhone')  > -1 ,
					//是否为ipad
					iPad: u.indexOf('iPad')  > -1 ,
                };
            }(),
        }


/*$(function(){     
        $(".foot_a").on('click',function(){	
		$(".foot_a").attr("href","#");
		if(Terminal.platform.weixin){ 
            	if((Terminal.platform.iPhone) || (Terminal.platform.iPad))
					{	openDig_m();
						$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/2.png'></div>");}
				else
						{  	openDig_m();
							$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/1.png'></div>");}
						
        }else if((Terminal.platform.iPhone)|| (Terminal.platform.iPad)){
            		 // $.get('http://online.1sight.cn/statistic/download/index/ios');//ios下载统计
					 $(".foot_a").attr("href","https://itunes.apple.com/us/app/jia-zi-pai/id963638196?mt=8");			 
       			 }else if(Terminal.platform.android){
           				  //$.get('http://online.1sight.cn/statistic/download/index/android');//android下载统计
						  $.ajax({
 							　　url:"",				　
 　								type: "GET",
 　								success:function(){location.href=""},
 　								error:function(){location.href="http://static.qiezipai.cn/apk/download/qiezipai.apk"}
							 }); //统计数据加 下载链接
							
				 }});
});


$(function (){     
        $("#download").on('click',function(){	
		
		if(Terminal.platform.weixin){ 
            	if((Terminal.platform.iPhone) || (Terminal.platform.iPad))
					{	openDig_m();
						$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/2.png'></div>");}
				else
						{  	openDig_m();
							$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/1.png'></div>");}
						
        }else if((Terminal.platform.iPhone)|| (Terminal.platform.iPad)){
            		 // $.get('http://online.1sight.cn/statistic/download/index/ios');//ios下载统计
					location.href="https://itunes.apple.com/us/app/jia-zi-pai/id963638196?mt=8"	;	 
       			 }else if(Terminal.platform.android){
           				  //$.get('http://online.1sight.cn/statistic/download/index/android');//android下载统计
						  $.ajax({
 							　　url:"",				　
 　								type: "GET",
 　								success:function(){location.href=""},
 　								error:function(){location.href="http://static.qiezipai.cn/apk/download/qiezipai.apk"}
							 }); //统计数据加 下载链接
							
				 }});
}); */
function downloadclick(){     
        	
				
			if(Terminal.platform.weixin){ 
            		if((Terminal.platform.iPhone) || (Terminal.platform.iPad))
					{	openDig_m();
						$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/2.png'></div>");}
					else
						{  	openDig_m();
							$(".swiper-container").append("<div class='guide'><img  src='http://static.qiezipai.cn/activity/image/1.png'></div>");}
						
       		 }else if((Terminal.platform.iPhone)|| (Terminal.platform.iPad)){
            		 // $.get('http://online.1sight.cn/statistic/download/index/ios');//ios下载统计
					 //$(".foot_a").attr("href","https://itunes.apple.com/us/app/jia-zi-pai/id963638196?mt=8");		
					 location.href="https://itunes.apple.com/us/app/jia-zi-pai/id963638196?mt=8";	 	 
       			 	}else if(Terminal.platform.android){
           				  //$.get('http://online.1sight.cn/statistic/download/index/android');//android下载统计
						  $.ajax({
 							　　url:"",				　
 　								type: "GET",
 　								success:function(){location.href=""},
 　								error:function(){location.href="http://static.qiezipai.cn/apk/download/qiezipai.apk"}
							 });
					}//统计数据加 下载链接
							else { location.href="http://www.qiezipai.cn"}
				 
}


		function openDig_m(){
				$(".swiper-container").append("<div id='mask' onclick='closeDig_m()'></div>");
				$("#mask").addClass("mask").fadeIn("fast");}		
		function closeDig_m(){
				$(".guide").fadeOut("fast");
				$("#mask").css({ display: 'none' });
				$(".mask").removeClass("mask"); }
