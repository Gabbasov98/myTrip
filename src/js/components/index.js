function stepsSlider() {
    var swiper = new Swiper('.steps .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.steps .swiper-button-next',
            prevEl: '.steps .swiper-button-prev',
        },
        pagination: {
            el: '.steps .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function employerSlider() {
    var swiper = new Swiper('.employer-get .swiper-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.employer-get .swiper-button-next',
            prevEl: '.employer-get .swiper-button-prev',
        },
        pagination: {
            el: '.employer-get .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}



$(document).ready(function() {

    employerSlider()

    if (window.innerWidth < 1200) {
        stepsSlider()
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
    })

    $(".qa__item-btn").click(function() {
        $(this).parents(".qa__item").toggleClass("qa__item--active")
        $(this).parents(".qa__item").find(".qa__item-hidden").slideToggle()
    })
})