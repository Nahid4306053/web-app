$(document).ready(function () {

  $(window).scroll(function () { 
    if($(window).scrollTop() > 150){
      $(".Nav_bar_head .ctastor").addClass(" shadow  white");
    }
    else{
      $(".Nav_bar_head .ctastor").removeClass(" shadow  white");
     }
 });



  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 10000
  });




var owl = $('.owl-carousel');
  owl.owlCarousel({
 
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
  });

  

    $('.awesome .awesome_woarks_slider').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 5,
        autoplay:true,
        arrows: true,
        speed:100,
        prevArrow: $('.prev_A'),
        nextArrow: $('.next_A'),
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 4,
              speed:100,
              prevArrow: $('.prev_A'),
              nextArrow: $('.next_A'),
            }
          },
          {
            breakpoint: 800,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              prevArrow: $('.prev_A'),
               nextArrow: $('.next_A'),
               speed:100,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '70px',
              slidesToShow: 1,
              prevArrow: $('.prev_A'),
              nextArrow: $('.next_A'),
              speed:100,
            }
          }
        ]
      });



      $('.team .team_slider').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 5,
        autoplay:true,
        arrows: true,
        speed:100,
        prevArrow: $('.prev'),
      nextArrow: $('.next'),
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 4,
              prevArrow: $('.prev'),
               nextArrow: $('.next'),
               speed:100,
            }
          },
          {
            breakpoint: 800,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              prevArrow: $('.prev'),
               nextArrow: $('.next'),
               speed:100,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '70px',
              slidesToShow: 1,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
              speed:100,
            }
          }
        ]
      });




      $('.single-croseel').slick({
        autoplay:true,
        dots: true,
        appendDots: $('.slick-slider-dots'),
        speed:100,
        // vertical: true
      });

    //   $('#slick-slider').slick({
    //     autoplay: true,
    //     dots: true,
    //     appendArrows: $('.slick-slider-nav'),
    //     appendDots: $('.slick-slider-dots'),
    //     prevArrow: "<button class='slick-prev btn btn-white rounded-circle'><i class='mdi mdi-chevron-left'></i></button>",
    //     nextArrow: "<button class='slick-next btn btn-white rounded-circle'><i class='mdi mdi-chevron-right'></i></button>",
    // });

});


