
function urlpanduan(){
	var urlcode = $.getUrlVar('urlcode');
	var urlemail = $.getUrlVar('email');
	//注册
	if (urlcode == 1){
		$('.verify_nav_2').hide();
		$('.verify_nav_3').hide();
		$('.verify_nav_1 .verifyNav_n span').html(urlemail);
		var login_email = $.getUrlVar('login_email');
		$('.verify_nav_1 .verifyNav_but').click(function(){
			if (login_email == "null"){
				alert('打开遇到问题，请从其他途径打开邮箱并验证！')
			} else {
				window.open(login_email);
			}
		})
	};
	//
	if (urlcode == 2){
		var login_email = $.getUrlVar('login_email');
		$('.verify_nav_1 .verifyNav_but').click(function(){
			window.open(login_email);
		});
		var ticket = $.getUrlVar('ticket');
		$.ajax({
		    type: "POST",
		    url: "/verify_email",
		    data: {
		        ticket: ticket
		    },
		    dataType: "json",
		    success: function (data) {
		    	var code = data.code;
		    	if (code === 0){
		    		$('.verify_nav_1').hide();
					$('.verify_nav_3').hide();
					window.location.href = '/index';
					$('.verifyNav_n').click(function(){
						window.location.href = '/index';
					});
		    	} else {
		    		$('.verify_nav_1').hide();
					$('.verify_nav_3').hide();
		    		$('.verify_nav_2 .verifyNav_h').html('验证失败');
		    		$('.verify_nav_2 .verifyNav_n').hide();
		    		$('.verify_nav_2 .verifyNav_b').html('请重新验证');

		    	}
		    }
		});
	};
	//找回密码
	if (urlcode == 3){
		$('.verify_nav_1').hide();
		$('.verify_nav_3').hide();
	};
	//找回密码
	if (urlcode == 4){
		$('.verify_nav_1').hide();
		$('.verify_nav_2').hide();
		$('.verify_nav_3 .verifyNav_b').html('请打开邮箱点击链接重置密码');
		var login_email = $.getUrlVar('login_email');
		$('.verify_nav_3 .verifyNav_but').click(function(){
			window.open(login_email);
		})
		$('.verify_nav_3 .verifyNav_n span').html(urlemail);
	};


	
}
$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	urlpanduan();
})

