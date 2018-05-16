$(function(){

	let b = $('.right').find('li:eq(0)').width();
	let left = $('.right').find('li:eq(0)').offset().left;
	$('.yellow-border').css({'width':b+20,'left':left+21});

	$('.right').find('li').mouseover(function(){
		let b = $(this).width();
		let left = $(this).offset().left;
		$('.right').find('li:eq(0)').removeClass('checked');
		$('.yellow-border').animate({'width':b+20,'left':left+21},250);
	});
	$('.right').mouseleave(function(){
		//复位
		let b = $('.right').find('li:eq(0)').width();
		let left = $('.right').find('li:eq(0)').offset().left;
		$('.right').find('li:eq(0)').addClass('checked');
		$('.yellow-border').animate({'width':b+20,'left':left+21},250);
	});

//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    effect : 'fade',//渐变
	    autoplay:true,//自动
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    }
  })   

})