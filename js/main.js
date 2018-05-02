$(function(){
	// section min-height
	var min=$(window).height()-$('#tablemenu').height()-60;
	$('section').css('min-height',min);
	$('section>div').css('min-height',min);
	// 切换关闭
	function tab(){
		// tablemenu切换
		$('#tablemenu a').click(function(){
			let index=$(this).attr('index');
			$(this).addClass('tabactive').siblings().removeClass('tabactive');
			if (index) {
				$('#tab div[index='+index+']').addClass('show').siblings('div').removeClass('show');
			}else{
				$('#index').addClass('show').siblings('div').removeClass('show');
			}
			event.stopPropagation();
		});
		$('.quit').click(function(event){
			$('#alertWray').removeClass('show');
			let index=$(this).parent().attr('index');
			$('#tab div[index='+index+']').removeClass('show');
			let prevIndex=$(this).parent().prev().attr('index');
			if (prevIndex) {
				$(this).parent().prev().addClass('show');
			}else{
				$('#index').addClass('show');
			}
			$(this).parent().remove();	
			event.stopPropagation();
		})
	}
	// 菜单滑块
	var top = $('#translate').position().top;
	var height = $('.active a').eq(0).height()
	console.log(top);
	$('#translate').height(height);
	function translate(){
		$.each($('.active a'),function(i,n){
			$(this).mouseenter(function(){
				$('#translate').stop();
				$('#translate').animate({'top': ((i*height)+top)}, "normal");
			}).mouseleave(function(){
				$('#translate').stop();
				$('#translate').animate({'top': top}, "normal");
			})
		})
	};
	translate();
	$('#all_menu a').click(function(){
		var index=$(this).attr('index');
		if (index) {
			$('#nav div[index='+index+']').addClass('active').siblings().removeClass('active');
			translate();
		}
	})
	$('.return').click(function(){
		$(this).parent().removeClass('active');
		$('#all_menu').addClass('active');
	});
	$('.submenu').click(function(){
		let index = $(this).attr("index");
		let text=$(this).children('span').text();
		let html='<a href="javascript:;" class="clearfix tabactive" index="'+index+'">'
				+'<i class="'+$(this).children('i').attr('class')+'" style="font-size: 0.18rem;"></i>'
				+'<span>'+text+'</span>'
				+'<i class="iconfont icon-guanbi quit" style="font-size: 0.25rem;margin:0;" ></i>'
				+'</a>';
		$('#tablemenu').children().removeClass('tabactive');
		$('#tablemenu').append(html);
		
		$('#tab div[index='+index+']').addClass('show').siblings('div').removeClass('show');
		tab();
		
	})
	// 请假添加
	$('#add').click(function(){
		$('#alertWray').addClass('show');
	})
	$('#alertbtn').click(function(){
		$('#alertWray').removeClass('show');
	})
	// 快捷入口，历史入口
	$('#quick_list a').click(function(){
		let index=$(this).attr('index');
		let text=$(this).children('p').text();
		let html='<a href="javascript:;" class="clearfix tabactive" index="'+index+'">'
				+'<i class="'+$(this).children('i').attr('class')+'" style="font-size: 0.18rem;"></i>'
				+'<span>'+text+'</span>'
				+'<i class="iconfont icon-guanbi quit" style="font-size: 0.25rem;margin:0;" ></i>'
				+'</a>';
		$('#tablemenu').children().removeClass('tabactive');
		$('#tablemenu').append(html);
		$('#tab div[index='+index+']').addClass('show').siblings('div').removeClass('show');
		tab();
	});
	$('#lately_list a').click(function(){
		let index=$(this).attr('index');
		let text=$(this).children('p').text();
		let html='<a href="javascript:;" class="clearfix tabactive" index="'+index+'">'
				+'<i class="'+$(this).children('i').attr('class')+'" style="font-size: 0.18rem;"></i>'
				+'<span>'+text+'</span>'
				+'<i class="iconfont icon-guanbi quit" style="font-size: 0.25rem;margin:0;" ></i>'
				+'</a>';
		$('#tablemenu').children().removeClass('tabactive');
		$('#tablemenu').append(html);
		$('#tab div[index='+index+']').addClass('show').siblings('div').removeClass('show');
		tab();
		
	});
	// 快捷菜单的添加
	var wow1;
	$('#addInto').click(function(){
		$('#addDiv').show();
		$('#iconList>a').show();
		wow1 = new WOW({
	    boxClass: 'addDiv',
	    animateClass: 'bounceInRight',
	    offset: 0,
	    mobile: true,
	    live: true
		});
		wow1.init();
		var wow2 = new WOW({
	    boxClass: 'wowIteam',
	    animateClass: 'bounceInDown',
	    offset: 0,
	    mobile: true,
	    live: true
		});
		wow2.init();
		
	})
	function addQuict(){
		$('#iconList>a').append('<span class="iconfont">选择</span>').mouseenter(function(){
			$(this).children('span').stop().slideDown();
		}).mouseleave(function(){
			if (!$(this).attr('checked')) {
				$(this).children('span').stop().slideUp();
			}
		}).click(function(event){
			if (!$(this).attr('checked')) {
				$(this).attr('checked','true');
				$(this).children('span').text('').addClass('icon-202');
			}else{
				$(this).removeAttr('checked');
				$(this).children('span').removeClass('icon-202').text('选择');
			}
			event.stopPropagation();
		});
		$('#addbtn').click(function(){
			$('#iconList>a[checked="checked"]').each(function(){
				let iteam='<a href="javascript:;"  index='+$(this).attr('index')+'>'
						 +'<i class="'+$(this).children('i').attr('class')+'"></i>'
						 +'<p>'+$(this).children('p').text()+'</p>'
						 +'</a>';
				$('#quick_list').prepend(iteam);
			});
			wow1 = new WOW({
		    boxClass: 'addDiv',
		    animateClass: 'fadeOutLeft',
		    offset: 0,
		    mobile: true,
		    live: true
			});
			wow1.init();
			function gundan(){
				$('#addDiv').hide();
				$('#iconList>a').hide();
				$('#addDiv').removeClass('fadeOutLeft');
			}
			setTimeout(gundan, 1000);
		})
	}
	addQuict();


});