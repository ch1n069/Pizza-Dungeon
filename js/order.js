function order(e) {
    event.preventDefault();

    var orderEl = document.querySelector('input[name="pizza"]:checked').value;


    var priceEl = 0

    if (orderEl === 'large') {
        priceEl = 1000;
    }
    if (orderEl === 'medium') {
        priceEl = 650
    }


    var toppingEl = document.getElementById('toppings').value;
    var toppingPrice = 0;


    if (toppingEl === 'olive') {
        toppingPrice = 50;
    }
    if (toppingEl === 'cheese') {
        toppingPrice = 100;
    }
    if (toppingEl === 'peproni') {
        toppingPrice = 90;
    }

    // crust section////////////////////////////

    var crustEL = document.getElementById('crust').value;
    var crustPrice = 0;


    if (crustEL === 'stuffed') {
        crustPrice = 50;

    }
    if (crustEL === 'gluten') {
        crustPrice = 30;
    }
    if (crustEL === 'crispy') {
        crustPrice = 90;
    }


    var total = toppingPrice + crustPrice + priceEl




    var finalEl = document.getElementById('')




    console.log(total);
}