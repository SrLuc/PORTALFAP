export var settings = {
  speed: 500,
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 3.5,
  variableHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5 ,
        slidesToScroll: 1,
      },
    },
  ],
};
