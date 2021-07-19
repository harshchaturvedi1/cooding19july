let total = JSON.parse(localStorage.getItem('priceTotal'));
// checking if user have applied for promo code  
document.getElementById('price').innerHTML = `Total pay = ${total}`;
if (localStorage.getItem('newTotal') != null) {
    document.getElementById('price').style.textDecoration = 'line-through';
    document.getElementById('price').style.color = 'red';

    let newp = JSON.parse(localStorage.getItem('newTotal'));
    document.getElementById('newPrice').innerHTML = `New Price = ${newp}`;
    document.getElementById('newPrice').style.color = 'green';
}
// taking user detail 
function UserDetail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let adress = document.getElementById('adress').value;
    let cardname = document.getElementById('cardname').value;
    let pass = document.getElementById('pass').value;
    if (name == '')
        alert('enter name');
    else if (name == '')
        alert('enter name');
    else if (email == '')
        alert('enter email');
    else if (adress == '')
        alert('enter adress');
    else if (cardname == '')
        alert('enter card Number');
    else if (pass == '')
        alert('enter pin');
    // waiting for 3 sec befoer order confirmation
    else {
        setTimeout(() => {
            alert(`${name}, your order has been placed`);
            secondPart();
        }, 3000);
    }
}
// after order conformation display thankyou
function secondPart() {
    document.getElementById('part1').innerHTML = null;
    let last = document.getElementById('part2');
    last.innerHTML = '<h1>ThankYou For Your Purchase</h1>'
}