import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperElement = document.querySelector('#reviews-swiper');

if (swiperElement) {
  const swiper = new Swiper(swiperElement, {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,

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
}
