
function start_set(){
	$(".info_right .serie_classes").click(function(){
		$(".info_right .serie_classes").each(function(){
			$(this).find(".serie_img").hide();
			$(this).css("border","1px solid #dbdbdb");
		});
		$(this).find(".serie_img").show();
		$(this).css("border","1px solid #cc9b66");

		$(".business .all_pho").hide();
		$(".business .pho_class p").css("color","#1a1a1a");
		if ($(this).attr("data-id")==1) {
			$(".business .jing_pho").show();
			$('.business .pho_class .jing').css("color","#c3935e");	
		} else if ($(this).attr("data-id")==2) {
			$(".business .you_pho").show();
			$('.business .pho_class .you').css("color","#c3935e");
		}else if ($(this).attr("data-id")==3) {
			$(".business .plus_pho").show();
			$('.business .pho_class .plus').css("color","#c3935e");
		}else if ($(this).attr("data-id")==4) {
			$(".business .she_pho").show();
			$('.business .pho_class .she').css("color","#c3935e");
		}else if ($(this).attr("data-id")==5) {
			$(".business .hou_pho").show();
			$('.business .pho_class .hou').css("color","#c3935e");
		}

		
		
	
	});
	$(".info_right .serie_classes").hover(function(){
		if($(this).find(".serie_img").is(":hidden")){
			$(this).css("border","1px solid #808080");
		}
		
	},function(){
		if($(this).find(".serie_img").is(":hidden")){
			$(this).css("border","1px solid #dbdbdb");
		}
		
	});
	$(".serie_info .info_right .qian_price .flag_img").hover(function(){
		$(".serie_info .info_right .qian_price .pp").css("display","inline-block");
	},function(){
		$(".serie_info .info_right .qian_price .pp").css("display","none");
	});
	$(".serie_info .info_right .qian_price .flag_img").click(
		//跳转
	);
	//初始化套系菜单栏，默认选择第一个套系
	$(".business .jing_pho").show();	
	$('.business .pho_class .jing').css("color","#c3935e");
	
	//鼠标滑过某一个套系分类 字体加粗
	$(".business .pho_class p").hover(function(){
		$(this).css("font-weight","bold");
	},function(){
		$(this).css("font-weight","normal");
	});
}

function gundong(){
	var type = $.getUrlVar('type');
	if (type == 10){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1468) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1468);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(6400);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(7820);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(8270);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修3张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 2){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 3){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修6张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 20){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1468) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1468);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(4820);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(6320);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(6770);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修5张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 2){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>1小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>原片10张</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 3){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>1小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>轻修5张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 30){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1468) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1468);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(4680);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(6180);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(6630);
		});

		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修15张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 2){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 3){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>2小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>轻修15张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 40){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1470) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1470);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(5780);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(7290);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(7760);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>1.5小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>原片100张</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修5张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 50){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1470) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1472);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(5020);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(6600);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(7090);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>5小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>原片100张/人</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>精修6张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 60){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1470) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1472);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(4660);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(5960);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(6440);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>1小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 2){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>3小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>原片300张</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>轻修20张</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	} else if (type == 70){
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1470) {
				$('.serie_class').css({
					'position': "fixed",
					'top': 0,
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			} else {
				$('.serie_class').css({
					'position': "static",
					"background": "#fff",
					"width": "100%",
					'z-index': 1000
				});
			}
		});
		$('.click_tiao1').click(function(){
			$(window).scrollTop(1472);
		});
		$('.click_tiao2').click(function(){
			$(window).scrollTop(4730);
		});
		$('.click_tiao3').click(function(){
			$(window).scrollTop(5960);
		});
		$('.click_tiao4').click(function(){
			$(window).scrollTop(6440);
		});
		$('.serie_classes').click(function(){
			var _thisId = $(this).attr('data-id');
			if (_thisId == 1){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>1小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 2){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>0小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 3){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>3小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 4){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>8小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			} else if (_thisId == 5){
				$('.serie_virtue').empty();
				$('.serie_virtue').html('<ul>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie02.png">\
							<span>8小时拍摄</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie04.png">\
							<span>不提供原片</span>\
						</li>\
						<li class="li">\
							<img src="http://static.1sight.cn/official/code/image/serie01.png">\
							<span>不提供精修</span>\
						</li>\
						<li class="last">\
							<img src="http://static.1sight.cn/official/code/image/serie03.png">\
							<span>提供云存储</span>\
						</li>\
					</ul>');
			}
		})
	}
	
}

function serie_class(){
	$('.business .pho_class .jing').click(function(){
		$(".business .all_pho").hide();
		$(".business .jing_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .you').click(function(){
		$(".business .all_pho").hide();
		$(".business .you_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .plus').click(function(){
		$(".business .all_pho").hide();
		$(".business .plus_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .she').click(function(){
		$(".business .all_pho").hide();
		$(".business .she_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .hou').click(function(){
		$(".business .all_pho").hide();
		$(".business .hou_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .six').click(function(){
		$(".business .all_pho").hide();
		$(".business .six").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
	$('.business .pho_class .seven').click(function(){
		$(".business .all_pho").hide();
		$(".business .seven_pho").show();
		$(".business .pho_class p").css("color","#1a1a1a");
		$(this).css("color","#c3935e");
	});
}

$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	start_set();
	gundong();
	serie_class();
})

$.extend({
  getUrlVars: function () {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function (name) {
    return $.getUrlVars()[name];
  }
});