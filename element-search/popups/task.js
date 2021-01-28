const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelector('.modal__close');
const showSuccess = document.querySelector('.show-success');

modalClose.addEventListener('click', () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
});

if (modalSuccess) {
    showSuccess.addEventListener('click', () => {
        modalSuccess.classList.add('modal_active');
    });
}


modalMain.classList.add('modal_active');