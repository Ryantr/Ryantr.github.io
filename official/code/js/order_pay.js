
maxtime = 15*60;
function CountDown(){
	if(maxtime>=0){
		minutes = Math.floor( maxtime / 60 );
		seconds = Math.floor( maxtime % 60 );
		minutes = minutes >= 10 ? minutes : '0' + minutes;
		seconds = seconds >= 10 ? seconds : '0' + seconds;
		msg = minutes + "分" + seconds + "秒";
		document.all["timer"].innerHTML = msg;
		--maxtime;
	} else{
		clearInterval(timer);
	};
}

$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	timer = setInterval("CountDown()",1000);
});