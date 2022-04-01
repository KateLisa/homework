window.addEventListener('DOMContentLoaded', function() {
    // document.querySelectorAll('.header__link').style.color = 'red' 

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
    document.querySelectorAll('.our-work__btn').forEach(function(workBtn) {
        workBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.our-work__cards').forEach(function(content) {
                content.classList.remove('our-work__cards-active')
            })
            document.querySelector(`[data-target ="${path}"]`).classList.add('our-work__cards-active')
        })
    })


})