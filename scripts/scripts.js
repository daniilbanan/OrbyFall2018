/*$(window).scroll(function() {
    var heightFirst=document.getElementById('promoBlock');
    if ($(this).scrollTop() > heightFirst.offsetHeight ) {
      $('#header').addClass("header_return");
      $('#title_one').css("display","none");
    }
    else {
      $('#header').removeClass("header_return");
      $('#title_one').css("display","block");
    }
  
  });*/
  $('.promo-block').css({'top': -$(window).scrollTop()/3});
