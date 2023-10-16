function updateButtonVisibility() {
  const buttonGetSign = document.querySelector('.button-get-sign');
  const buttonGetLogin = document.querySelector('.button-get-login');
  const buttonGetProfile = document.querySelector('.button-get-profile');

  if (isAuthenticated === true) {
    buttonGetSign.style.display = 'none';
    buttonGetLogin.style.display = 'none';
    buttonGetProfile.style.display = 'block';
  } else if (isAuthenticated === false) {
    buttonGetSign.style.display = 'block';
    buttonGetLogin.style.display = 'block';
    buttonGetProfile.style.display = 'none';
  }
}

updateButtonVisibility(isAuthenticated);

function updateProfileIcon(isAuthenticated) {
  const profileIcon = document.querySelector('.header__icon-profile-icon');
  const dropMenuHeading = document.querySelector('.drop-menu__heading');

  if (isAuthenticated === true) {
    profileIcon.src = './assets/svg/jd.png';
    profileIcon.setAttribute('width', '25px');
    profileIcon.setAttribute('height', '25px');
    profileIcon.setAttribute('title', 'John Doe');
    dropMenuHeading.textContent = 'F00234030';
  } else if (isAuthenticated === false) {
    profileIcon.src = './assets/svg/icon-profile.svg';
    profileIcon.removeAttribute('width');
    profileIcon.removeAttribute('height');
    profileIcon.removeAttribute('title');
  }
}


updateProfileIcon(isAuthenticated);