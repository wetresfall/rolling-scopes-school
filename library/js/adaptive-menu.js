const Mhb = document.querySelector('.m-header__button');
const Mhn = document.querySelector('.m-header__nav');
const body = document.querySelector('body');
const disableScroll = () => {
  body.style.overflow = 'hidden';
};

const enableScroll = () => {
  body.style.overflow = '';
};

Mhb.addEventListener('click', function() {
  Mhb.classList.toggle('active');
  Mhn.classList.toggle('active');

  if (Mhn.classList.contains('active')) {
    disableScroll();
  } else {
    enableScroll();
  }
});

const menuLinks = document.querySelectorAll('.m-header__nav a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    Mhb.classList.remove('active');
    Mhn.classList.remove('active');
    enableScroll();
  });
});

body.addEventListener('click', function(event) {
  if (!Mhb.contains(event.target) && !Mhn.contains(event.target)) {
    Mhb.classList.remove('active');
    Mhn.classList.remove('active');
    enableScroll();
  }
});