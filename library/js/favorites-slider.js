const inputElements = document.querySelectorAll('.favorites__seasons input[type="radio"]');
const winterVis = document.querySelector('.winter-vis');
const springVis = document.querySelector('.spring-vis');
const summerVis = document.querySelector('.summer-vis');
const autumnVis = document.querySelector('.autumn-vis');

function updateDisplay() {
  if (inputElements[0].checked) {
    winterVis.style.display = 'block';
    springVis.style.display = 'none';
    summerVis.style.display = 'none';
    autumnVis.style.display = 'none';
  } else if (inputElements[1].checked) {
    winterVis.style.display = 'none';
    springVis.style.display = 'block';
    summerVis.style.display = 'none';
    autumnVis.style.display = 'none';
  } else if (inputElements[2].checked) {
    winterVis.style.display = 'none';
    springVis.style.display = 'none';
    summerVis.style.display = 'block';
    autumnVis.style.display = 'none';
  } else if (inputElements[3].checked) {
    winterVis.style.display = 'none';
    springVis.style.display = 'none';
    summerVis.style.display = 'none';
    autumnVis.style.display = 'block';
  }
}

inputElements.forEach(function (input) {
  input.addEventListener('change', updateDisplay);
});

updateDisplay();

let elements = document.getElementsByClassName("toggle-element");
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  element.style.opacity = 0;
  element.style.visibility = "hidden";
  element.classList.add("show");
}