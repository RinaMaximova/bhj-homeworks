const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

const closeCurrentlyActive = () => {
    let activeTab = tabs.find((el) => {
        return el.classList.contains('tab_active');
    });

    let activeContent = tabContents.find((el) => {
        return el.classList.contains('tab__content_active');
    });

    if (activeTab !== undefined) {
        activeTab.classList.remove('tab_active')
    }

    if (activeContent !== undefined) {
        activeContent.classList.remove('tab__content_active')
    }
};


tabs.forEach((el, i) => {
    el.addEventListener('click', () => {
        closeCurrentlyActive();

        el.classList.add('tab_active');

        if (tabContents[i] !== undefined) {
            tabContents[i].classList.add('tab__content_active')
        }
    })
});