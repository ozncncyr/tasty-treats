// import Swiper from 'swiper/swiper-bundle.min.mjs';
// import 'swiper/swiper-bundle.css';
// import 'swiper/modules/pagination.min.css';

import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';
import '../../../node_modules/swiper/swiper-bundle.css';
import '../../../node_modules/swiper/modules/pagination.min.css';

// Slider oluşturma - Create slider
new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  mousewheel: {
    invert: true,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
});
