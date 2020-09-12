const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        let deadCount = parseInt(dead.innerText);
        let lostCount = parseInt(lost.innerText);

        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.innerText = deadCount
        } else {
            lostCount++;
            lost.innerText = lostCount
        }

        if (deadCount === 10) {
            alert('Вы выиграли');
            clearCounters();
            return;
        }

        if (lostCount === 5) {
            alert('Вы проиграли');
            clearCounters();
        }
    }
}


function clearCounters() {
    dead.innerText = 0;
    lost.innerText = 0;
}