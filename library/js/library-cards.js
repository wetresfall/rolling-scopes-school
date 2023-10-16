function updateCardButtonVisibility() {


  const cardButtonForm = document.querySelector('.library-card__button-form');
  const svgImage = document.querySelector('.svgimg');

  if (isAuthenticated === true) {
    cardButtonForm.style.display = 'none';
    svgImage.style.display = 'block';
  } else if (isAuthenticated === false) {
    cardButtonForm.style.display = 'block';
    svgImage.style.display = 'none';
  }
}

updateCardButtonVisibility();

function updateElementVisibility(isAuthenticated) {
  const qElement = document.querySelector('.q');
  const qqElement = document.querySelector('.qq');
  const qqqElement = document.querySelector('.qqq');
  const qqqqElement = document.querySelector('.qqqq');

  if (isAuthenticated === true) {
    qElement.style.display = 'none';
    qqElement.style.display = 'none';
    qqqElement.style.display = 'block';
    qqqqElement.style.display = 'block';
  } else if (isAuthenticated === false) {
    qElement.style.display = 'block';
    qqElement.style.display = 'block';
    qqqElement.style.display = 'none';
    qqqqElement.style.display = 'none';
  }
}

updateElementVisibility(isAuthenticated);