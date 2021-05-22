$(document).ready(function(){

	
	
	//상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });
    
	
	
	
	
	
	$(".dp2,.dp2_bg").hide();
    
    $(".gnb>li").mouseenter(function(){
       $(".dp2,.dp2_bg").stop().slideDown()
    });
        
    $(".gnb>li").mouseleave(function(){
       $(".dp2,.dp2_bg").stop().slideUp();    
    });
    
	
	
	$(".sub_dp").hide();
    
    $(".lnb>li").mouseenter(function(){
       $(this).children(".sub_dp").stop().slideDown()
    });
        
    $(".lnb>li").mouseleave(function(){
      $(this).children(".sub_dp").stop().slideUp();    
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


	
	
	
	
    $("#content .main_banner").slick({
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
        dots: true,
		autoplaySpeed: 5000,
        centerMode: true,
		variableWidth: true,
		focusOnSelect: true
    });
	
	

	
	
	
	
	
	
})