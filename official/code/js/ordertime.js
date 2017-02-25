$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
    $(".time").on("click",function(){
        $(".hourChose").toggleClass('show');
    })

    $(".hourChose li").on("click",function(){
        var timeH = $(this).html();
        $(".time").val(timeH);
        $(".hourChose").toggleClass('show');
    });
    var serviceId = $.getUrlVar('serviceId');

    $.ajax({
	    type: "GET",
	    url: "/service/detail",
	    data: {
	    	serviceId: serviceId
	    },
	    dataType: "json",
	    success: function (data) {
	    	if (data.code == 0){
	    		var result = data.result;
	    		$('.qf_p2').html(''+result.service_hours+'小时拍摄');
	    		$('.qf_p3').html(''+result.pic_num+'张原片');
	    		$('.qf_p4').html(''+result.ps_num+'张精修');
	    		$('.qf_p5').html('提供云储存');
	    		$('.qf_p6').html('原价 '+ ' ￥'+ result.price);
	    		$('.qf_p7').html('优惠 '+ ' ￥'+ '0');
	    		$('.qf_p8').html('实付 '+ ' ￥'+ result.price);
	    		$('.qf_tr span').html('￥'+result.price);
	    		if (!data.meta){
	    			$('.qf_duihuan').click(function(){
	    				$('.youhuima').css({"border":"1px solid red"});
	    				$('.qf_ts').show();
	    				$('.qf_ts').html("优惠码不可用！");
	    			});
	    			//$('.main .content .order_info tr:nth-child(6)').hide();
	    		} else {
	    			$('.qf_duihuan').click(function(){
		    			var coupon = data.meta.coupon;
		    			var youhuima = $('.youhuima').val();
		    			$.each(coupon,function (key,val){
		    				if (key != youhuima){
		    					$('.youhuima').css({"border":"1px solid red"});
				    			$('.qf_ts').show();
				    			$('.qf_ts').html("优惠码输入不正确！");
		    				} else {
		    					$('.youhuima').css({"border":"1px solid #ccc"});
				    			$('.qf_ts').hide();
				    			$('.qf_ts').html(" ");
				    			alert('兑换成功！');
				    			$('.youhuima').css({"border":0});
				    			$('.youhuima').attr('disabled','disabled');
				    			$('.qf_duihuan').css({"background": "#ccc"});
				    			$('.qf_duihuan').attr('disabled','disabled');
		    					var c = Math.round(result.price * val);
		    					var b = result.price - c;
		    					$('.qf_p8').html('实付 '+ ' ￥'+ c);
		    					$('.qf_p7').html('优惠 '+ ' ￥'+ b);
		    					$('.qf_tr span').html('￥'+c);
		    					$('.qf_p7').attr('data-coupon',key);
		    					$('.qf_p8').attr('data-price',c);
		    				}
		    			});
		    		});
	    		}
	    	} else {
	    		alert(data.success)
	    	}
	    }
	});

	$('.confirm').click(function(){
		var x1 = $('#dateChose').val();
		var x2 = $('.time').val();
		var x3 = $('.ruo ').val();
		var x4 = $('.ding textarea').val();
		if (x1 == '' || x2 == '' || x3 == '' || x4 == ''){
			alert('请填写完整！');
			return;
		};

		var date_num1 = $('#dateChose').val();
		var c = date_num1.substr(0,4);
		var b = date_num1.substr(5,2);
		var a = date_num1.substr(8,2);
		var date_num = c+b+a;
		var time_num1 = $('.time').val();
		var time_num = time_num1.substr(0,2)*100;

		var service_id = $.getUrlVar('serviceId');
		var place = $('.ruo').val();
		var description = $('.ding textarea').val();
		var qf_p7 = $('.qf_p7').attr('data-coupon');
		var qf_p8 = $('.qf_p8').attr('data-price');
		$.ajax({
		    type: "POST",
		    url: "/order/add",
		    data: {
		    	price: qf_p8,
		    	coupon: qf_p7,
		    	service_id: service_id,
		    	date_num: date_num,
		    	time_num: time_num,
		    	place: place,
				description: description
		    },
		    dataType: "json",
		    success: function (data) {
		    	if (data.code == 0){
		    		orderId1 = data.result.order_id;
		    		orderId = orderId1.toString();
		    		wap_pay();
		    	} else {
		    		alert(data.success)
		    	}
		    }
		});
	});

})

	function wap_pay() {
	    //var amount = document.getElementById('amount').value * 100;
	    
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", "/order/pay", true);
	    xhr.setRequestHeader("Content-type", "application/json");
	    xhr.send(JSON.stringify({
	        channel: 'alipay_pc_direct',
	        orderId: orderId
	        //amount: amount
	    }));

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4 && xhr.status == 200) {
	            // console.log(xhr.responseText);
	            var test = JSON.parse(xhr.responseText);
	            pingppPc.createPayment(test.result, function(result, err) {
	                console.log(result);
	                console.log(err.msg);
	                console.log(err.extra);
	            });
	        }
	    }
	}
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