const valuteContanier = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.responseType = 'json';

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let valute = xhr.response.response.Valute;

        loader.classList.toggle('loader_active');

        for (let valueItem in valute) {
            valuteContanier.insertAdjacentHTML('afterbegin', `<div class="item">
            <div class="item__code">${valute[valueItem].CharCode}</div>
            <div class="item__value">${valute[valueItem].Value}</div>
            <div class="item__currency">руб.</div>
            </div>
            `);
        }
    }
};

xhr.send();
