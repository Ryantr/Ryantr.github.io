
function verify(){
	$('input').val('');
	$('.mima1').attr('maxlength',16);
	var youxiangval;
	var mima1val;
	var mima2val;
	var gongsival;
	var lianxirenval;
	var dianhuaval;
	$('.youxiang').blur(function(){
		var youxiang = $('.youxiang').val();
		function checkEmail(str){
		    var Email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
		    if(Email.test(str)){
		        youxiangval = $('.youxiang').val();
		        $('.youxiang').css({'border': '1px solid #ccc'});
		        $('.youxiang').siblings('span').hide();
		    } else if (youxiang == ''){
		    	return false;
		    }else {
		    	$('.youxiang').css({'border': '1px solid #ff5640'});
		    	$('.youxiang').siblings('span').show();
		        return false;
		    };
		};
		checkEmail(youxiang);
	});
	$('.mima1').focus(function(){
		if (youxiangval == undefined){
			return false;
		} else {
			$('.mima1').blur(function(){
				var mima1 = $('.mima1').val();
				if (mima1.length < 8){
					$('.mima1').css({'border': '1px solid #ff5640'});
				    $('.mima1').siblings('span').show();
				    return false;
				} else if (mima1 == ''){
		    		return false;
		    	} else {
					$('.mima1').css({'border': '1px solid #ccc'});
				    $('.mima1').siblings('span').hide();
					mima1val = $('.mima1').val();
				}
			});
		}
	})
	$('.mima2').focus(function(){
		if (mima1val == undefined){
			return false;
		} else{
			$('.mima2').blur(function(){
				var mima1 = $('.mima1').val();
				var mima2 = $('.mima2').val();
				if (mima2 == mima1){
				    $('.mima2').css({'border': '1px solid #ccc'});
				    $('.mima2').siblings('span').hide();
					mima2val = $('.mima2').val();
				}else if (mima2 == ''){
		    		return false;
		    	} else {
					$('.mima2').css({'border': '1px solid #ff5640'});
				    $('.mima2').siblings('span').show();
				    return false;
				}
			});
		}
	});
	$('.gongsi').focus(function(){
		if (mima2val == undefined){
			return false;
		} else {
			$('.gongsi').blur(function(){
				var gongsi = $('.gongsi').val();
				if (gongsi != ''){
				    $('.gongsi').css({'border': '1px solid #ccc'});
				    $('.gongsi').siblings('span').hide();
					gongsival = $('.gongsi').val();
				} else if (gongsi == ''){
		    		return false;
		    	} else {
					$('.gongsi').css({'border': '1px solid #ff5640'});
				    $('.gongsi').siblings('span').show();
				    return false;
				}
			});
		}
	})
	$('.lianxiren').focus(function(){
		if (gongsival == undefined){
			return false;
		} else {
			$('.lianxiren').blur(function(){
				var lianxiren = $('.lianxiren').val();
				if (lianxiren != ''){
				    $('.lianxiren').css({'border': '1px solid #ccc'});
				    $('.lianxiren').siblings('span').hide();
					lianxirenval = $('.lianxiren').val();
				} else if (lianxiren == ''){
		    		return false;
		    	} else {
					$('.lianxiren').css({'border': '1px solid #ff5640'});
				    $('.lianxiren').siblings('span').show();
				    return false;
				}
			});
		}
	})
	$('.dianhua').focus(function(){
		if (lianxirenval == undefined){
			return false;
		} else {
			$('.dianhua').blur(function(){
				var dianhua = $('.dianhua').val();
				var reg = /^1\d{10}$/;
				if (reg.test(dianhua)){
				    $('.dianhua').css({'border': '1px solid #ccc'});
				    $('.dianhua').siblings('span').hide();
					dianhuaval = $('.dianhua').val();
				} else if (dianhua == ''){
		    		return false;
		    	} else {
					$('.dianhua').css({'border': '1px solid #ff5640'});
				    $('.dianhua').siblings('span').show();
				    return false;
				}
			});
		}
	});

	$('.submits').click(function(){
		var Email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
		if(Email.test(youxiangval)){
		    
		} else {
			$('.youxiang').focus();
			return;
		};
		var mima1_1 = $('.mima1').val();
		var mima2_1 = $('.mima2').val();
		var gongsi_1 = $('.gongsi').val();
		var lianxiren_1 = $('.lianxiren').val();
		var dianhua_1 = $('.dianhua').val();
		if (mima1_1 == ''){
			$('.mima1').focus();
			return;
		} else if (mima2_1 == ''){
			$('.mima2').focus();
			return;
		} else if (gongsi_1 == ''){
			$('.gongsi').focus();
			return;
		} else if (lianxiren_1 == ''){
			$('.lianxiren').focus();
			return;
		} else if (dianhua_1 == ''){
			$('.dianhua').focus();
			return;
		}
		if (youxiangval == undefined || mima1val == undefined ||
			mima2val == undefined || gongsival == undefined ||
			lianxirenval == undefined ||
			dianhuaval == undefined) return;
		var reg = /^1\d{10}$/;
		if (mima1val.length < 8){
			$('.mima1').focus();
			return;
		} else if (mima1val != mima2val){
			$('.mima2').focus();
			return;
		} else if (gongsival == ''){
			$('.gongsi').focus();
			return;
		} else if (lianxirenval == ''){
			$('.lianxiren').focus();
			return;
		}; 
		if (reg.test(dianhuaval)){
			
		} else {
			$('.dianhua').focus();
			return;
		}
		mima1val = $.md5(mima1val);
		$.ajax({
	        type: "POST",
	        url: "/user/register",
	        data: {
	            username: youxiangval,
	            password: mima1val,
	            company: gongsival,
	            contacts: lianxirenval,
	            phone: dianhuaval
	        },
	        dataType: "json",
	        success: function (data) {
	        	var code = data.code;
	        	if (code == 0){
	        		window.location.href = data.result;
	        	} else {
	        		alert(data.message);
	        	}
	        }
	    });
	});
		
};

function qwe(height,element){
 	$(window.document).scroll(function () {
        var scrolltop = $(document).scrollTop();
        if(scrolltop > height){
        	element.css({
        		"position": "fixed",
				"top": 0
        	});
        };
    });
}


$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	verify();
	qwe();
});