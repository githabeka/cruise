$(document).ready(function(){
    $('.interesting__slider').slick({
        slidesToShow: 3,
        dots: true,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
               
            }
        ]
    });
  });

