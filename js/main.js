// service slider

$('.service-slider').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: false,
  dots:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// Testimonials slider

$('.testimonials-slider').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  dots:false,
  arrows: true,
  

  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
