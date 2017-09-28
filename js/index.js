$(function() {
	// 轮播图自动轮播
	var i = 0;
	var run;
	timer();
	$('.circle').children().mouseover(function(){
		clearInterval(run);
		i = $(this).index();
		lun();
	});
	function lun(){
		if(i>=$('.bg').length){
			i = 0
		}
		$('.circle').children().eq(i).addClass('circlecolor').siblings().removeClass('circlecolor');
		$('.bg').eq(i).addClass('active').siblings().removeClass('active');
	}
	function timer(){
		run = setInterval(function(){
			i++;
			lun();
		},3000);
	}
	// 轮播图3d效果
	$(".bg").mouseenter(function() {
		clearInterval(run);
		var thisPX = $(this).offset().left;
		var thisPY = $(this).offset().top;
		var boxWidth = $(this).outerWidth();
		var boxHeight = $(this).outerHeight();
		$(this).addClass("threeD");
		$(".threeD").mousemove(function(event) {
			var mouseX = event.pageX - thisPX;
			var mouseY = event.pageY - thisPY;
			var X;
			var Y;
			if (mouseX > boxWidth / 2) {
				X = mouseX - boxWidth/2;
			} else {
				X = mouseX - boxWidth/2;
			}
			if (mouseY > boxHeight / 2) {
				Y = boxHeight/2 - mouseY;
			} else {
				Y = boxHeight/2 - mouseY;
			}
			$(".threeD").css({
				"-webkit-transform": "rotateY(" + X / 100 + "deg) " + "rotateX(" + Y / 100 + "deg)"
			});

			});
	});
	$(".bg").mouseleave(function() {
		timer();
		$(this).removeClass("threeD");
		$(this).css({
			"-webkit-transform": "rotateY(0deg) rotateX(0deg)"
		});
	});
	// 吸顶搜索
	$(window).scroll(function(){
		if($(window).scrollTop()>=600){
			$('#suckUp').slideDown();
		}else{
			$('#suckUp').slideUp();
		}
		
	});
	// 左侧fixed
	// 返回顶部
	leftBgRed();
	goTop();
	var timer;
	var timerr;
	function goTop(){
		var leftShowTop = $('.tab').eq(0).position().top;
	    window.onscroll = function () {
	        var backtop = $(window).scrollTop();
	        if (backtop >= leftShowTop-200) {
	            $("#left").css({opacity:1});
	        }else {
	            $("#left").css({opacity:0});
	        }
	        leftBgRed();
	    }
	}
	// $("#left li").not('#leftTop').click(function () {
 //    	$(this).addClass('leftBg').siblings().removeClass('leftBg');
 //    	var index = $(this).index();
 //        timer = setInterval(function () {
 //            // var backtop = $(window).scrollTop();
 //            var backtop = $('.tab').eq(index).position().top-80;
 //            var wTop = $(window).scrollTop();
 //            var cha = wTop-backtop;
 //            var speedtop = cha/2;
 //            document.body.scrollTop = backtop - speedtop;
 //            if (document.body.scrollTop == backtop) {
 //                clearInterval(timer);	
 //            }
 //        },200);
	// });
	$("#left li").not('#leftTop').click(function () {
    	// $(this).addClass('leftBg').siblings().removeClass('leftBg');
    	var index = $(this).index();
    	var backtop = $('.tab').eq(index).position().top-80;
    	console.log(backtop);
		$('html,body').animate({scrollTop:backtop},800);
	});
	$('#leftTop,#rightBotTop').click(function () {
        $('html,body').animate({scrollTop:0},800);
    });
	function leftBgRed(){
		var backtop = $(window).scrollTop();
		if(backtop>=1821&&backtop<2556){
        	$('#left li').eq(0).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=2556&&backtop<3174){
        	$('#left li').eq(1).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=3174&&backtop<3727){
        	$('#left li').eq(2).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=3727&&backtop<4280){
        	$('#left li').eq(3).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=4280&&backtop<4833){
        	$('#left li').eq(4).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=4833&&backtop<5386){
        	$('#left li').eq(5).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=5386&&backtop<5939){
        	$('#left li').eq(6).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=5939&&backtop<6492){
        	$('#left li').eq(7).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=6492&&backtop<7045){
        	$('#left li').eq(8).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=7045&&backtop<7953){
        	$('#left li').eq(9).addClass('leftBg').siblings().removeClass('leftBg'); 
        }else if(backtop>=7953){
        	$('#left li').eq(10).addClass('leftBg').siblings().removeClass('leftBg'); 
        }
	}
	
	
	
	

		
		

	
});