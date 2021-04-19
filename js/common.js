$(document).ready(function(){

	
	$('.dp2,.dp2_bg').hide();
    
    $('.gnb>li').mouseenter(function(){
       $('.dp2,.dp2_bg').stop().slideDown()
    });
        
    $('.gnb>li').mouseleave(function(){
       $('.dp2,.dp2_bg').stop().slideUp();    
    });
    
	
	
	$('.sub_dp').hide();
    
    $('.lnb>li').mouseenter(function(){
       $(this).children('.sub_dp').stop().slideDown()
    });
        
    $('.lnb>li').mouseleave(function(){
      $(this).children('.sub_dp').stop().slideUp();    
    });
	
    

	

	
	
    $(".slide").bxSlider({
    auto:true,
		pager : false
		
    });

	
	

	$(".mv_exhi").bxSlider({
    auto:true,
		pager : false
    });

	
    
    $("#section2 ul li:nth-child(1)").mouseenter(function(){
       $(this).parents("#section2").addClass("active1").fadeIn();
    });
	
	$("#section2 ul li:nth-child(1)").mouseleave(function(){
       $(this).parents("#section2").removeClass("active1").fadeOut();
    });
	
	$("#section2 ul li:nth-child(2)").mouseenter(function(){
       $(this).parents("#section2").addClass("active2").fadeIn();
    });
	
	$("#section2 ul li:nth-child(2)").mouseleave(function(){
       $(this).parents("#section2").removeClass("active2").fadeOut();
    });
	
	$("#section2 ul li:nth-child(3)").mouseenter(function(){
       $(this).parents("#section2").addClass("active3").fadeIn();
    });
	
	$("#section2 ul li:nth-child(3)").mouseleave(function(){
       $(this).parents("#section2").removeClass("active3").fadeOut();
    });


	
	
	$('.main_banner').owlCarousel({
    center: true,
    items:2,
    loop:true,
        nav:true,
    margin:30,
    responsive:{
        600:{
            items:2
        }}
    });
	
	
	
	
})