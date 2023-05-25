const sliderContainer = document.querySelector('.slider-container');
const mainSlide = document.querySelector('.main-slide');
const sidebar = document.querySelector('.sidebar');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesLength - 1) * 100}vh`;

// swipe function
function swipe() {
    let y1 = null;
    let y2 = null;
    
    mainSlide.addEventListener('touchstart', start, false);
    mainSlide.addEventListener('touchmove', move, false);

    function start(event) {
        const firstTouch = event.touches[0];
        y1 = firstTouch.clientY;
    }

    function move(event) {
        if (!y1) {
            return false;
        }
        let y2 = event.touches[0].clientY;
        // console.log(y2);
        let yDiff = y2 - y1;
        if (yDiff < 0) {
            changeSlide('up')
        } else if (yDiff > 50) {
            changeSlide('down')
        }
    }
}
 // infinity function
function infinity(firstSlide, lastSlide, direction) {
    firstSlide.append(firstSlide.firstElementChild);
    lastSlide.prepend(lastSlide.lastElementChild);
    mainSlide.style.transition = "none";
    sidebar.style.transition = "none";
    if (direction === 'up') {
        activeSlideIndex = slidesLength - 2;
    } else if (direction == 'down') {
        activeSlideIndex = 1; 
    }
    setTimeout(function () {
      sidebar.style.transition = "0.4s ease-out";
      mainSlide.style.transition = "0.4s ease-out";
      });
    setTimeout(function () {
    changeSlide(direction);
    });
}

// Scrolling slide with buttons
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

// Scrolling slide with the mouse wheel
document.onwheel = (event) => {
    if (event.deltaY > 0) {
        changeSlide('up');
    } else {
        changeSlide('down');
    }
}

// Scrolling function
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex == slidesLength) {
            infinity(mainSlide, sidebar, direction);                         
        
            }
    } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                infinity(mainSlide, sidebar, direction);        
            }
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
swipe()