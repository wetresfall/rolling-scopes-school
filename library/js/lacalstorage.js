const registerForm = document.querySelector('.register__form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));

  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('register-email').value = '';
  document.getElementById('register-password').value = '';

  location.reload();

});

let isAuthenticated = null;

if (localStorage.getItem('user')) {
  console.log('Вы авторизованы на сайте.');
  isAuthenticated = true;
} else {
  console.log('Вы не авторизованы на сайте.');
  isAuthenticated = false;
}


const logOutButton = document.querySelector('.drop-menu__button_log-out');

logOutButton.addEventListener('click', function() {

  localStorage.removeItem('user');
  location.reload();
});




const loginButtonElement = document.querySelector('.drop-menu__button_login');
const profileButtonElement = document.querySelector('.drop-menu__button_profile');
const registerButtonElement = document.querySelector('.drop-menu__button_register');
const logoutButtonElement = document.querySelector('.drop-menu__button_log-out');

if (isAuthenticated === true) {
  loginButtonElement.style.display = 'none';
  registerButtonElement.style.display = 'none';
  profileButtonElement.style.display = 'block';
  logoutButtonElement.style.display = 'block';
} else if (isAuthenticated === false) {
  loginButtonElement.style.display = 'block';
  registerButtonElement.style.display = 'block';
  profileButtonElement.style.display = 'none';
  logoutButtonElement.style.display = 'none';
}