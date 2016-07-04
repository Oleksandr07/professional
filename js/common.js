$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		margin: 5,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	//--------------------------------------------------  info_tip toggle
	$('.info_link').click(function(){
		$('.info_tip').hide();
		/* $('.info_tip_overlay').show(); */
		$('.info_tip[rel='+$(this).attr('rel')+']').show();
		return false;
		 alert('clicked outside');
	});
	$('.info_close').click(function(){
		/* $('.info_tip_overlay').hide(); */
		$(this).parent().hide();
	});
	/* $('.info_tip_overlay').click(function(){
		$(this).hide();
		$('.info_tip').hide();
	}); */
	$(".info_link").click(function(event) {
		event.stopPropagation();
	});
	
	$(document).click(function() {
		$('.info_tip').hide();
	});

	//--------------------------------------------------  catalog_menu toggle
	$('.catalog_menu>ul>li.submenu>a').click(function(){
		$this = $(this).parent();
		if (!$this.hasClass('active')) {
			$this.addClass('active');
			$this.find('ul').slideDown(200);
		}
		else{
			$this.removeClass('active');
			$this.find('ul').slideUp(200);
		}
		return false;
	});

	//--------------------------------------------------  photo change
	$('.product_photo_small a').click(function(){
		var attr = $(this).attr('href');
		$('.product_photo_big a').attr('href', attr).find('img').attr('src', attr);
		return false;
	});

	//--------------------------------------------------  days_count
	$('.day_plus').click(function(){
		var num = parseInt($('#days_count').val());
		num++;
		$('#days_count').val(num);
	});
	$('.day_minus').click(function(){
		var num = parseInt($('#days_count').val());
		if (num>0) {
			num--;
			$('#days_count').val(num);
		};
	});

	//--------------------------------------------------  bxSlider
	var sliders = new Array();
    $('.bxslider').each(function(i, slider) {
        sliders[i] = $(slider).bxSlider({
			mode: 'horizontal',
			minSlides: 1,
			maxSlides: 5,
			moveSlides: 1,
			slideWidth: 165,
			slideMargin: 20,
			pager: false,
			infiniteLoop: false,
			hideControlOnEnd: true
		});
    });

	//--------------------------------------------------  tabs
	$('.tabs_top ul li').click(function(){
		if (!$(this).hasClass('active')) {
			$('.tabs_top ul li').removeClass('active');
			$(this).addClass('active');
			$('.tab_box').removeClass('active');
			$('.tab_box[data-tabs="'+$(this).attr('data-tabs')+'"]').addClass('active');
			$.each(sliders, function(i, slider) { 
	            slider.reloadSlider();
	        });
		};
	});

	$('.compare_tabs li').click(function(){
		if (!$(this).hasClass('active')) {
			$('.compare_tabs li').removeClass('active');
			$(this).addClass('active');
		};
	});

	//--------------------------------------------------  compares slider
    var compares = $('.compare_slider').bxSlider({
		mode: 'horizontal',
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 214,
		slideMargin: 15,
		pager: false,
		infiniteLoop: false,
		hideControlOnEnd: true
	});
	$('.compare_del').click(function(){
		$(this).parent().remove();
        compares.reloadSlider();
	});


	//--------------------------------------------------  select
	$('select').selectric();

	//--------------------------------------------------  range
	var $range = $("#range"),
        $result_from = $("#result_from"),
        $result_to = $("#result_to");

    var track = function () {
        var $this = $(this),
            from = $this.data("from"),
            to = $this.data("to");

        $result_from.html(from);
        $result_to.html(to);
    };
	$('#range').ionRangeSlider({
	    type: "double",
	    grid: true,
	    grid_num: 2,
	    hide_min_max: true,
    	hide_from_to: true,
	});
	$range.on("onStart", track);
	$range.on("change", track);
	$range.on("onFinish", track);
	$range.on("onUpdate", track);
	
	//--------------------------------------------------  rate
	$('.rate').raty({
	    starOff      : 'img/star-off.png',
	    starOn       : 'img/star-on.png',
	    halfShow     : false,
	    score: function() {
			return $(this).attr('data-score');
		}
	});
	if ($('body').hasClass('body_rent')) {
		$('.rate').raty({
			starOff      : 'img/star-off.png',
		    starOn       : 'img/star-on_rent.png',
	    	halfShow     : false,
		    score: function() {
				return $(this).attr('data-score');
			}
		});
	}
	else if($('body').hasClass('body_sale')) {
		$('.rate').raty({
			starOff      : 'img/star-off.png',
		    starOn       : 'img/star-on_sale.png',
	    	halfShow     : false,
		    score: function() {
				return $(this).attr('data-score');
			}
		});
	}
	else if($('body').hasClass('body_serv')) {
		$('.rate').raty({
			starOff      : 'img/star-off.png',
		    starOn       : 'img/star-on_serv.png',
	   		halfShow     : false,
		    score: function() {
				return $(this).attr('data-score');
			}
		});
	}



	//--------------------------------------------------  navbar
	$('.navbar').click(function(event) {
		if (!$(this).hasClass('active')) {
			$('.navbar').addClass('active');
			$('.top_menu').css('left', '0');
		} 
		else {
			$('.navbar').removeClass('active');
			$('.top_menu').css('left', '-100%');
		}
	});
	$(window).resize(function(event) {
		$('.navbar').removeClass('active');
		$('.top_menu').css('left', '');
	});

	//--------------------------------------------------  sidebar head mobile
	$('.sidebar_head_mobile').click(function(event) {
		$('.sidebar .menu_category > ul').slideToggle(400);
	});
	$(window).resize(function(event) {
		$('.sidebar .menu_category > ul').css('display', '');
	});

	//--------------------------------------------------  flip_box
	function flipBox(){
		$('.slide_up .flip_box').each(function() {
			var thisW = parseInt($(this).width()),
				thisH = (thisW/1.553).toFixed(0);
			if ($(window).width() < 768) {
				$(this).css('height', thisH + 'px');
				$(this).find('.front').css('height', thisH + 'px');
				$(this).find('.back').css('height', thisH + 'px');
				$(this).find('.flip_title').css('width', thisW + 'px');

				if ($(window).width() < 480) {
					$(this).find('.flip_text').css('height', thisH + 'px');
				} 
				else {
					$(this).find('.flip_text').css('height', thisH - 55 + 'px');
				}
			}
			else{
				$(this).css('height', '');
				$(this).find('.front').css('height', '');
				$(this).find('.back').css('height', '');
				$(this).find('.flip_title').css('width', '');
				$(this).find('.flip_text').css('height', '');
			}
		});
	};
	$(window).resize(function(event) {
		flipBox();
	});
	flipBox();

	//--------------------------------------------------  sidebar_menu_arr
	$('.sidebar_menu_arr').click(function(event) {
		var submenu = $(this).parents('li').find('ul');
		if (submenu.css('display') == 'none') {
			submenu.slideDown(400);
		} 
		else {
			submenu.slideUp(400);
		}
	});
	$(window).resize(function(event) {
		if ($(window).width() > 1023) {
			$('.body_rent .sidebar .menu_category ul ul').css('display', '');
		}
	});
	
	

});