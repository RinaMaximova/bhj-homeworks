const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const newProduct = (id, count, image) => {
    return `<div class='cart__product' data-id='${id}'>
            <img class='cart__product-image' src='${image}'>
            <div class='cart__product-count'>${count}</div>
        </div>`
};


for (let product of products) {
    let minus = product.querySelector('.product__quantity-control_dec');
    let plus = product.querySelector('.product__quantity-control_inc');
    let counter = product.querySelector('.product__quantity-value');
    let addButton = product.querySelector('.product__add');

    minus.addEventListener('click', () => {
        if (counter.textContent > 1) {
            counter.textContent--;
        }
    });

    plus.addEventListener('click', () => {
        counter.textContent++;
    });

    addButton.addEventListener('click', () => {
        let id = product.dataset.id;
        let count = counter.textContent;
        let image = product.querySelector('.product__image').getAttribute('src');
        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartProduct) {
            let productCounter = cartProduct.querySelector('.cart__product-count');
            let productCounterValue = productCounter.textContent;

            productCounter.textContent = Number(productCounterValue) + Number(count);

            return;
        }

        cartProducts.innerHTML += newProduct(id, Number(count), image);
    });
}
