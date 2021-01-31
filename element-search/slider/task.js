const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const getCurrIndex = () => {
    return slides.findIndex((el) => {
        return el.classList.contains('slider__item_active')
    });
};

arrowNext.addEventListener('click', () => {
    let currIndex = getCurrIndex();
    let nextIndex = currIndex === slides.length - 1 ? 0 : currIndex + 1;
    slides[currIndex].classList.remove('slider__item_active');
    slides[nextIndex].classList.add('slider__item_active');
});

arrowPrev.addEventListener('click', () => {
    let currIndex = getCurrIndex();
    let prevIndex = currIndex === 0 ? slides.length - 1 : currIndex - 1;
    slides[currIndex].classList.remove('slider__item_active');
    slides[prevIndex].classList.add('slider__item_active');
});