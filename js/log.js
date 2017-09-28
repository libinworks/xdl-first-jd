$(function(){
	// 登录
	function log(){
		var wHeight = $(window).height();
		var wWidth = $(window).width();
		$('#log').css({height:wHeight,width:wWidth});
	}
	
	window.onresize = function(){
		log();
	}
	$('.righttop-1 span,.righttop-1 div').click(function(){
		$('.log').show();
		$('#log').show();
		log();
	});
	$('#cha').click(function(){
		$('.log').hide();
		$('#log').hide();
	})
})