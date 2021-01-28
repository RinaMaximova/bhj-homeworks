const show = () => {
    const reveal = document.querySelectorAll('.reveal');
    const viewportHeight = window.innerHeight;

    for (let element of reveal) {
        let elementTop = element.getBoundingClientRect().top;
        elementTop < viewportHeight
            ? element.classList.add('reveal_active')
            : element.classList.remove('reveal_active')
    }
};

document.addEventListener('scroll', show);

