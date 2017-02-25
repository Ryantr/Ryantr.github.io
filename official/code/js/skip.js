function skip(){
	$('.loginTop_r span:nth-child(1)').click(function(){
		window.location.href = 'http://static.1sight.cn/official/code/help_center.html';
	});
	$('.loginTop_r span:nth-child(2)').click(function(){
		window.location.href = 'http://static.1sight.cn/official/code/register.html';
	});
};

$(function(){
	$('body').after("<div class='chatIcon' onclick='easemobim.bind({tenantId: 823,autoConnect: true,})'></div>");
	skip();
});