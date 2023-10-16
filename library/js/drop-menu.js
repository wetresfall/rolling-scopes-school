const profileIcon = document.querySelector('.header__icon-profile-icon');
const dropMenu = document.querySelector('.drop-menu__hidden');
const loginButton = document.querySelector('.drop-menu__button_login');
const registerButton = document.querySelector('.drop-menu__button_register');
const loginModal = document.querySelector('.register__modal__login');
const registerModal = document.querySelector('.register__modal__register');
const registerCloseBtn = document.querySelector('.register__modal__register .close_btn');
const loginCloseBtn = document.querySelector('.register__modal__login .close_btn');
const registerContainer = document.querySelector('.register__container');
const loginContainer = document.querySelector('.login__container');
const buttonGetSign = document.querySelector('.button-get-sign');
const buttonGetLogin = document.querySelector('.button-get-login');
const myProfileModal = document.querySelector('.my-profile__modal');
const profileButton = document.querySelector('.drop-menu__button_profile');
const getProfileButton = document.querySelector('.button-get-profile');
const myProfileContainer = document.querySelector('.my-profile-container');
const profileCloseBtn = document.querySelector('.my-profile__modal .close_btn');

profileIcon.addEventListener('click', function() {
  if (dropMenu.style.display === 'none') {
    dropMenu.style.display = 'block';
  } else {
    dropMenu.style.display = 'none';
  }
});

loginButton.addEventListener('click', function() {
  loginModal.style.display = 'block';
  dropMenu.style.display = 'none';
});

registerButton.addEventListener('click', function() {
  registerModal.style.display = 'block';
  dropMenu.style.display = 'none';
});

buttonGetSign.addEventListener('click', function() {
  registerModal.style.display = 'block';
  dropMenu.style.display = 'none';
});

buttonGetLogin.addEventListener('click', function() {
  loginModal.style.display = 'block';
  dropMenu.style.display = 'none';
});

registerCloseBtn.addEventListener('click', function() {
  registerModal.style.display = 'none';
});

loginCloseBtn.addEventListener('click', function() {
  loginModal.style.display = 'none';
});

profileButton.addEventListener('click', function() {
  dropMenu.style.display = 'none';
  myProfileModal.style.display = myProfileModal.style.display === 'none' ? 'block' : 'none';
});

getProfileButton.addEventListener('click', function() {
  dropMenu.style.display = 'none';
  myProfileModal.style.display = 'block';
});

profileCloseBtn.addEventListener('click', function() {
  myProfileModal.style.display = 'none';
});




document.addEventListener('click', function(event) {
  if (!myProfileContainer.contains(event.target) && event.target !== profileButton && event.target !== profileCloseBtn) {
    myProfileModal.style.display = 'none';
  }
});



getProfileButton.addEventListener('click', function(event) {
  event.stopPropagation();
  myProfileModal.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
  const favouriteButtons = document.querySelectorAll('.favourite__card-button');
  const registerModal = document.querySelector('.register__modal__login');

  favouriteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      registerModal.style.display = 'block';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const favouriteButtons = document.querySelectorAll('.favourite__card-button');
  const registerModal = document.querySelector('.register__modal__login');
  const modalBuyCardModal = document.querySelector('.modal-buy-card__modal');

  favouriteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (isAuthenticated === true) {
        modalBuyCardModal.style.display = 'block';
      } 
      if (isAuthenticated === true) {
        registerModal.style.display = 'none';
      }
    });
  });
});

const closeButton = document.querySelector('.modal-buy-card__modal .close_btn');
const modalBuyCardModal = document.querySelector('.modal-buy-card__modal');

closeButton.addEventListener('click', function() {
  modalBuyCardModal.style.display = 'none';
});

document.getElementById("copyButton").onclick = function() {
  var copyText = this.getAttribute("data-copytext");
  var tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.setAttribute("value", copyText);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* Для мобильных устройств */
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var tooltip = document.getElementById("tooltip");
  tooltip.classList.remove("hideenq");

  setTimeout(function() {
    tooltip.classList.add("hideenq");
  }, 1000); // Скрываем подсказку через 2 секунды (2000 миллисекунд)
};