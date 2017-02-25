$(function(){
    getOrderInfo();//套系信息
    

    $(".right_btn").on("click",function(){
      var seviceid_ = $(".selected").attr("data-sevid");
      if(typeof(seviceid_) == "undefined")
      {
        alert("请选择服务套系");
      } 
      else
      {
        window.location.href="/service/order?serviceId="+seviceid_+"";
      }

    });
    $(".btn").on("click",function(){
      var seviceid_ = $(".selected").attr("data-sevid");
      if(typeof(seviceid_) == "undefined")
      {
        alert("请选择服务套系");
      } 
      else
      {
        window.location.href="/service/order?serviceId="+seviceid_+"";
      }
    });


    $(".serie_classes").on("click",function(){
      $(this).addClass("selected");
      var price_ = $(this).attr("data-pri");
      var name_ = $(this).attr("data-sevName");
      var countPrice = parseInt(price_ *0.92);
      var dom_ = ''+name_+'<span>￥'+price_+'</span>';
      $(".serie_name").html(dom_);
      $(".flag02").html("￥"+countPrice+"");
      $(".right_title1").html(name_)
      $(".right_title2").html("总计 ￥"+price_+"");
      $(".price").html("￥"+price_+"");
    });

    $('.loginTop_l').append("\
      <div class='qfx_dizhi'>\
        <img src='http://static.1sight.cn/official/code/image/dizhi.png'/>\
        <span class='qfx_dizhi1'>beijin</span>\
        <span class='qfx_genggai'>更换</span>\
      </div>");
    var city = $.getUrlVar('city');
    if (city == 2){
      city = '上海'
    } else {
      city = '北京'
    };
    $('.qfx_dizhi1').html(city);
    $('.qf_didian').html(city);
    $(".qfx_genggai").on("click",function(){
        
        $('.qf_nav_top').click(function(){
            $('.qf_tan').hide();
        });
        var type_ = $.getUrlVar('type');
        $('.qf_tan').show();
        $('.qf_dianji div').click(function(){
            var data_name = $(this).attr('data-name');
            if (data_name == 1){
              window.location.href="/service/type?type="+type_+"&city="+data_name+"";
            } else if (data_name == 2){
              window.location.href="/service/type?type="+type_+"&city="+data_name+"";
            } else {
              window.location.href="/service/type?type="+type_+"&city=1";
            }
            
        });
    });
    

    var city = $.getUrlVar('city');
    if (city == 1){
      $('.business1').show();
      $('.business2').hide();
    };
    if (city == 2){
      $('.business1').hide();
      $('.business2').show();
    };
});



function getOrderInfo(){
    var type_ = $.getUrlVar('type');
    var city = $.getUrlVar('city');
    $.ajax({
        url: '/service/list',
        type: 'get',
        dataType: 'json',
        data: {type:type_,city:city},
        success:function(data){
            console.log(data);
            var dataResult = data.result;
            for(i=0;i<dataResult.length;i++)
            {
                var serviceId = dataResult[i].service_id;
                var servicePrice = dataResult[i].price;
                var serviceName = dataResult[i].service_name;
                $(".serie_classes").eq(i).attr("data-sevId",serviceId).attr("data-pri",servicePrice).attr("data-sevName",serviceName);
                $(".serie_classes").eq(i).html(''+serviceName+'&nbsp;<strong>￥'+servicePrice+'/套</strong><img class="serie_img" src="http://static.1sight.cn/official/code/image/sele.png">')
                $(".pho_class").children("p").eq(i).html(''+serviceName+' ￥'+servicePrice+'')
                if( i == 0 )
                {
                  var dom_ = ''+serviceName+'<span>￥'+servicePrice+'</span>';
                  var countPrice = parseInt(servicePrice *0.92);
                  $(".serie_name").html(dom_);
                  $(".flag02").html("￥"+countPrice+"");
                  $(".right_title1").html(serviceName)
                  $(".right_title2").html("总计 ￥"+servicePrice+"");
                  $(".price").html("￥"+servicePrice+"");
                }
            }
            $('.serie_classes:nth(0)').trigger('click');
        }
    });
};

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
