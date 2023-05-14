$(document).ready(function(){
  // 메뉴에 마우스 오버하면 모든 서브메뉴와 서브메뉴 배경 내려옴
  $(".header-nav > ul").mouseover(function(){
      $(".header-nav > ul > li .sub").show();
      $(".sub-bg").show();
  });
  $("header").mouseleave(function(){
      $(".header-nav > ul > li .sub").hide();
      $(".sub-bg").hide();
  });
  
  $(".language").click(function(){
    $(".language-list").show();
  });
  $(".language-list").mouseleave(function(){
    $(".language-list").hide(); 
  });


  
  $("a").click(function(e){
    e.preventDefault();  
  }); 

  var swiper1 = new Swiper(".mainSwiper", {
    loop:true,
    pagination: {
      el: ".mainSwiper .swiper-pagination",
      type: "fraction",
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".mainSwiper .swiper-button-next",
      prevEl: ".mainSwiper .swiper-button-prev",
    },
  });
//슬라이드 플레이버튼
  $(".start").on("click",function(){
    swiper1.autoplay.start();
    return false;
  });
  $(".stop").on("click",function(){
    swiper1.autoplay.stop();
    return false; 
  });
  $(".stop").click(function(){
    $(".start").addClass("active");
    $(".stop").addClass("active");
  });
  $(".start").click(function(){
    $(".start").removeClass("active");
    $(".stop").removeClass("active");
  });
 

  var swiper2 = new Swiper(".newsSwiper", {
    loop:true,
    slidesPerView: "auto",
    spaceBetween: 21,
    pagination: {
      el: ".newsSwiper .swiper-pagination",
    },
    navigation: {
      nextEl: ".newsSwiper .swiper-button-next",
      prevEl: ".newsSwiper .swiper-button-prev",
    },
  });

  $(".news-cont > div").hide();
  //첫번째 탭내용만 보임
  $(".news-cont > div:first").show();

  var $tablink01 = $(".news-tap ul li").click(function(){
    var idx=$tablink01.index(this);
    $(".news-tap ul li").removeClass("tap active")
    $(".news-tap ul li").eq(idx).addClass("tap active");
    $(".news-cont > div").hide();
    $(".news-cont > div").eq(idx).show();
  })
  $(".tab_title li").click(function(){
    var idx = $(this).index();
    $(".news-tap ul li").removeClass("tap active");
    $(".news-tap ul li").eq(idx).addClass("tap active");
    $(".news-cont > div").hide();
    $(".news-cont > div").eq(idx).show();
  });
  // popup슬라이드
  var swiper3 = new Swiper(".popupSwiper", {
    loop:true,
    slidesPerView: 1,
    pagination: {
      el: ".popupSwiper .swiper-pagination",
      type: "fraction",
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".popupSwiper .swiper-button-next",
      prevEl: ".popupSwiper .swiper-button-prev",
    },
  });
  $(".start01").on("click",function(){
    swiper3.autoplay.start();
    return false;
  });
  $(".stop01").on("click",function(){
    swiper3.autoplay.stop();
    return false; 
  });
  $(".stop01").click(function(){
    $(".start01").addClass("active");
    $(".stop01").addClass("active");
  });
  $(".start01").click(function(){
    $(".start01").removeClass("active");
    $(".stop01").removeClass("active");
  });

  //sns 탭
  $(".sns .sns-main > div").hide();
  $(".sns .sns-main > div:first").show();
  var $tablink02 = $(".sns .sns-icon a").click(function(){
    var idx=$tablink02.index(this);
    $(".sns .sns-icon a").removeClass("active")
    $(".sns .sns-icon a").eq(idx).addClass("active");
    $(".sns .sns-main > div").hide();
    $(".sns .sns-main > div").eq(idx).show();
  })





});

