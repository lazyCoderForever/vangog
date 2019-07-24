const my_func = (function (){
    let main_display = document.querySelector(".main-display");
    let screen_height = $(window).height(); 
    console.log(screen_height);
    main_display.style.height = `${screen_height}px`;
})

my_func();