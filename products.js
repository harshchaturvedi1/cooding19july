// array of details of each items
let jwelery = [
    {
        // product name, image link, price, brand name  
        name: 'jwelery1',
        link: 'https://static01.nyt.com/images/2021/07/06/multimedia/06SP-JEWELRYHJ-INYT1/06SP-JEWELRYHJ-INYT1-videoLarge.jpg',
        price: 10000,
        brand: 'tanishq'
    },
    {
        name: 'jwelery2',
        link: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2842056198170',
        price: 15000,
        brand: 'tanishq'
    },
    {
        name: 'jwelery3',
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtcPJ8ob6z3asaPx7M0jMKWi1H4QdXkZ9tA&usqp=CAU",
        price: 5000,
        brand: 'kanishq'
    },
    {
        name: 'jwelery4',
        link: "https://static.toiimg.com/photo/79685107.cms",
        price: 12000,
        brand: 'kanishqa'
    },
    {
        name: 'jwelery5',
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUhz7dwzJ_oUouzc2cbfaOg_cAsOD_ox3sw&usqp=CAU",
        price: 11000,
        brand: 'kanishqa'
    },
]

// storing product in local storage 
if (localStorage.getItem('jweleries') == null) {
    localStorage.setItem('jweleries', JSON.stringify(jwelery));
}


let id = 1;   // to assign unique id attribute to each product item

//  funcion to append each item in body of html
function addJweleries(ele) {
    //  the div where item is appended
    let cont = document.getElementById('container');

    let div = document.createElement('div');
    div.setAttribute('id', id++);   //assigning unique id 
    let name = document.createElement('p');    // name of prodduct
    let image = document.createElement('img');   //image link
    let price_p = document.createElement('p');    //price
    let brand_p = document.createElement('p');  //brand name
    let cart_button = document.createElement('button');      // button to ad product to cart
    cart_button.addEventListener('click', function (event) {  //event listener to button
        addToCart(event.target.parentElement.id);
    })
    // asigning values
    image.src = ele.link;
    name.innerHTML = ele.name;
    price_p.innerHTML = ele.price;
    brand_p.innerHTML = ele.brand;
    cart_button.innerHTML = 'AddToCart';
    // appending after assigning values
    div.append(image, name, price_p, brand_p, cart_button);
    // appending to html page
    cont.append(div);


}
// to iterate through each item one by one 
function eachJwelery() {
    let jweleryList = JSON.parse(localStorage.getItem('jweleries'));
    jweleryList.forEach(element => {
        addJweleries(element);              // calling function to append and passing each product one by one as parameter
    });
}
eachJwelery();

//function to addig product to cart of user
function addToCart(itemId) {
    let item = document.getElementById(itemId);
    let link = item.childNodes[0].src;
    let name = item.childNodes[1].innerHTML;
    let price = item.childNodes[2].innerHTML;
    let brand = item.childNodes[3].innerHTML;
    let product = {
        link,
        name,
        price,
        brand
    }
    // console.log(product)
    let arr;
    if (localStorage.getItem('cartItem') == null)
        arr = [];
    else {
        arr = JSON.parse(localStorage.getItem('cartItem'))
    }
    arr.push(product);
    localStorage.setItem('cartItem', JSON.stringify(arr));

}
// funcion to view cart items 
function showCart() {
    window.location.href = 'cart.html';

}

// sorting from price low to high
function sortLtoH() {
    let cont = document.getElementById('container').innerHTML = null;

    let jweleryList = JSON.parse(localStorage.getItem('jweleries'));

    let jweleryList2 = jweleryList.sort(function (a, b) {
        return a.price - b.price;     //sorting
    })
    jweleryList2.forEach(element => {
        addJweleries(element);  // calling function to append and passing each product one by one as parameter
    });
}

// sorting product high to low price
function sortHtoL() {
    let cont = document.getElementById('container').innerHTML = null;

    let jweleryList = JSON.parse(localStorage.getItem('jweleries'));

    let jweleryList2 = jweleryList.sort(function (a, b) {
        return b.price - a.price;   //sorting
    })
    jweleryList2.forEach(element => {
        addJweleries(element);  // calling function to append and passing each product one by one as parameter
    });
}