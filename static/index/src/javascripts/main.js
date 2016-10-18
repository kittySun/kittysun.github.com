define(function(require) {
	var Spinning = require('./spinning');
	var s = new Spinning('#container');
	s.render();
	var bubbles = require("./bubbles.js")
	var MAX = 5;
	var i = 0;
	//Demo();
	function Demo(){
		CreateBubble();
		if(++i < MAX)
		setTimeout(Demo, 1000);
	}

	var $ = require("jquery");
	require("./jquery.fullPage.js")($);
	require("./type.js")($);
	$(document).ready(function() {
		$('#dowebok').fullpage({
			sectionsColor: ['#fff', '#fff', '#f4f4f4', '#fff'],
			anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
			navigation: true,
			scrollingSpeed:400,
			css3: true,
			navigationPosition: "left",
			afterLoad: function(anchorLink, index){
				if(index == 4){
					if($('.textarea').val()!='') return;
	        $('.textarea').focus()
				    .typetype("学习前端技能是一个充实愉悦的过程...", {
				    	t:200,
    					e:0
				    }).delay(1000)
				    .typetype("\n\n前端更注重用户体验，更要有对一像素的执着...",{
				    	t:200,
    					e:0
				    }).delay(1000)
				    .typetype("\n\n热爱前端，也热爱一切美好的事物...",{
				    	t:200,
    					e:0
				    }).delay(1000)
				    .typetype("\n\n希望在前进的路上与良友为伴...");
			  }
      }
		});
		$('#home_head').css('margin-top','0px');
	});
	//头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
	//项目轮播
	$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});
	
  // $('.textarea').focus()
  //   .typetype("Sometimes, it's really nice to simulate a human typing...", {
  //   }).delay(1500)
  //   .typetype("\n\nThat's what this `typetype` jQuery plugin is for.")
  //   .backspace(48)
  //   .typetype("Try it out!");

});