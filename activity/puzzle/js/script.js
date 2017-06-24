var puzzleGame = function(options){

 this.img = options.img || "";
 
 this.e_playArea = $("#play_area");
 this.e_startBtn = $("#play_btn_start");
 this.e_playScore = $("#play_score");
 this.e_playCount = $("#play_count");
 this.e_levelBtn = $("#play_btn_level");
 this.e_levelMenu = $("#play_menu_level");
 
 this.areaWidth = parseInt(this.e_playArea.css("width"));
 this.areaHeight = parseInt(this.e_playArea.css("height"));
 this.offX = this.e_playArea.offset().left;
 this.offY = this.e_playArea.offset().top;
 
 this.levelArr = [[3,3],[4,4],[6,6]];
 this.level = 0;
 this.scoreArr = [100,200,400];
 this.score = 0;
 this.playCount = 0;
 
 this.cellRow = this.levelArr[this.level][0];
 this.cellCol = this.levelArr[this.level][1];
 
 this.cellWidth = this.areaWidth/this.cellCol;
 this.cellHeight = this.areaHeight/this.cellRow;
 this.imgArr = [];
 this.ranArr = [];
 
 this.cellArr = [];
 this.easing = 'swing';
 this.time = 400;
 this.thisLeft = 0;
 this.thisTop = 0;
 this.nextLeft= 0;
 this.nextTop = 0;

 this.nextIndex;
 this.thisIndex;
 
 this.cb_cellDown = $.Callbacks();
 
 
 this.isInit = false;
 this.isBind = false;
 self.clickBusy = false;
 this.imgloaded();
};
puzzleGame.prototype = {
    imgloaded:function(){
        var self = this;
        $(".loading-small").fadeIn();
        var img = new Image();
        img.src =  self.img;
        if(img.complete){ 
            self.start();
            return;
        }
        img.onload = function () {
            self.start();
        };
    },
    start:function(){
        $(".loading-small").fadeOut();
        this.init();
        this.menu();
        this.play();
        timerfun(intDiff);
    },
    set: function(options){
        this.level = options.level === 0 ? 0 : (options.level || 1);
    },
    menu:function(){
        var self = this;
        this.e_startBtn.click(function(){
            self.e_levelMenu.hide();
            self.play();
        });
        this.e_levelBtn.click(function(){
            if(self.playing) return;
            self.e_levelMenu.toggle();
        });
        this.e_levelMenu.find("a").click(function(){
            self.e_levelMenu.hide();
            self.e_levelBtn.find(".level_text").html($(this).html())

            if(parseInt($(this).attr("level")) !== self.level){
                self.set({
                    "level": $(this).attr("level")
                });
                self.isInit = true;
                self.isBind = false;
            }
        })
    },
    play:function(){
        if(this.isInit){
            this.isInit = false;
            this.cellRow = this.levelArr[this.level][0];
            this.cellCol = this.levelArr[this.level][1];
            this.cellWidth = this.areaWidth/this.cellCol;
            this.cellHeight = this.areaHeight/this.cellRow;

            this.init();
        }
        this.e_playCount.html(this.playCount = 0);
        this.randomImg();
        if(!this.isBind)this.bindCell();
    },
    init:function(){
        var _cell;

        this.cellArr = [];
        this.imgArr = [];
        this.e_playArea.html("");
        console.log(this.cellHeight)
        console.log(this.cellWidth)
        for(var i = 0; i<this.cellRow; i++){
            for(var j = 0; j<this.cellCol; j++){
                this.imgArr.push(i*this.cellCol + j);
                _cell = document.createElement("div");
                _cell.className = "play_cell";
                $(_cell).css({
                    "width": this.cellWidth-2,
                    "height": this.cellHeight-2,
                    "left": j * this.cellWidth,
                    "top": i * this.cellHeight,
                    "background": "url(" + this.img + ")",
                    "backgroundSize": "5.8rem,5.8rem",
                    "backgroundPosition": (-j) * this.cellWidth + "px " + (-i) * this.cellHeight + "px"
                });
                this.cellArr.push($(_cell));
                this.e_playArea.append(_cell);
            }
        }
        //console.log(this.imgArr);
        //console.log(this.cellArr)
    },
    randomImg:function(){
        var ran,arr;
        arr = this.imgArr.slice();
        this.ranArr = [];
        for(var i = 0, ilen = arr.length; i < ilen; i++){
            ran = Math.floor(Math.random() * arr.length);
            this.ranArr.push(arr[ran]);

            this.cellArr[i].css({
                "backgroundPosition": (-arr[ran]%this.cellCol) * this.cellWidth + "px " + (-Math.floor(arr[ran]/this.cellCol)) * this.cellHeight + "px"
            })
            arr.splice(ran,1);
        }
        $("#p").html(this.ranArr.join())

        console.log(this.ranArr)
    },
    bindCell:function(){
        var self = this;
        this.isBind = true;
        this.cb_cellDown.add(self.cellDown);
        for(var i = 0, len = this.cellArr.length; i<len; i++){
            this.cellArr[i].on({
                "click":function(e){
                    if(!self.clickBusy){
                        $(this).toggleClass("selected");
                        if($(".selected").length == 1){
                            self.thisTop = $(this).css("top");
                            self.thisLeft = $(this).css("left");
                            self.thisIndex = Math.floor(parseInt(self.thisTop)/parseInt(self.cellHeight))*self.cellCol;
                            self.thisIndex += Math.floor(parseInt(self.thisLeft)/parseInt(self.cellWidth));
                            // alert(Math.floor(parseInt(self.thisLeft)/parseInt(self.cellWidth)));
                        } else if($(".selected").length == 2){
                            self.clickBusy = true;

                            self.nextTop = $(this).css("top");
                            self.nextLeft = $(this).css("left");
                            self.nextIndex = Math.floor(parseInt(self.nextTop)/parseInt(self.cellHeight))*self.cellCol;
                            self.nextIndex += Math.floor(parseInt(self.nextLeft)/parseInt(self.cellWidth));
                            $(".selected").removeClass("selected");
                            self.myChangeCell();
                        }
                    }
                }
            });
        }
    },
    myChangeCell:function(){
        var self = this,
        _tc = this.cellArr[this.thisIndex],
        _tl = this.thisLeft,
        _tt = this.thisTop,
        _nc = this.cellArr[this.nextIndex],
        _nl = this.nextLeft,
        _nt = this.nextTop;

        _nc.css("zIndex",98);

        this.cellArr[this.nextIndex] = _tc;
        this.cellArr[this.thisIndex] = _nc;

        this.ranArr[this.nextIndex] = this.ranArr[this.nextIndex] + this.ranArr[this.thisIndex];
        this.ranArr[this.thisIndex] = this.ranArr[this.nextIndex] - this.ranArr[this.thisIndex];
        this.ranArr[this.nextIndex] = this.ranArr[this.nextIndex] - this.ranArr[this.thisIndex];

        _tc.animate({
            "left": _nl,
            "top": _nt
            },self.time,self.easing,function(){
                _tc.css("zIndex","");
                self.clickBusy = false;
            
        })

        _nc.animate({
            "left": _tl,
            "top": _tt
            },self.time,self.easing,function(){
                _nc.css("zIndex","");
                self.clickBusy = false;
                self.check();
        })
    },
    check:function(){
        // this.e_playCount.html( ++ this.playCount);
        if(this.ranArr.join() == this.imgArr.join()){
            this.success();
        }
    },
    success:function(){
        alert("恭喜，假装进入下一关");
    },
    failed:function(){
        $("#modal-failed").fadeIn();
    }
}





var pintu,indexImgs,carImgs,winH,winW;
$(function(){
    winH = $(window).height();
    winW = $(window).width();

    indexImgs = ["./image/sprite_index.png","./image/earth.png","./image/sprite_game.png"];
    //var gameImgs = "./image/sprite_game.png";
    carImgs = ["./image/car1.png","./image/car2.png","./image/car3.png","./image/car4.png","./image/car5.png","./image/car6.png"];
    $(".loading-container,.index-container,.main-container").height(winH);

    isLoaded(indexImgs,indexLoaded());


   



    //var imgArray = []
    $("#change").on("click",function(){
        var imgname = Math.ceil(Math.random()*5);
        pintu = new puzzleGame({
            img: "./image/sample/test"+imgname+".jpg"
        });
        $('#second_show').html('<s></s>'+intDiff+'秒');
    })
    //进入游戏
    $(".btn-container").on("touchstart",function(){
        event.preventDefault();
        $(this).children(".icon-btn").addClass("down");
        setTimeout(function(){
            $(".main-container").fadeIn();
            gameLoad();
            $(".index-container").fadeOut();
        },300)
    })
    //弹窗事件
    $(".icon-know").on("touchstart",function(){
        $(this).parents(".modal-container").fadeOut();
    })

    $(".modal-close").on("touchstart",function(){
        $(this).parents(".modal-container").fadeOut();
    })

    $(".icon-again").on("click",function(){
       // puzzleGame.isInit = false;
       pintu.start();
       $('#second_show').html('<s></s>'+intDiff+'秒');
    })
})
//计时器
var intDiff = parseInt(100);//倒计时总秒数量
var timer;
function timerfun(intDiff){
    if(typeof timer != "undefined"){
        clearInterval(timer);
    }
    timer = setInterval(function(){
        if(intDiff > 0){
            $('#second_show').html('<s></s>'+intDiff+'秒');
            intDiff--;
            toTimer(intDiff)
        }else{
            //alert("失败了")
            if(typeof pintu != "undefined") pintu.failed;
            clearInterval(timer)
        }
    }, 1000);
} 
function toTimer(num) {
    var b_ = parseInt(num/100);
    var s_ = parseInt((num%100)/10);
    var g_ = parseInt(((num%100)%10));
    result_ = (num || 0).toString().split('');
    $(".timer-1").html(b_);
    $(".timer-2").html(s_);
    $(".timer-3").html(g_);
}

//图片加载完毕
function isLoaded(imgs,callbak){
    if(Array.isArray(imgs)){
        var leth_ = imgs.length;
        var loaded_ = 0;
        for(i=0;i<leth_;i++){
            var imgobj_ = new Image();
            imgobj_.src = imgs[i];
            imgobj_.onload = function(){
                loaded_++;
            };
            if(loaded_ == leth_){
                callbak;
            }
        }
    }else{
        var imgobj_ = new Image();
        imgobj_.src = imgs;
        imgobj_.onload = function(){
            callbak;
        };
    }
}

//主页加载图片加载完毕
function indexLoaded(){
    $(".earthR").attr("src",$(".earthR").attr("data-src"));
    $(".index-container").fadeIn();
    $(".loading-container").fadeOut();
    //小蚁动画
    var iconId = 0;
    var yiZoom = setInterval(function(){
        $(".run-box .icon-index").eq(iconId+1).addClass("icon-show");
        $(".run-box .icon-index").eq(iconId).removeClass("icon-show");
        iconId ++;
        if(iconId >= 5){iconId = parseInt(-1)}
    },200)
}
//游戏初始化
function gameLoad(){
    //初始化游戏
    pintu = new puzzleGame({
        img: "./image/sample/test2.jpg"
    });
    
    isLoaded(carImgs,carZoom());
}



//汽车帧图加载完毕
function carZoom(){
    var ele = $('.carZoom');
    var idx = 1;

    mfinterval = setInterval(function(){
        if(idx > 6) idx = 1;
        ele.attr('src','image/car'+idx+'.png');
        idx++;
    },200);
};
