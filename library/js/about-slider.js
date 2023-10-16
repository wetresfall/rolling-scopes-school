const carouselContainer = document.querySelector('.carousel__container');
const carouselItems = Array.from(document.querySelectorAll('.carousel__item'));
const carouselButtons = document.querySelectorAll('.m-about__carret');
const paginationButtons = document.querySelectorAll('.carousel-pagination__button');
const carretLeftImg = document.querySelector('.m-about__carret--left img');
const carretRightImg = document.querySelector('.m-about__carret--right img');
let currentPosition = 0;
let isAnimating = false;

carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.classList.contains('m-about__carret--left') ? 'left' : 'right';
    navigateCarousel(direction);
  });
});

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    navigateCarouselToPosition(index);
  });
});

function navigateCarousel(direction) {
  if (isAnimating) {
    return;
  }

  if (direction === 'left') {
    if (currentPosition === 0) {
      carretLeftImg.setAttribute('src', './assets/svg/Carret_Left2.svg');
      return;
    }
    carretLeftImg.setAttribute('src', './assets/svg/Carret_Left.svg');
    currentPosition--;
  } else {
    if (currentPosition === carouselItems.length - 1) {
      carretRightImg.setAttribute('src', './assets/svg/Carret_Right2.svg');
      return;
    }
    carretRightImg.setAttribute('src', './assets/svg/Carret_Right.svg');
    currentPosition++;
  }
  updateCarousel(direction);
}

function navigateCarouselToPosition(position) {
  if (position === currentPosition || position < 0 || position >= carouselItems.length || isAnimating) {
    return;
  }

  const direction = position > currentPosition ? 'right' : 'left';
  currentPosition = position;
  updateCarousel(direction);
}

function updateCarousel(direction) {
  isAnimating = true;

  carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  carouselItems[currentPosition].style.display = 'block';
  paginationButtons.forEach(button => {
    button.classList.remove('carousel-pagination__button--active');
  });
  paginationButtons[currentPosition].classList.add('carousel-pagination__button--active');

  if (currentPosition === 0) {
    carretLeftImg.setAttribute('src', './assets/svg/Carret_Left2.svg');
  } else {
    carretLeftImg.setAttribute('src', './assets/svg/Carret_Left.svg');
  }

  if (currentPosition === carouselItems.length - 1) {
    carretRightImg.setAttribute('src', './assets/svg/Carret_Right2.svg');
  } else {
    carretRightImg.setAttribute('src', './assets/svg/Carret_Right.svg');
  }

  carouselContainer.classList.remove('carousel-item-slide-left', 'carousel-item-slide-right');
  if (direction === 'left') {
    carouselContainer.classList.add('carousel-item-slide-left');
  } else {
    carouselContainer.classList.add('carousel-item-slide-right');
  }

  carouselContainer.addEventListener('animationend', () => {
    carouselContainer.classList.remove('carousel-item-slide-left', 'carousel-item-slide-right');
    isAnimating = false;
  });
}