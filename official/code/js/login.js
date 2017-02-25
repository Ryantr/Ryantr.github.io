
function img(){
	var h = $(window).height()/2 - 265;
	var w = $(window).width()/2 - 190;
	$('.loginNav_main_1').css({
		"width": 380,
		"height": 530,
		"border-radius": 8,
		"background": '#fff',
		"position": "absolute",
		"top": h,
		"left": w,
	});
	var h_1 = $(window).height()/2 - 180;
	$('.loginNav_main_2').css({
		"width": 380,
		"height": 400,
		"border-radius": 8,
		"background": '#fff',
		"position": "absolute",
		"top": h_1,
		"left": w,
	});

	var h_1 = $(window).height()/2 - 170;
	$('.loginNav_main_3').css({
		"width": 380,
		"height": 380,
		"border-radius": 8,
		"background": '#fff',
		"position": "absolute",
		"top": h_1,
		"left": w,
	});
}
function submit(){
	$('.logo-inp-02').focus(function(){
		var logo_inp_01 = $('.logo-inp-01').val();
		var Email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(Email.test(logo_inp_01)){
		    $('.logo-main-p1').hide();
		    $('.logo-inp-01').css({'border': '1px solid #ccc'});
		    emails = $('.logo-inp-01').val();
		}else{
		    $('.logo-main-p1').show();
		    $('.logo-inp-01').css({'border': '1px solid #ff5640'});
		    return false;
		};
	});
	$('.logo-but-01').click(function(){
		var logo_inp_01 = $('.logo-inp-01').val();
		var logo_inp_02 = $('.logo-inp-02').val();
		var Email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(Email.test(logo_inp_01)){
		    $('.logo-main-p1').hide();
		    $('.logo-inp-01').css({'border': '1px solid #ccc'});
		    emails = $('.logo-inp-01').val();
		}else{
		    $('.logo-main-p1').show();
		    $('.logo-inp-01').css({'border': '1px solid #ff5640'});
		    return false;
		};

		if(logo_inp_02.length >= 8){
			$('.logo-main-p2').hide();
		    $('.logo-main-logo').css({'margin-top':'60px'});
			$('.logo-main-inp').css({'margin-top': '60px'});
			$('.logo-inp-01').css({'margin-bottom': '20px'});
			$('.logo-inp-02').css({'border': '1px solid #ccc'});
			passwords = $.md5($('.logo-inp-02').val());
		}else{
			$('.logo-main-logo').css({'margin-top':'50px'});
			$('.logo-main-inp').css({'margin-top': '46px'});
			$('.logo-inp-01').css({'margin-bottom': '44px'});
		    $('.logo-main-p2').show();
		    $('.logo-inp-02').css({'border': '1px solid #ff5640'});
		    return false;
		};

		$.ajax({
	        type: "POST",
	        url: "/user/login",
	        data: {
	            username: emails,
	            password: passwords
	        },
	        dataType: "json",
	        success: function (data) {
	        	var code = data.code;
	        	if (code === 0){
	        		window.location.href= data.result;
	        	} else{
	        		alert(data.message);
	        	}
	        }
	    });
		// window.location.href = '/user/login?username='+emails+'&password='+passwords+'';
	});
};

function wangjimima(){
	$('.logo-main-wang').click(function(){
		$('.loginNav_main_2').show();
		$('.loginNav_main_1').hide();
		$('.loginNav_main_3').hide();
		$('.wangji-inp').val('');
		$('.logo-inp_yanzheng').val('');
	});
}
function lijizhuce(){
	$('.logo-but-02').click(function(){
		location.href = '/register';
	});
}

function yanzhenm(){
	var method = $.getUrlVar('method');
	var username = $.getUrlVar('username');
	
	if (method == 'repassword'){
		$('.loginNav_main_2').hide();
		$('.loginNav_main_1').hide();
		$('.loginNav_main_3').show();
		$('.loginNav_main_3 .logo-main-logo p:nth-child(3)').html('邮箱：'+username);
	};

	$('.logo-but_qingding').click(function(){
		var c = $('.loginNav_main_3 .logo-inp-02').val();
		var b = $('.loginNav_main_3 .logo-inp-01').val();
		if (c != b){
			alert('密码不一致！')
			return;
		} else if ($('.loginNav_main_3 .logo-inp-02').val().length < 8){
			alert('密码必须8位以上！')
			return;
		};
		var password = $.md5($('.loginNav_main_3 .logo-inp-02').val());
		$.ajax({
	        type: "POST",
	        url: "/user/reset_pwd_4mail",
	        data: {
	        	email: username,
	            password: password
	        },
	        dataType: "json",
	        success: function (data) {
	        	var code = data.code;
	        	if (code === 0){
	        		window.location.href = data.result;
	        	} else {
	        		alert(data.message);
	        	}
	        }
	    });
	});
}

$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	$(window).resize(function(){
		img();
	});
	var method = $.getUrlVar('method');
	if (method == "repassword"){
		yanzhenm();
	} else {
		submit();
	};
	img();
	wangjimima();
	lijizhuce();



	//cookie
	function setCookie(name, value, iDay){
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
	}

	function getCookie(name){
		var arr = document.cookie.split('; ');
		var i = 0;
		for(i = 0;i < arr.length;i++) {
			var arr2 = arr[i].split('=');
			
			if(arr2[0] == name)
			{	
				var getC = decodeURIComponent(arr2[1]);
				return getC;
			}
		}
		return '';
	}

	function removeCookie(name) {
		setCookie(name, '1', -1);
	}
});



//验证码
var code ;
function createCode(){
	code = new Array();
	var codeLength = 4;
	var checkCode = document.getElementById("checkCode");
	checkCode.value = "";
	var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	for(var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random()*32);
		code += selectChar[charIndex];
	}
	checkCode.value = code;
}
function validate () {
	var inputCode = document.getElementById("yzm").value.toUpperCase();
	if(inputCode != code ){
		alert("验证码错误！");
		return false;
	} else{
		var username = $('.wangji-inp').val();
		$.ajax({
	        type: "POST",
	        url: "user/password",
	        data: {
	            username: username
	        },
	        dataType: "json",
	        success: function (data) {
	        	var code = data.code;
	        	if (code == 0){
	        		window.location.href= data.result;
	        	} else {
	        		alert(data.message);
	        	}
	        }
	    });
	}
}