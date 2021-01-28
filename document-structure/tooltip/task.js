const links = document.querySelectorAll('.has-tooltip');
const openTooltip = (e) => {
    e.preventDefault();
    e.target.insertAdjacentHTML('afterEnd', `<div class='tooltip tooltip_active'>${e.target.title}</div>`);
};

for (link of links) {
    link.addEventListener('click', openTooltip);
}
