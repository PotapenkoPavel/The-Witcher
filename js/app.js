var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.arrow',
    },
    loop: true,
    simulateTouch: false,
    breakpoints: {
        576: {
            slidesPerView: 2
        }
    }
});

let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("header-active")
    menuButton.classList.toggle("menu-btn-active");
})