window.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
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