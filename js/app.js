/* #Hamburger Menu
  ======================================================= */
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

/* #Menu Scroll On Click
  ======================================================= */
// Handling link clicks
const menuLinks = document.querySelectorAll('.header-links a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.hash;
    let yOffset = 0;

    if (window.innerWidth > 1024) {
      yOffset = -70;
    } else {
      yOffset = -80;
    }
    
    const element = document.querySelector(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});

    if (window.innerWidth < 1024) {
      hamburgerBtn.classList.remove('is-active');
      header.classList.remove('show-menu');
      body.classList.remove('no-scroll');
    }
  });
});

/* #Banner
================================================== */
if (document.querySelector('.banner')) {
  new Swiper(".banner .swiper", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: 'fade'
  });
}

/* #Gallery
================================================== */
if (document.querySelector('.gallery')) {
  new Swiper(".gallery .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".gallery .left",
      prevEl: ".gallery .right",
    },
    pagination: {
      el: ".gallery .swiper-pagination",
    },
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: 'fade'
  });
}

/* #Info Section Imgs
================================================== */
if (document.querySelector('.info-section-1 .img-toggler')) {
  const imgTogglerLinks = document.querySelectorAll('.info-section-1 .img-toggler');
  const imgs = document.querySelectorAll('.info-section-1 .imgs li');

  imgTogglerLinks.forEach((toggler, index) => {
    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      for (let i = 0; i < imgTogglerLinks.length; i++) {
        imgTogglerLinks[i].classList.remove('active');
        imgs[i].classList.remove('active');
      }

      toggler.classList.add('active');
      imgs[index].classList.add('active');
    });
  });
}

/* #Contact Bar
================================================== */
const contactBar = document.querySelector('.contact-bar');
const contactPopupToggler = document.querySelector('.contact-bar .popup-toggler');
const contactPopupClose = document.querySelector('.contact-bar .close-btn');

if (contactBar) {
  contactPopupToggler.addEventListener('click', (e) => {
    e.preventDefault();
    contactBar.classList.add('show');
    body.classList.add('no-scroll');
  });
  
  contactPopupClose.addEventListener('click', (e) => {
    e.preventDefault();
    contactBar.classList.remove('show');
    body.classList.remove('no-scroll');
  });
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});