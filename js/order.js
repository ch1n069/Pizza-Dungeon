function order(e) {
    event.preventDefault

    var orderEl = document.querySelector('input[name="pizza"]:checked').value;


    var priceEl = 0

    if (orderEl === large) {
        priceEl = 1000;
    }
    console.log(orderEl)



}