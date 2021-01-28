const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');

dropValue.addEventListener('click', () => {
    if (dropList.classList.contains('dropdown__list')) {
        dropList.classList.add('dropdown__list_active')
    }
});

links.forEach((el) => {
    el.addEventListener('click', () => {
        event.preventDefault();
        dropValue.textContent = event.target.textContent;
        dropList.classList.remove('dropdown__list_active')
    });
});
