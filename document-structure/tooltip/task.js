const links = document.querySelectorAll('.has-tooltip');
const getTooltip = () => {
    let tooltip = document.querySelector('.tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
        document.body.insertAdjacentElement('afterBegin', tooltip)
    }

    return tooltip;
};

const showTooltip = (e) => {
    e.preventDefault();

    let target = e.target;
    let tooltip = getTooltip();

    tooltip.innerHTML = target.title;
    tooltip.style.top = `${target.getBoundingClientRect().top + 30}px`;
    tooltip.style.left = `${target.getBoundingClientRect().left}px`;
};

for (link of links) {
    link.addEventListener('click', showTooltip);
}
