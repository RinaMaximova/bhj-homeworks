const signInWrapper = document.getElementById('signin');
const signInForm = document.getElementById('signin__form');
const userIdHolder = document.getElementById('user_id');


const showUserId = () => {
    let userId = localStorage.getItem('user_id');
    if (userId === null) {
        signInWrapper.classList.add('signin_active');
        return;
    }

    userIdHolder.textContent = userId;
    userIdHolder.closest('.welcome').classList.add('welcome_active');
    signInWrapper.classList.remove('signin_active');
};

window.onload = () => {
    showUserId();
};

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(signInForm);
    let xhr = new XMLHttpRequest();
    let inputLogin = document.querySelector('[name="login"]');
    let inputPassword = document.querySelector('[name="password"]');

    formData.login = inputLogin.value;
    formData.password = inputPassword.value;

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);

    xhr.responseType = 'json';

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (!xhr.response.success) {
                alert('Неверный логин/пароль');
                inputLogin.value = '';
                inputPassword.value = '';
            } else {
                localStorage.setItem('user_id', xhr.response.user_id);
                showUserId()
            }
        }
    });

    xhr.send(formData);
});