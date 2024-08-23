//Cart open Close 1
let cartIcon=document.querySelector("#cart-icon1");
let cart1=document.querySelector(".cart1");
let closeCart=document.querySelector("#close-cart");
//Open Cart
cartIcon.onclick = () => {
    cart1.classList.add("active");
};

closeCart.onclick = () => {
    cart1.classList.remove("active");
};

//Making add to cart
//cart working JS
if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}

//Making Function
function ready() {
    //Remove Item From Cart
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    for (var i=0;i<removeCartButtons.length;i++){
        var button=removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    // Quantity change
    var cq = document.getElementById("cartQuantity")
    console.log(cq)
    cq.addEventListener('change',quantityChanged);
    // var quantityInputs=document.getElementsByClassName("cart-quantity");
     //for (var i=0;i<quantityInputs.length;i++){
       //  var input=quantityInputs[i];
         //input.addEventListener("change",quantityChanged);
     //}
     // Add to cart
    //var addCart = document.getElementsByClassName("cart");
    //for (var i=0;i<addCart.length;i++){
      //  var button=addCart[i];
        //button.addEventListener("click",addCartClicked);
    //}
}

//Remove Cart Item
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}
// Quantity Change
function quantityChanged(event){
     //var input=event.target;
     //if (isNaN(input.value) || input.value <=0){
      //   input.value = 1;
     //}
    //updatetotal();
    console.log("Quantity changed to: ", event.target.value)
    let quantity = event.target.value;
    let price = 500
    let total = quantity * price
    document.getElementById("totalAmount").innerHTML = "₹ " + total;

}



//Update Total
function updatetotal(){
     var cartContent=document.getElementsByClassName("cart-content")[0];
     var cartBoxes=document.cartContent.getElementsByClassName("cart-box");
     var total=0;
     console.log(cartContent)
     console.log(cartBoxes)
     console.log(total)
     for(var i=0;i<cartBoxes.length;i++){
         var cartBox=cartBoxes[i];
         var priceElement=cartBox.getElementsByClassName("cart-price")[0];
         var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
         var price=parseFloat(priceElement.innerText.replace("₹",""));
         var quantity=quantityElement.value;
         total += price * quantity;
     }
     document.getElementsByClassName("total-price")[0].innerText = "₹" + total;
}

//Cart open Close 2
let cartIcon2=document.querySelector("#cart-icon2");
let cart2=document.querySelector(".cart2");
let closeCart=document.querySelector("#close-cart2");
//Open Cart
cartIcon2.onclick = () => {
    cart2.classList.add("active");
};

closeCart2.onclick = () => {
    cart2.classList.remove("active");
};

//Making add to cart
//cart working JS
if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}

//Making Function
function ready() {
    //Remove Item From Cart
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    for (var i=0;i<removeCartButtons.length;i++){
        var button=removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    // Quantity change
    var cq = document.getElementById("cartQuantity")
    console.log(cq)
    cq.addEventListener('change',quantityChanged);
    // var quantityInputs=document.getElementsByClassName("cart-quantity");
     //for (var i=0;i<quantityInputs.length;i++){
       //  var input=quantityInputs[i];
         //input.addEventListener("change",quantityChanged);
     //}
     // Add to cart
    //var addCart = document.getElementsByClassName("cart");
    //for (var i=0;i<addCart.length;i++){
      //  var button=addCart[i];
        //button.addEventListener("click",addCartClicked);
    //}
}

//Remove Cart Item
function removeCartItem(event){
    var buttonClicked2=event.target;
    buttonClicked2.parentElement.remove();
}
// Quantity Change
function quantityChanged(event){
     //var input=event.target;
     //if (isNaN(input.value) || input.value <=0){
      //   input.value = 1;
     //}
    //updatetotal();
    console.log("Quantity changed to: ", event.target.value)
    let quantity2 = event.target.value;
    let price2 = 2000;
    let total2 = quantity2 * price2;
    document.getElementById("totalAmount2").innerHTML = "₹ " + total2;

}



//Update Total
function updatetotal(){
     var cartContent2=document.getElementsByClassName("cart-content2")[0];
     var cartBoxes2=document.cartContent2.getElementsByClassName("cart-box2");
     var total2=20;
     console.log(cartContent2)
     console.log(cartBoxes2)
     console.log(total2)
     for(var i=0;i<cartBoxes2.length;i++){
         var cartBox2=cartBoxes2[i];
         var priceElement2=cartBox2.getElementsByClassName("cart-price2")[0];
         var quantityElement2=cartBox2.getElementsByClassName("cart-quantity2")[0];
         var price2=parseFloat(priceElement2.innerText.replace("₹",""));
         var quantity2=quantityElement2.value;
         total2 += price2 * quantity2;
     }
     document.getElementsByClassName("total-price2")[0].innerText = "₹" + total2;
}