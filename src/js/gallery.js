import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const isDesktop = () => window.matchMedia('(min-width: 1440px)').matches;

let galleryThumbs = null;

if (isDesktop()) {
  galleryThumbs = new Swiper('[data-gallery-thumbs]', {
    modules: [Thumbs],
    slidesPerView: 6,
    spaceBetween: 12,
    watchSlidesProgress: true,
  });
}

const gallerySwiper = new Swiper('[data-gallery-wrapper]', {
  modules: [Navigation, Pagination, Thumbs],
  slidesPerView: 1,
  loop: true,

  navigation: {
    prevEl: '[data-gallery-btn-prev]',
    nextEl: '[data-gallery-btn-next]',
  },

  pagination: {
    el: '[data-gallery-dots]',
    clickable: true,
    bulletClass: 'swiper-gallery-dot',
    bulletActiveClass: 'swiper-gallery-active',
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});
