const menuLinks = document.querySelectorAll('.menu__link');

const closeMenu = (menu) => menu.classList.remove('menu_active');

const openMenu = (menu) => {
    closeActive();
    menu.classList.add('menu_active');
};

const closeActive = () => {
    let activeMenu = document.querySelector('.menu_sub.menu_active');
    if (activeMenu) {
        closeMenu(activeMenu)
    }
};

menuLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        let subMenu = el.parentNode.querySelector('.menu_sub');
        if (subMenu) {
            e.preventDefault();

            subMenu.classList.contains('menu_active') ? closeMenu(subMenu) : openMenu(subMenu);
        }
    })
});

