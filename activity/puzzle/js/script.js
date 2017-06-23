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
        var img = new Image();
        img.src =  self.img;
        if(img.complete) { 
            self.start();
            return;
        }
        img.onload = function () {
            self.start();
        };
    },
    start:function(){
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
            console.log(this.cellHeight)
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
                    "backgroundSize": "6.6rem,6.6rem",
                    "backgroundPosition": (-j) * this.cellWidth + "px " + (-i) * this.cellHeight + "px"
                });
                this.cellArr.push($(_cell));
                this.e_playArea.append(_cell);
            }
        }
        console.log(this.imgArr);
        console.log(this.cellArr)
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
                // "touchstart": function(e){
                //     self.cb_cellDown.fire(e, $(this), self);
                //     console.log($(this))
                //     return false;
                // }

                "click":function(e){
                    if(!self.clickBusy){
                        $(this).toggleClass("selected");
                        if($(".selected").length == 1){
                            self.thisTop = $(this).css("top");
                            self.thisLeft = $(this).css("left");
                            self.thisIndex = Math.floor(parseInt(self.thisTop)/parseInt(self.cellHeight))*self.cellCol;
                            self.thisIndex += Math.floor(parseInt(self.thisLeft)/parseInt(self.cellWidth));
                            alert(Math.floor(parseInt(self.thisLeft)/parseInt(self.cellWidth)));
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
    cellDown:function(e,_cell,self){
  // var //self = this,
  // _x = e.pageX - _cell.offset().left,
  // _y = e.pageY - _cell.offset().top;

        var _x = e.originalEvent.targetTouches[0].pageX - _cell.offset().left,
            _y = e.originalEvent.targetTouches[0].pageY - _cell.offset().top;

        self.thisLeft = _cell.css("left");
        self.thisTop = _cell.css("top");
        self.thisIndex = Math.floor(parseInt(self.thisTop)/self.cellHeight)*self.cellCol;
        console.log(self.thisIndex);
        self.thisIndex += Math.floor(parseInt(self.thisLeft)/self.cellWidth);
        _cell.css("zIndex",99);
        $(document).on({
            "touchmove": function(e){
                _cell.css({
                    "left": e.originalEvent.targetTouches[0].pageX - self.offX - _x,
                    "top": e.originalEvent.targetTouches[0].pageY - self.offY - _y
                })
            },
            "touchend": function(e){
                $(document).off("touchstart");
                $(document).off("touchmove");
                $(document).off("touchend");
                self.cb_cellDown.empty();
                if( e.originalEvent.changedTouches[0].pageX - self.offX < 0 || e.originalEvent.changedTouches[0].pageX - self.offX > self.areaWidth || e.originalEvent.changedTouches[0].pageY - self.offY < 0 || e.originalEvent.changedTouches[0].pageY - self.offY > self.areaHeight ){
                    //边界以外区域
                    self.returnCell();
                    return;
                }

                var _tx, _ty, _ti, _tj;
                _tx = e.originalEvent.changedTouches[0].pageX - self.offX;
                _ty = e.originalEvent.changedTouches[0].pageY - self.offY;

                _ti = Math.floor( _ty / self.cellHeight );
                _tj = Math.floor( _tx / self.cellWidth );
                //console.log(_ti+"!"+_tj);
                self.nextIndex = _ti*self.cellCol + _tj;
                if(self.nextIndex == self.thisIndex){
                    self.returnCell();
                }else{
                    //console.log("!!!");
                    self.changeCell();
                }
                
            }
        })
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
            
            //if(!self.cb_cellDown.has(self.cellDown)) self.cb_cellDown.add(self.cellDown);
        })
    },
    changeCell:function(){
        var self = this,
        _tc = this.cellArr[this.thisIndex],
        _tl = this.thisLeft,
        _tt = this.thisTop,
        _nc = this.cellArr[this.nextIndex],
        _nl = (this.nextIndex % this.cellCol) * this.cellWidth,
        _nt = Math.floor(this.nextIndex / this.cellCol) * this.cellHeight;

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
                _tc.removeClass("hover");
                _tc.css("zIndex","");
        })

        _nc.animate({
            "left": _tl,
            "top": _tt
            },self.time,self.easing,function(){
                _nc.removeClass("hover");
                _nc.css("zIndex","");
            self.check();
   
            if(!self.cb_cellDown.has(self.cellDown)) self.cb_cellDown.add(self.cellDown);
        })
    },
    returnCell:function(){
        var self = this;
        this.cellArr[this.thisIndex].animate({
            "left": self.thisLeft,
            "top": self.thisTop
            },self.time,self.easing,function(){
                $(this).removeClass("hover");
                $(this).css("zIndex","");
                if(!self.cb_cellDown.has(self.cellDown)) self.cb_cellDown.add(self.cellDown);
        });
    },
    check:function(){
        // this.e_playCount.html( ++ this.playCount);
        if(this.ranArr.join() == this.imgArr.join()){
            this.success();
        }
    },
    success:function(){
        alert("恭喜，假装进入下一关");
    }
}

var intDiff = parseInt(40);//倒计时总秒数量
var timer;
function timerfun(intDiff){
    if(typeof timer != "undefined"){
        clearInterval(timer);
    }
    timer = setInterval(function(){
        if(intDiff > 0){
            $('#second_show').html('<s></s>'+intDiff+'秒');
            intDiff--;
        }else{
            alert("失败了")
            clearInterval(timer)
        }
    }, 1000);
} 


$(document).ready(function(e) {
    var pg = new puzzleGame({
        img: "./image/sample/test2.jpg"
    });



    $("#renew").on("click",function(){
       // puzzleGame.isInit = false;
        pg.start();
        $('#second_show').html('<s></s>'+intDiff+'秒');
    })

    //var imgArray = []
    $("#change").on("click",function(){
        var imgname = Math.ceil(Math.random()*5);
        pg = new puzzleGame({
            img: "./image/sample/test"+imgname+".jpg"
        });
        $('#second_show').html('<s></s>'+intDiff+'秒');
    })
});