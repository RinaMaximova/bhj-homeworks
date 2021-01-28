const checks = document.querySelectorAll('label .interest__check');

const checkChildren = (check) => {
    let children = check.closest('.interest').querySelectorAll('.interest__check');
    for (let child of children) {
        child.checked = check.checked
    }
};

for (let check of checks) {
    check.addEventListener('click', () => {
        checkChildren(check)
    })
}
