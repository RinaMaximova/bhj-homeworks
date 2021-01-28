const modalSubscribe = document.getElementById('subscribe-modal');
const modalClose = modalSubscribe.querySelector('.modal__close');
const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
};

window.onload = () => {
    if (document.cookie.indexOf('modalShown=') < 0) {
        modalSubscribe.classList.add('modal_active');
        setCookie('modalShown', true)
    }
};

modalClose.addEventListener('click',  () => {
    modalSubscribe.classList.remove('modal_active');
});