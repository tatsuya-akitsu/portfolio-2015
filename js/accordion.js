jQuery.easing.def = "easeOutExpo";
	
	menuStart = function(panesPosStart){
		$('#panes').show().css({opacity:0,top:'-202px'});
		$('.pane').css('left','0');
		$('#panes').css('left',panesPosStart);
		$('#panes').animate({opacity:1, top:'0px'},300);
	};	
		
	paneSlideLeft = function(paneID,panePos){
		$('.pane' + paneID).stop().animate({left:panePos},175);
	};	
	
	panesSlide = function(panesPos1,panesPos2,panesPos3){
		$('.pane1 a').click(function(){
			$('#panes').stop().animate({left:panesPos1},175);
			paneSlideLeft(2,'200px');
		});
		$('.pane2 a').click(function(){
			$('#panes').stop().animate({left:panesPos2},175);
			paneSlideLeft(3,'300px');
		});
		$('.pane3 a').click(function(){
			$('#panes').stop().animate({left:panesPos3},175);
			paneSlideLeft(4,'400px');
		});
		$('.pane4 a').click(function(){
			$('#panes').stop().animate({left:panesPos4},175);
		});
	};			
	
	$('.btn1').click(function(){menuStart('0px');panesSlide('0px');});
	$('.btn2').click(function(){menuStart('100px');panesSlide('0px');});
	$('.btn3').click(function(){menuStart('200px');panesSlide('100px','0px');});
	$('.btn4').click(function(){menuStart('300px');panesSlide('200px','100px','0px');});
	$('.btn5').click(function(){menuStart('400px');panesSlide('300px','200px','0px');});
	$('.btn6').click(function(){menuStart('400px');panesSlide('300px','200px','0px');});
			
	$('html').mouseup(function(e){
		var container = $("#panes");	
		if (container.has(e.target).length === 0){
			container.hide();
			$('.pane a').removeClass('selected');
			$('.pane4 a').attr('href','javascript:void(0);');
		};
	});