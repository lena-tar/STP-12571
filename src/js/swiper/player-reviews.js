import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    365: {
      slidesPerView: 1.15,
      spaceBetween: 24,
      slidesOffsetAfter: 20,
    },
    1440: {
      slidesPerView: 3.3,
      spaceBetween: 32,
      slidesOffsetAfter: 60,
    },
  },
});
