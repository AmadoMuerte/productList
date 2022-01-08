
/* создать лист с продуктами
   сделать функцию вывода текста в инпутах  и добавления этого в лист продуктов 
    */


let productList = {};

const prodName = document.querySelector('.input__text'),
      count = document.querySelector('.input__count'),
      countTitle = document.querySelector('.counts'),
      addBtn = document.querySelector('.btn-add'),
      calcBtn = document.querySelector('.btn-count'),
      list = document.querySelector('.list');

addBtn.addEventListener('click', () => {
    outputProduct();
    addProductList(prodName, count);
    console.log(productList);
});

calcBtn.addEventListener('click', () => {
    let sum = calcProduct(productList);
    if (sum != 0) {
        countTitle.innerText = `Сумма товаров - ${sum} руб`;
    }
});



function addProductList(product, count) {

    if (prodName.value != '' && count.value != '') {
        productList[product.value] = +count.value;
        return;
    }
}

function outputProduct() {

    if (prodName.value != '' && count.value != '') {
        let li = document.createElement('li');
        li.classList.add('list__item');
        li.prepend(`${prodName.value} - ${count.value} руб`);
        list.prepend(li);
   }

}

function calcProduct(obj) {

        let sum = 0;

        for( let el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        
        return sum;

}