window.addEventListener('DOMContentLoaded', function() {
    // document.querySelectorAll('.header__link').style.color = 'red' 

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
})