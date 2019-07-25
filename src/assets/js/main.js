const my_func = (function (){
    let main_display = document.querySelector(".main-display");
    let screen_height = $(window).height(); 
    console.log(screen_height);
    main_display.style.height = `${screen_height}px`;
})

my_func();

/*top slider */

$(document).ready(function(){
    $('.bottom-slider').slick({
        prevArrow: '<button class="custom-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="custom-btn slick-next"><i class="fas fa-arrow-right"></i></button>'
    });
  });
                  