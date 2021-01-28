const menuLinks = document.querySelectorAll('.menu__link');
const closeActive = () => {
    let activeMenu = document.querySelector('.menu.menu_active');
    if (activeMenu) {
        activeMenu.classList.remove('menu_active')
    }
};

menuLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        closeActive();

        let menu = el.parentNode.querySelector('.menu');
        if (menu) {
            e.preventDefault();
            menu.classList.add('menu_active')
        }
    })
});

