document.getElementById ('btn-cart-rose').addEventListener ('click', function  () {








    const quantity = setInput ('rose-quantity');
    


   const price =  setText ('rose-price')


    const total = setText ('rose-total')


    const totalPrice = setText ('total')

    const roseTotal = parseInt (quantity) * parseInt (price)


    setValue ('rose-total', roseTotal)


   const totals =  setText ('total');
   const sumOfAll = parseInt (roseTotal) +parseInt (totals);

   setValue ('total', sumOfAll)


   
   

   



   

})

document.getElementById ('btn-cart-choc').addEventListener ('click', function  () {








    const quantity = setInput ('choc-quantity');
    


   const price =  setText ('choc-price')


    const total = setText ('choc-total')


    const totalPrice = setText ('total')

    const roseTotal = parseInt (quantity) * parseInt (price)


    setValue ('choc-total', roseTotal)


   const totals =  setText ('total');
   const sumOfAll = parseInt (roseTotal) +parseInt (totals);

   setValue ('total', sumOfAll)


   

})



document.getElementById ('apply').addEventListener ('click', function () {

    const coupon = setInput ('Coupon');

    const total = setText ('total');
    const code = document.getElementById ('code');



    if (coupon == "DOM30") {


    const discount = total * 0.7;

    setValue ('total', discount.toFixed(2));


    }

    else if (coupon != "DOM30") {



        code.innerText = "Invalid Coupon Code";
        code.style.color = "red";
    }


    else {


        code.innerText = "Coupon : DOM30"
    }







})




function setText (text) {


    const set = document.getElementById (text).innerText;


    return set;







 }


 function setInput (input ) {

    const value = document.getElementById (input).value;


    return value;






 }


 function setValue (valueId , value ) { 




    document.getElementById (valueId).innerText = value;
 }