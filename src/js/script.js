$(document).ready(function(){
    $('.carousel__inner').slick({
        /* dots: true, */
        speed: 1000,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="src/img/carousel/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/img/carousel/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]

      });
});