function changeSlide(slideNumber) {
  const paginationButtons = document.querySelectorAll('.qcarousel-pagination__button');
  const activeButton = document.querySelector('.qcarousel-pagination__button--active');

  if (paginationButtons[slideNumber - 1] === activeButton) {
    return;
  }

  const carouselItems = document.querySelectorAll('.qcarousel__item');
  const carouselContainer = document.querySelector('.qcarousel__container');

  paginationButtons.forEach(button => {
    button.classList.remove('qcarousel-pagination__button--active');
  });

  paginationButtons[slideNumber - 1].classList.add('qcarousel-pagination__button--active');

  const startIndex = slideNumber - 1;
  const endIndex = startIndex + 2;

  carouselItems.forEach((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const currentIndex = Array.from(paginationButtons).findIndex(button => button.classList.contains('qcarousel-pagination__button--active'));
  const direction = slideNumber > currentIndex + 1 ? 'right' : 'left';

  carouselContainer.classList.add(`animate-${direction}`);

  setTimeout(() => {
    carouselContainer.classList.remove('animate-left', 'animate-right');
  }, 500);
}