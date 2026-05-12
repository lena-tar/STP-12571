import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const commandersSwiper = new Swiper('.commanders-swiper', {
  modules: [Navigation, Pagination, EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  loop: true,
  speed: 600,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination-custom',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
});
