var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
jQuery('.slider-item').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  nav:false,
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});

jQuery('.product-gallery').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  nav:false,
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
});


jQuery('.cat-slider-item ').owlCarousel({
  loop:true,
  margin:10,
  rtl:true,
  nav:false,
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:3,
      },
      1000:{
          items:4,
      }
  }
});


jQuery('.timer').startTimer();

jQuery('footer span.scrollTop').click(function(){
  jQuery('body,html').animate({scrollTop:0},500);
});

jQuery("#app_zoom").elevateZoom({
    zoomType: 'inner',
    cursor: 'crosshair'
});
jQuery('[data-fancybox="gallery"]').fancybox({

});