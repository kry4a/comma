$(function (){
  console.log('init');

  var w_width = $(window).width();
  var target = $(this).data('target');
  
  if (w_width>767) {
    $('.parallax').parallax(
      {mouseport: $("body"),xorigin: 0,yorigin: 0},
      {xparallax: '50px', yparallax: '50px'}
    );
  }
});