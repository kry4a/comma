
$(function(){console.log('init');function updateParallax(){if($(window).width()>767){$('.parallax__layers').parallax({mouseport:$("body"),xorigin:0,yorigin:0},{xparallax:'50px',yparallax:'50px'});}else{$('.parallax__layers').unparallax();}}
$(window).resize(function(){updateParallax();});updateParallax();});