// Слайдер для хедера
const swiper = new Swiper('.main__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-main__arrow.swiper-button-next',
    prevEl: '.slider-main__arrow.swiper-button-prev',
  },
});

// Боковая панель
window.onscroll = function showAside() {
  const sidebar = document.querySelector('.aside');
  const main = document.querySelector('.main');
  const page = document.querySelector('.page');

  if (window.scrollY >= 600) {
    sidebar.classList.add('aside-fixed');
    main.classList.add('main__container');
  } else {
    sidebar.classList.remove('aside-fixed');
    main.classList.remove('main__container');
  }

  if (window.scrollY >= 3050) {
    sidebar.classList.add('aside-sticky');
  } else {
    sidebar.classList.remove('aside-sticky');
  }
};

// Меню
const menu = () => {
  const menuButton = document.querySelector('.header-menu__mobile');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', (e) => {
    toggleMenu();
  });

  function toggleMenu() {
    menuButton.classList.toggle('header-menu__mobile_active');

    if (menuButton.classList.contains('header-menu__mobile_active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
}

menu();