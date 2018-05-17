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
  });

  //使用Vue搞一搞
  new Vue({
  	el:'.mid-area',
  	data:{
  		title1:'使用WEBGL领先移动端3D互动应用技术，基于网页增加全新维度及无与伦比的3D体验，',
  		title2:'为各行业商业客户快速构建移动营销领地，不受时间、空间、角度的限制'
  	},
  	methods:{}
  });
  new Vue({
  	el:'#footer',
  	data:{
  		Add1:'广州天河区珠江新城华夏路26号雅居乐中心23层',
  		Add2:'23F,Agile Center,26 Huaxia Road,Zhujiang New Town,Guangzhou',
  		tel:'+86-20-6625 5220',
  		mail:'global@icm3D.com'
  	},
  	methods:{}
  });

  //运动
  $('.mid-box').find('img').mouseover(function(){
  	$(this).animate({'width':'55%','height':'55%'},200);
  });   
   $('.mid-box').find('img').mouseout(function(){
  	$(this).animate({'width':'50%','height':'50%'},200);
  });
   $('.img2').mouseover(function(){
   		$('.qc').show();
   		$('.qc').animate({'opacity':'1'},200);
   });
      $('.img2').mouseleave(function(){
   		$('.qc').animate({'opacity':'0'},200,function(){
   			$('.qc').hide();
   		});
   });
})