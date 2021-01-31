const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');

modalClose.forEach(cross => {
    cross.addEventListener('click', () => {
        cross.closest('.modal').classList.remove('modal_active');
    });
});


if (modalSuccess) {
    showSuccess.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });
}


modalMain.classList.add('modal_active');