const reader = document.querySelector('.book');
const selectors = document.querySelectorAll('.font-size');

const change = (e) => {
    e.preventDefault();
    let target = e.target;
    let size = target.dataset.size;

    switch (size) {
        case 'big':
            reader.classList.add('book_fs-big');
            reader.classList.remove('book_fs-small');
            break;
        case 'small':
            reader.classList.add('book_fs-small');
            reader.classList.remove('book_fs-big');
            break;
        default:
            reader.classList.remove('book_fs-small');
            reader.classList.remove('book_fs-big');
    }

    for (let selector of selectors) {
        selector.classList.remove('font-size_active');
    }

    target.classList.add('font-size_active');
};


for (let selector of selectors) {
    selector.addEventListener('click', change)
}
