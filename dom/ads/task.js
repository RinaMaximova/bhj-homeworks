const rotators = document.querySelectorAll('.rotator');
const random = (min, max) => {
    return min + Math.round(Math.random() * (max - min));
};

setInterval(() => {
    for (let rotator of rotators) {
        let index = random(0, rotator.children.length - 1);
        for (let element of rotator.children) {
            element.classList.remove('rotator__case_active');
            rotator.children[index].classList.add('rotator__case_active');
        }
    }
}, 1000);

