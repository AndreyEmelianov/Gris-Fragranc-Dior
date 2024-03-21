const topSlider = new Swiper('.top__slider', {
  effect: 'fade',

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const aboutSlider = new Swiper('.about__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
