const timer = document.getElementById('timer');
const interval = setInterval(() => {
    let currentValue = parseInt(timer.innerText);
    let newValue = --currentValue;

    timer.innerText = newValue;

    if (newValue === 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}, 1000);