$(function(){
	// 商品数量-+
	$('.minus').click(function(){
		var i = $(this).siblings('span').text();
		i--;
		if(i<=0){
			i=0;
		}
		$(this).siblings('span').text(i);
		unNum($(this),i);
		price();
	});
	$('.prep').click(function(){
		var i = $(this).siblings('span').text();
		i++;
		$(this).siblings('span').text(i);
		unNum($(this),i);
		price();
	});
	function unNum(num,i){
		// 单价
		var univalent = num.parent().parent().prev().children('p').children('span').text();
		// 小结
		var univalentNum = num.parent().parent().next().children('b').children('span').text();
		univalentNum = (univalent * i).toFixed(2);
		num.parent().parent().next().children('b').children('span').text(univalentNum);
	}
	// 总价
	price();
	function price(){
		var sLength = $('.shopPrice').length;
		var allPrice = 0
		for(var j=0;j<sLength;j++){
			allPrice += Number($('.shopPrice').eq(j).text());
		}
		$('.allPrice').text(allPrice);
	}
	// 删除
	$('.delete').click(function(){
		var shan = $(this).parent().parent().parent().parent().parent();
		shan.remove();
	})
	// 全选
	var select = true;
	$('label input').click(function(){
		if(select){
			$('input').prop('checked',true);
			select = false;
		}else{
			$('input').prop('checked',false);
			select = true
		}
	});
	// 返回顶部
	$('#rightBotTop').click(function () {
        $('html,body').animate({scrollTop:0},800);
    });
	// 吸底
	window.onscroll = function (){
		var openTop = $('.something-4').eq(0).position().top;
		var Top =$(window).scrollTop()+$(window).height();
		if(Top<=openTop){
			$('#suckDown').css({
				'opacity':'1'
			});
		}else{
			$('#suckDown').css({
				'opacity':'0'
			});
		}
	}

















});