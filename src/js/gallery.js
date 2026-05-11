import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const isDesktop = () => window.matchMedia('(min-width: 1440px)').matches;

let galleryThumbs = null;

if (isDesktop()) {
  galleryThumbs = new Swiper('.gallery-thumbs', {
    modules: [Thumbs],
    slidesPerView: 6,
    spaceBetween: 12,
    watchSlidesProgress: true,
  });
}

const gallerySwiper = new Swiper('.gallery-wrapper', {
  modules: [Navigation, Pagination, Thumbs],
  slidesPerView: 1,
  loop: true,

  navigation: {
    prevEl: '.gallery-btn-prev',
    nextEl: '.gallery-btn-next',
  },

  pagination: {
    el: '.gallery-dots',
    clickable: true,
    bulletClass: 'gallery-dot',
    bulletActiveClass: 'active',
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});
