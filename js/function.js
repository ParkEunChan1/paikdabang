$(function(){

  const $mainmnu = $('nav > .gnb > li')
  const $bg_lnb = $('.bg_lnb')
  const $lnb = $('nav .lnb')
  const $newmnu = $('.bg_lnb > .newmnu');

  $mainmnu.on('mouseenter', function(){
    $bg_lnb.stop().fadeIn(200);
    $lnb.stop().fadeIn(200);
 
    

  });
  $mainmnu.on('mouseleave', function(){
    $bg_lnb.stop().fadeOut(200);
    $lnb.stop().fadeOut(200);
   

  });

  // 슬라이드

  let nowIdx = 0;
  
 
  const $container = $('section > .slides-container>li');
  const $pagination = $('section > ol > li > a');

  const fadeFn = function(){$container.filter('.on').stop().fadeOut().removeClass('on');


  //2 나타내기
 $container.eq(nowIdx).stop().fadeIn().addClass('on');

 
 //3 활성화표시
 $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');}

  $pagination.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $pagination.index(this);
    $container.filter('.on').stop().fadeOut().removeClass('on');


    //2 나타내기
   $container.eq(nowIdx).stop().fadeIn().addClass('on');

   
   //3 활성화표시
   $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  
  });

  


  $(window).on('load',function(){
   
    setInterval(function(){
   
      if(nowIdx < 3){
        nowIdx++;
      }else{
        nowIdx=0;
      }
    fadeFn();
    
    },3000);
  
    
  });

  $('.success_point > .success_point > li:nth-child(2) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(2) > ol > .icon2').stop().fadeIn(200);
  });
  
  $('.success_point > .success_point > li:nth-child(2) > ol > .icon2').on('mouseout',function(){
    $('.success_point > .success_point > li:nth-child(2) > ol > .icon2').stop().fadeOut(200);
  });
  $('.success_point > .success_point > li:nth-child(3) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(3) > ol > .icon2').stop().fadeIn(200);
  });
  
  $('.success_point > .success_point > li:nth-child(3) > ol > .icon2').on('mouseout',function(){
    $('.success_point > .success_point > li:nth-child(3) > ol > .icon2').stop().fadeOut(200);
  });
  $('.success_point > .success_point > li:nth-child(4) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(4) > ol > .icon2').stop().fadeIn(200);
  });
  
  $('.success_point > .success_point > li:nth-child(4) > ol > .icon2').on('mouseout',function(){
    $('.success_point > .success_point > li:nth-child(4) > ol > .icon2').stop().fadeOut(200);
  });
  $('.success_point > .success_point > li:nth-child(6) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(6) > ol > .icon2').stop().fadeIn(200);
  });
  
  $('.success_point > .success_point > li:nth-child(6) > ol > .icon2').on('mouseout',function(){
    $('.success_point > .success_point > li:nth-child(6) > ol > .icon2').stop().fadeOut(200);
  });
  $('.success_point > .success_point > li:nth-child(1) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(1) > ol > .icon2').stop().fadeIn(200);
  });
  
  $('.success_point > .success_point > li:nth-child(1) > ol > .icon2').on('mouseout',function(){
    $('.success_point > .success_point > li:nth-child(1) > ol > .icon2').stop().fadeOut(200);
  });

  $('.success_point > .success_point > li:nth-child(7) > ol > .icon1').on('mouseover',function(){
    $('.success_point > .success_point > li:nth-child(7) > ol > .icon1').fadeOut(200);
    $('.success_point > .success_point > li:nth-child(7) > ol > .icon2').fadeIn(200);
  
    
 
  });
  
  $('.success_point > .success_point > li:nth-child(7) > ol > .icon2').on('mouseout',function(){
    
    // $('.success_point > .success_point > li:nth-child(7) > ol > .icon1').css({scale:0});
    $('.success_point > .success_point > li:nth-child(7) > ol > .icon1').stop().fadeIn(200);
  
  
    $('.success_point > .success_point > li:nth-child(7) > ol > .icon2').stop().fadeIn(200);
  });


  $('.family>li').on('click',function(){
    $('.family>li>').fadeToggle(300);
    
 
  });
  

 

  
//TOP button
// $(window).on('load',function(){
//   $('.success_point>.top').css({display:'none'});
// });

$(window).scroll(function(){
  
	if($(this).scrollTop() > 1){
		$('.success_point>.top').fadeIn();
	}else{
		$('.success_point>.top').fadeOut();
	}
});
$('.top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 400);
  	return false;
});

  });
