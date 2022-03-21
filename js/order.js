function order(e) {
    event.preventDefault();










    // var deliveryEl = document.getElementById('delivery').value

    // console.log(deliveryEl)

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
    // ///////hides order card
    $('.card1').hide()

    $('#an1,#checkout,#table,#proceed').show()



    var deliveryEl = document.getElementById('location').value
    var bike = 0

    if (deliveryEl != 0) {
        bike = 200
    }

    console.log(bike)


    var total = toppingPrice + crustPrice + priceEl


    var withDelivery = toppingPrice + crustPrice + priceEl + bike






    var finalEl = document.getElementById('')



    // ////////////values of the table ////////////


    $('#pizzaOrder').html(orderEl + " " + "pizza");
    $('#toppingsOrder').html(toppingEl + " ");
    $('#crustOrder').html(crustEL + " ")
    $('#deliveryOrder').html(deliveryEl + " ")
    $('#totalOrder').html(total + " ")

















    console.log(total);








    $(document).ready(function() {

        $('#proceed').on('click', function() {
            Swal.fire({
                title: 'You are about to checkout',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'No delivery',
                denyButtonText: `with delivery`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {


                    Swal.fire('Order has been recieved', 'your total is ' + total, 'success');
                } else if (result.isDenied) {
                    Swal.fire('order has been recieved ', 'your total is ' + withDelivery, 'success');
                }

            })


        })

    })
}