const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const originalCookieWidth = cookie.width;
const originalCookieHeight = cookie.height;


cookie.onclick = function() {
    let currentCount = parseInt(counter.innerText);

    counter.innerText = ++currentCount;

    cookieSizeUp();
    setTimeout(() => cookieSizeDown(), 100);
};

function cookieSizeUp() {
    cookie.height = originalCookieHeight * 1.1;
    cookie.width = originalCookieWidth * 1.1;
}

function cookieSizeDown() {
    cookie.height = originalCookieHeight;
    cookie.width = originalCookieWidth;
}