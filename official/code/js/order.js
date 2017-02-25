function nav_click(){
	$('.orderNav_li_moren').css({
		"width": "190px",
		"background": "#2e2e2e",
		"padding-left": "10px"
	});
	$('.orderNav_li_moren').attr('data-a',1);
	$('.orderNav_li').hover(function(){
		var a = $(this).attr('data-a');
		if ( a != 1){
			$(this).css({
				"width": "190px",
				"background": "#383838",
				"padding-left": "10px"
			});
			$(this).click(function(){
				$(this).attr('data-a', 1);
				$(this).css({
					"width": "190px",
					"background": "#2e2e2e",
					"padding-left": "10px"
				});
				$(this).siblings('.orderNav_li').removeAttr('data-a');
				$(this).siblings('.orderNav_li').css({
					"width": "200px",
					"background": "#333",
					"padding-left": "0px"
				});
				$(this).siblings('.orderNav_li_xia').find('.orderNav_li_2').hide(100);
				$(this).siblings('.orderNav_li_xia').find('img').attr('src','./image/jian.png');
			});
		}
	},function(){
		var a = $(this).attr('data-a');
		if (a != 1){
			$(this).css({
				"width": "200px",
				"background": "#333",
				"padding-left": "0px"
			});
		};
	});

	$('.orderNav_li_xia').click(function(){
		$('.orderNav_li_2').show(100);
		$('.orderNav_li_xia').find('img').attr('src','./image/xiala.png');
		$('.orderNav_li_2_01_1').attr('data-b',1);
		$('.orderNav_li_2_01').hover(function(){
			var b = $(this).attr('data-b');
			if (b != 1){
				$(this).css({
					"padding-left": "65px",
					"width": "145px",
					"background": "#303030"
				});
				
			};
			$(this).click(function(){
				$(this).attr('data-b',1);
				$(this).css({
					"padding-left": "65px",
					"width": "145px",
					"background": "#292929"
				});
				$(this).siblings('.orderNav_li_2_01').removeAttr('data-b');
				$(this).siblings('.orderNav_li_2_01').css({
					"width": "150px",
					"background": "#2e2e2e",
					"padding-left": "60px"
				});
				$(this).siblings('.orderNav_li_2_01_1').css({
					"width": "150px",
					"background": "#2e2e2e",
					"padding-left": "60px"
				});
			});

			$('.orderNav_li_2_01_1').click(function(){
				$('.shutiao').css({
					"top": 0
				});
			});
			$('.orderNav_li_2_01_2').click(function(){
				$('.shutiao').css({
					"top": 40
				})
			});
			$('.orderNav_li_2_01_3').click(function(){
				$('.shutiao').css({
					"top": 80
				})
			});
		},function(){
			var b = $(this).attr('data-b');
			if (b != 1){
				$(this).css({
					"width": "150px",
					"background": "#2e2e2e",
					"padding-left": "60px"
				});
			};
		});
	});
};

function ship(){
	$("body").css({
		"overflow-y": 'hidden'
	});
	var h = $(window).height();
	var w = $(window).width();
	$('.orderNav_left').height(h-162);
	$('.orderNav_left').css({
		'min-height': 483
	});

	$('.orderNav_right').height(h-162);
	$('.orderNav_right').width(w-200);
	$('.orderNav_right').css({
		"min-width": 1000,
		"overflow": "auto"
		
	});

	$('.ordernav_min').css({
		'min-height': h-164-108
	})
};

// 页面一
function pag(){
	
}

function ziliao(){
	$('.myorder_3').hide();
	$('.myorder_4').hide();
	$('.myorder_5').hide();
	$('.myorder_6').show();
	$('.orderNav_left2 .orderNav_li_js_1').click(function(){
		$('.myorder_3').hide();
		$('.myorder_4').hide();
		$('.myorder_5').hide();
		$('.myorder_6').show();
	});
	$('.orderNav_left2 .orderNav_li_js_2').click(function(){
		$('.myorder_3').hide();
		$('.myorder_4').show();
		$('.myorder_5').hide();
		$('.myorder_6').hide();
	});
	$('.orderNav_left2 .orderNav_li_js_3').click(function(){
		$('.myorder_3').hide();
		$('.myorder_4').hide();
		$('.myorder_5').show();
		$('.myorder_6').hide();
	});
}
function urlcode(){
	var urlcode = $.getUrlVar('urlcode');
	if (urlcode == 3){
		$('.orderNav_li_js_3').click(function(){
			$.ajax({
		        type: "GET",
		        url: "/profile/detail",
		        data: {
		        },
		        dataType: "json",
		        success: function (data) {
		        	var code = data.code;
		        	if (code === 0){
		        		var email = data.result.email;
		        		$('.myorder_5_js_inp_1').html(email);
		        		$('.myorder_5_js_inp_4').click(function(){
		        			var myorder_5_js_inp_2 = $('.myorder_5_js_inp_2').val();
		        			var myorder_5_js_inp_3 = $('.myorder_5_js_inp_3').val();
		        			$('.myorder_5_js_inp_3').focus(function(){
		        				var myorder_5_js_inp_2 = $('.myorder_5_js_inp_2').val();
		        				if (myorder_5_js_inp_2.length < 8){
		        					alert('密码必须8位以上');
		        					return;
		        				};
		        			});
		        			if (myorder_5_js_inp_2.length < 8){
		        				alert('密码必须8位以上');
		        				return;
		        			};
		        			if (myorder_5_js_inp_2 != myorder_5_js_inp_3){
		        				alert("两次密码输入不一致")
		        				return;
		        			};
		        			var myorder_5_js_inp_2 = $.md5($('.myorder_5_js_inp_2').val());
		        			$.ajax({
							    type: "POST",
							    url: "/user/reset_pwd",
							    data: {
							        password: myorder_5_js_inp_2
							    },
							    dataType: "json",
							    success: function (data) {
							    	var code = data.code;
							    	if (code === 0){
							    		alert(data.message)
							    		window.location.href= data.result;
							    	} else{
							    		alert(data.message);
							    	}
							    }
							});
		        			
		        		});
		        		
		        	} else{
		        		alert(data.message);
		        	}
		        }
		    });
		})
		$.ajax({
		    type: "GET",
		    url: "/profile/detail",
		    data: {},
		    dataType: "json",
		    success: function (data) {
		    	if (data.code == 0){
		    		var result = data.result;
		    		$('.myorder3_nav_js_inp_7').val(result.email);
		    		$('.myorder3_nav_js_inp_1').val(result.company);
		    		$('.myorder3_nav_js_inp_2').val(result.contacts);
		    		$('.myorder3_nav_js_inp_3').val(result.phone);
		    		$('.myorder3_nav_js_inp_4').val(result.address);
		   			var companyType = result.companyType;
					if (companyType == 1){
						companyType = '微型企业';
					} else if (companyType == 2){
						companyType = '小型企业';
					} else if (companyType == 3){
						companyType = '中型企业';
					} else if (companyType == 4){
						companyType = '大型企业';
					};
					$('.myorder3_nav_js_inp_5').val(companyType);
		    		$('.myorder3_nav_js_inp_6').val(result.city);
		    	} else {
		    		alert(data.success)
		    	}
		    }
		});
		$('.myorder3_nav_js_inp_8').click(function(){
			var companyType = $('.myorder3_nav_js_inp_5').val();
			if (companyType == '微信企业'){
				companyType = 1;
			} else if (companyType == '小型企业'){
				companyType = 2;
			} else if (companyType == '中型企业'){
				companyType = 3;
			} else if (companyType == '大型企业'){
				companyType = 4;
			};
			var email = $('.myorder3_nav_js_inp_7').val();
			var company = $('.myorder3_nav_js_inp_1').val();
			var contacts = $('.myorder3_nav_js_inp_2').val();
			var phone = $('.myorder3_nav_js_inp_3').val();
			var city = $('.myorder3_nav_js_inp_6').val();
			var address = $('.myorder3_nav_js_inp_4').val();
			var avatar = '';
			$.ajax({
			    type: "POST",
			    url: "profile/modify",
			    data: {
			    	companyType: companyType,
			    	email: email,
			    	company: company,
			    	contacts: contacts,
			    	phone: phone,
			    	city: city,
			    	address: address,
			    	avatar: avatar
			    },
			    dataType: "json",
			    success: function (data) {
			    	if (data.code == 0){
			    		$.ajax({
						    type: "GET",
						    url: "/profile/detail",
						    data: {},
						    dataType: "json",
						    success: function (data) {
						    	if (data.code == 0){
						    		var result = data.result;
						    		$('.myorder3_nav_js_inp_7').val(result.email);
						    		$('.myorder3_nav_js_inp_1').val(result.company);
						    		$('.myorder3_nav_js_inp_2').val(result.contacts);
						    		$('.myorder3_nav_js_inp_3').val(result.phone);
						    		$('.myorder3_nav_js_inp_4').val(result.address);
						    		var companyType = result.companyType;
						    		if (companyType == 1){
						    			companyType = '微信企业';
						    		} else if (companyType == 2){
						    			companyType = '小型企业';
						    		} else if (companyType == 3){
						    			companyType = '中型企业';
						    		} else if (companyType == 4){
						    			companyType = '大型企业';
						    		};
						    		$('.myorder3_nav_js_inp_5').val(companyType);
						    		$('.myorder3_nav_js_inp_6').val(result.city);
						    	} else {
						    		alert(data.success)
						    	}
						    }
						});
			    		$('.myorder_3').hide();
			    		$('.myorder_6').show();
			    	} else {
			    		alert(data.success)
			    	}
			    }
			});
		});
		$('.myorder3_nav_js_inp_9').click(function(){
			$('.myorder_3').show();
			$('.myorder_6').hide();
		})
	};
	if (urlcode == 1){
		$.ajax({
		    type: "GET",
		    url: "order/list",
		    data: {},
		    dataType: "json",
		    success: function (data) {
		    	if (data.code == 0){
		    		var result = data.result;
		    		var html_ye = [];
		    		if (result == ''){
		    			html_ye.push("\
								<div class='myorder_1_01'>\
									<div class='nav'>\
										<div class='nav_1'>\
											\
										</div>\
										<div class='nav_2'>\
											暂无订单\
										</div>\
										<div class='nav_3'>\
											当前类目下您还没有订单，去首页看看\
										</div>\
										<div class='nav_4'>\
											返回首页\
										</div>\
									</div>\
								</div>\
		    				");
		    		$('.myorder_1').append(html_ye.join(''));
		    		$('.myorder_1_01 .nav_4').click(function(){
		    			window.location.href= 'order/index';
		    		});
		    		} else {
		    		$.each(result,function (key,val){
		    			html_ye.push("\
		    				<div class='myorder_1_02'>\
						<div class='top'>\
							<div class='nian'>\
									<p>\
										"+val.year+"\
									</p>\
									<span>\
									</span>\
								</div>\
							</div>\
						<div class='nav'>\
							<div class='you_nav_top'>\
								<img src='http://static.1sight.cn/official/code/image/timer.png' class='you_navtop_img'>\
								<span>\
									总共拍摄\
									<span class='you_navtop_zi'>\
										"+val.year_num+"	\
									</span>\
									套\
								</span>\
								<span>\
									总消费\
									<span class='you_navtop_zi'>\
										￥"+val.price/100+"\
									</span>\
								</span>\
							</div>\
							<div class='you_nav_shu'>\
								\
							</div>");
		    			var month = val.month
		    			$.each(month,function (k,v){
		    			
		    			html_ye.push("\
							<div class='you_nav_nav'>\
								<div class='you_nn_l'>\
									<div>拍摄<span>"+v.month_num+"</span>套</div>\
									<div>消费<span>￥"+v.price/100+"</span></div>\
								</div>\
								<div class='you_nn_yuan_z'>\
									"+v.month+"月\
								</div>");
		    				var list = v.list;
			    			$.each(list,function (kk,vv){
			    				var status = vv.status;
			    				if (status == 7000){
			    					status = '已支付';
			    				} else if (status == 4000){
			    					status = '待支付'
			    				} else if (status == 19000){
			    					status = '已关闭'
			    				};
			    					html_ye.push("\
			    						\
								<div class='you_nnn1'>\
									<div class='you_nnn'>\
											<div class='you_nnn_01'>\
												<div class='you_nnn1_img' style='background: url(http://static.1sight.cn/official/code/image/test1.jpg) no-repeat center; background-size: cover;'>\
													\
												</div>\
												<div class='you_nnn1_zi'>\
													<div class='you_nnn1_zi_01'>\
														<span class='you_nnn1_zi_01d'>PLUS美食拍摄服务</span>\
														<span class='you_nnn1_zi_01q'>￥"+vv.price/100+"</span>\
														<div class='clear'></div>\
													</div>\
													<div class='you_nnn1_zi_02'>\
														<span>\
															拍摄日期：\
														</span>\
														<span>\
															"+vv.date_num+"\
														</span>\
														<br/>\
														<span>\
															订单状态：\
														</span>\
														<span>\
															"+status+"\
														</span>\
													</div>\
												</div>\
											</div></div>\
									</div>")
							});
						html_ye.push("\
									<div class='clear'>\
											\
									</div>\
									<div class='you_nav_shu'>\
										\
									</div>\
								</div>\
							</div>\
						</div>");
						
					});
		    		});
		    		$('.myorder_1').append(html_ye.join(''));

		    	}
		    	} else {
		    		alert(data.success)
		    	}
		    }
		});




		$('.orderNav_li1').click(function(){
			$('.myorder_2').hide();
			$('.myorder_1').show();
		});
		$('.orderNav_li3').click(function(){
			$('.myorder_1').hide();
			$('.myorder_2').show();
			$.ajax({
			    type: "GET",
			    url: "order/status",
			    data: {status:7000},
			    dataType: "json",
			    success: function (data) {
			    	if (data.code == 0){
			    		var result = data.result;
			    		var pij = [];
			    		$.each(result,function (key,val){
			    			pij.push("\
					<div class='myorder_2_beiing'>\
						\
					</div>\
					<div class='myorder2_nav_t'>\
						<span>拍摄类型</span>\
						<o>|</o>\
						<span>拍摄时间</span>\
						<o>|</o>\
						<span>套系价格</span>\
						<o>|</o>\
						<span>摄影师</span>\
						<o>|</o>\
						<span>附加服务</span>\
						<o>|</o>\
						<span>数量</span>\
						<o>|</o>\
						<span>实付金额</span>\
						<o>|</o>\
						<span>状态</span>\
						<o>|</o>\
						<span>操作</span>\
					</div>\
					<div class='myorder2_nav_n'>\
						<div class='myorder2_nav_n1'>\
							<span>\
								订单标号：\
							</span>\
							<span>\
								9901982032938902\
							</span>\
							<span class='myorder2_nav_n1_3'>\
								订单提交时间：\
							</span>\
							<span>\
								2018-09-09 12:12\
							</span>\
						</div>\
						<div class='myorder2_nav_n2'>\
							<span class='myorder2_nav_n2_span'>\
								<div class='myorder2_n2_img' style='background: url(http://static.1sight.cn/official/code/image/test1.jpg) no-repeat center; background-size: cover;'>\
								</div>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<div class='myorder2_n2_div'>\
									<span>\
										2016.03.01\
									</span>\
									<br/>\
									<span>\
										上午9:00\
									</span>\
								</div>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<span class='myorder2_nav_n2_mani'>\
									￥998\
								</span>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<div class='wei'>\
									<span class='pi'>\
										\
									</span>\
									<span class='pei'>\
										摄影师\
									</span>\
								</div>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<span class='wu'>\
									-\
								</span>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<span class='wu'>1</span>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<span class='wu'>￥"+val.price/100+"</span>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<div class='myorder2_n2_div myorder2_n2_div2'>\
									<span>\
										\
									</span>\
									<br/>\
									<span>\
										已完成\
									</span>\
								</div>\
							</span>\
							<o></o>\
							<span class='myorder2_nav_n2_span'>\
								<div class='myorder2_nav_n2_span_xoa'>\
									\
								</div>\
							</span>\
						</div>\
					</div>\
			    				");
			    		});
					$('.myorder_2').append(pij.join(''));
			    	} else {
			    		alert(data.success)
			    	}
			    }
			});
		});
		$('.orderNav_li4').click(function(){
			$('.myorder_1').hide();
			$('.myorder_2').show();
		});
	}
	if (urlcode == 2){
		$("body").css({
			"overflow-y": 'auto'
		});
		

		////////////

		$.ajax({
	        type: "GET",
	        url: "/ablum/list",
	        data: {
	            
	        },
	        dataType: "json",
	        success: function (data) {
	        	var code = data.code;
	        	if (code === 0){
	 				var _html = [];
	 				var result = data.result;
	 				$.each(result,function (key,val){
	 					_html.push("<div class='yun_tu_min'>\
					<div class='yun_tu_min_tou'>\
						<div class='yun_tu_yuan'>\
							<span>"+key+"</span>\
						</div>\
						<div class='yun_tu_heng'>")
	 					$.each(val,function (k,v){
	 						var url = v.pic_list[0].url;
	 						_html.push("<div class='yun_tu_zhu'>\
								<div class='yun_tu_beijing' style='background: url("+url+") no-repeat center; background-size: cover;'>\
									\
								</div>\
								<div class='yun_tu_zi'>\
									<div class='yun_tu_zi_1'>\
										<span class='yun_tu_zi_1_left'>"+v.name+"</span>\
										<span class='yun_tu_zi_1_right'>"+v.pic_num+"张</span>\
										<div class='clear'></div>\
									</div>\
									<div class='yun_tu_zi_2'>\
										"+v.date_num+"\
									</div>\
								</div>\
							</div>")
						});
						_html.push("<div class='clear'></div>\
						</div>\
					</div>\
				</div>")
	 				});
	 			$('.yun_tu_shu').after(_html.join(''));
	 			var ca = 0;
	 			$.each($('.yun_tu_min'),function(){
	 				ca++;
	   				$(this).attr("data-i",ca)
	 			});
	   			var c = 0;
	   			$.each($('.yun_tu_zhu'),function(){
	   				c++;
	   				$(this).attr("data-index",c)
	   			})
				$('.yun_tu_zhu').click(function(){
					$('.yun_tu').hide();
					$('.yun_xia').show();
					var _htmla = [];
					var oks = $(this).parents('.yun_tu_min').attr("data-i");
					
					var index = parseInt($(this).attr("data-index"));
					
					$.each(result,function (kk,vv){
							var qwe = vv[index-1].pic_list;
							$.each(qwe,function (key,val){
								_htmla.push("<div class='yun_xia_nav_t'>\
							<div class='yun_xia_nav_tu' style='background: url("+val.url+") no-repeat center; background-size: cover;'></div>\
						</div>");
							});
					});
					$('.yun_xia_nav').prepend(_htmla.join(''));
				
					tu();
					//判断图片大小  居中处理
					function tu(){
						if ($('.tu_c').height() > $('.tu_c').width())
						{
							$('.tu_c').css({'height': '540px'})
						} else {
							$('.tu_c').css({'width': '730px'})
						};
						var h = $(window).height();
						var w = $(window).width();
						var _left = (w - 1000) / 2;
						var _top = h / 2 -34;
						var _img_h = (h / 2) - ( $('.tu_c').height() / 2 );
						var _img_w = (w / 2) - ( $('.tu_c').width() / 2 );
						$('.tu_l').css({'position':'fixed',
										'top': _top,
										'left': _left,
										'z-index':'2'});
						$('.tu_r').css({'position':'fixed',
										'top': _top,
										'right': _left,
										'z-index':'2'});
						$('.tu_c').css({'position':'fixed',
										'top': _img_h,
										'right': _img_w,
										'z-index':'2'});
					}
					//鼠标单双击
					var TimeFn = null;
					//鼠标点击文件
					$('.yun_xia_nav_tu').click(function(){
						clearTimeout(TimeFn);
						var _this = $(this)
						TimeFn = setTimeout(function(){
							_this.before('\
							<div class="yun_xia_nav_xuan" style="background: url(http://static.1sight.cn/official/code/image/process_ok.png) no-repeat center; background-size: cover;"></div>\
							');
							_this.parents('.yun_xia_nav_t').siblings('.yun_xia_nav_t').find('.yun_xia_nav_xuan').remove();
						},300);
						$(this).attr('data-click',1);
						$(this).parents('.yun_xia_nav_t').siblings('.yun_xia_nav_t').find('.yun_xia_nav_tu').attr('data-click',0);

					});
					$('.yun_xia_top_2_but').wrap('<a href=""></a>');
					$('.yun_xia_top_2_but').click(function(){
						$.each($('.yun_xia_nav_tu'),function(){
							var clic = $(this).attr('data-click');
							if (clic == 1){
								var imageUrl = $(this).css("background-image");
								var imgSrc2_1 = imageUrl.slice(5,imageUrl.length-2);
								$('.yun_xia_top_2_but').parents('a').attr('href', imgSrc2_1);
							}
						})
					});
					preview();
					//图片放大逻辑
					function preview(){
						//鼠标双击文件 //点击下图放大
						$('.yun_xia_nav_tu').dblclick(function(){
					    	clearTimeout(TimeFn);
							//获取背景图片的url
							var imageUrl = $(this).css("background-image");
							var imgSrc = imageUrl.slice(5,imageUrl.length-2);
							//添加图片src
							$('.tu_c').attr("src", imgSrc);
							//显示大图
							$('.preview').show();
							//判断图片大小 居中处理
							tu();
							//插入data-index
							var dataIndex = 0;
							$.each($('.yun_xia_nav_tu'), function(){
								dataIndex ++;
						  		$(this).attr('data-index', dataIndex);
							});
							//图片切换
							var index = $(this).attr('data-index') - 1;
							//下一张
							$('.tu_r').click(function(){
								index ++;
								if (index === dataIndex) {
									index = 0
								};
								$('.tu_c').remove();
								$('.tu_l').after('<img src="" class="tu_c">');
								var preIndex = index;
						        var src1 = $('.yun_xia_nav_tu').eq(preIndex).css("background-image");
						        var src = src1.slice(5,src1.length-2);
						        $('.tu_c').attr('src',src);
						        tu();
							});
							//上一张
							$('.tu_l').click(function(){
								index --;
								if (index === -1) {
									index = dataIndex-1;
								};
								$('.tu_c').remove();
								$('.tu_l').after('<img src="" class="tu_c">');
								var preIndex = index;
						        var src1 = $('.yun_xia_nav_tu').eq(preIndex).css("background-image");
						        var src = src1.slice(5,src1.length-2);
						        $('.tu_c').attr('src',src);
						        tu();
							});
							//禁止滚动
							$('body').css({'overflow': 'hidden'})
						});
						
						//键盘事件
						$(document).keydown(function(event){
							if(event.keyCode == 37){
								$('.tu_l').trigger('click');
							}else if (event.keyCode == 39){
								$('.tu_r').trigger('click');
							}
						}); 

						//返回
						$('.preview span').click(function(){
							$('.preview').hide();
							$("body").css({
								"overflow-y": 'auto'
							});
						});
					};
				});
		    	} else{
	        		alert(data.message);
	        	}
	        }
	    });

	}

}



$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	$(window).resize(function(){
		ship();
	});
	nav_click();
	ship();
	pag();
	ziliao();
	urlcode();
	$('.orderTop_02_h_1').click(function(){
		window.location.href = '/order?urlcode=1';
	});
	$('.orderTop_02_h_3').click(function(){
		window.location.href = '/profile?urlcode=3';
	});
	$('.orderTop_02_h_2').click(function(){
		window.location.href = '/ablum?urlcode=2';
	});
});

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