const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));

arrowNext.addEventListener('click', () => {
    let nextIndex;
    let currIndex = slides.findIndex((el) => {
        return el.classList.contains('slider__item_active')
    });

    slides[currIndex].classList.remove('slider__item_active');

    nextIndex = currIndex === slides.length - 1
        ? 0
        : currIndex + 1;

    slides[nextIndex].classList.add('slider__item_active');
});

arrowPrev.addEventListener('click', () => {
    let prevIndex;
    let currIndex = slides.findIndex((el) => {
        return el.classList.contains('slider__item_active')
    });

    slides[currIndex].classList.remove('slider__item_active');


    prevIndex = currIndex === 0
        ? slides.length - 1
        : currIndex - 1;

    slides[prevIndex].classList.add('slider__item_active');
});