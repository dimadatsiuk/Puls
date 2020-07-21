/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
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
}); */
const slider = tns({
container: '.carousel__inner',
items: 1,
slideBy: 'page',
autoplay: false,
controls: false,
nav: true,
navPosition: 'bottom',
autoHeight: true,


responsive: {
    767: {
        autoHeight: false
    },
    991: {
        autoHeight: false
    },
  }



});



document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});