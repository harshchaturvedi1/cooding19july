//  funcion to append each item in body of html
function addJweleries(ele) {

    //  the div where item is appended
    let cont = document.getElementById('container');

    let div = document.createElement('div');
    let name = document.createElement('p');
    // name of prodduct
    let image = document.createElement('img');   //image link
    let price_p = document.createElement('p');    //price
    let brand_p = document.createElement('p');  //brand name

    image.src = ele.link;
    name.innerHTML = ele.name;
    price_p.innerHTML = ele.price;
    brand_p.innerHTML = ele.brand;
    // appending after assigning values
    div.append(image, name, price_p, brand_p);

    cont.append(div);


}
let jweleryList = JSON.parse(localStorage.getItem('cartItem'));
let total = 0;  //total price
// to iterate through each item one by one 
jweleryList.forEach(element => {
    addJweleries(element);
    total += Number(element.price);
});


document.getElementById('price').innerHTML = total;
if (localStorage.getItem('priceTotal') == null) {
    localStorage.setItem('priceTotal', JSON.stringify(total));
}
else {
    let x = JSON.parse(localStorage.getItem('priceTotal'));
    x = total;
    localStorage.setItem('priceTotal', JSON.stringify(x));
}


// if user apply for promo code
function applyPromo() {
    let code = document.getElementById('coupanCode').value;
    // checking promo
    if (code === 'masai30') {
        // if promo is valid than apply 
        document.getElementById('price').style.textDecoration = 'line-through';
        document.getElementById('price').style.color = 'red';
        let newP = total * (30 / 100);
        // appending new price to page
        document.getElementById('newPrice').innerHTML = `New Price = ${total - newP}`;
        document.getElementById('newPrice').style.color = 'green';
        if (localStorage.getItem('newTotal') == null) {
            localStorage.setItem('newTotal', JSON.stringify(total - newP));
        }
        // storing new promo to local storage
        else {
            let x = JSON.parse(localStorage.getItem('newTotal'));
            x = total - newP;
            localStorage.setItem('priceTotal', JSON.stringify(x));
        }


    }
    // if promo is invalid
    else {
        alert('Invalid Promo');
    }
}

function checkOut() {
    window.location.href = 'checkOut.html';
}