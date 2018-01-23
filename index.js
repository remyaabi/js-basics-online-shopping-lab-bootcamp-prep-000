var cart = [];
var cardNumber=876950;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
 var max=100;
 var min=1;
 var itemName=item
 var itemobj={};
 itemobj[itemName]=Math.floor(Math.random() * (max - min) + min);
 var cart=getCart();
 cart.push(itemobj);
 cart=setCart(cart);
  console.log(`${itemName} has been added to your cart.`);
  console.log(cart);
 return cart;

}

function viewCart() {
  // write your code here
  var viewCartLine;
  var cart=getCart();
  console.log(`cart.length ${cart.length}`)
     if(cart.length!==0){
        viewCartLine="In your cart, you have";
        for(var i=0;i<cart.length;i++){
           var  itemObj=cart[i];
          
           var keys=Object.keys(itemObj);
           console.log(`keys ${keys}`);
            var value=itemObj[keys];
             console.log(`value ${value}`)
          
             if(cart.length==1){
              viewCartLine=`${viewCartLine} ${[keys]} at $${value}.`;
               }else if(i===cart.length-1){
                   console.log("eneterde length else")
                   viewCartLine=`${viewCartLine}, and ${[keys]} at $${value}.`
               }else{
                 console.log("eneterde last else")
                 console.log(`viewCartLine: ${viewCartLine}`);
                 if (viewCartLine!="In your cart, you have"){
                  viewCartLine=`${viewCartLine}, ${[keys]} at $${value}`
               }else{
                  viewCartLine=`${viewCartLine} ${[keys]} at $${value}`
               }
             }
    }
  }
  
  else{
    viewCartLine="Your shopping cart is empty."
  }
  return viewCartLine;
}

function total() {
  var total=0;
  var cart=getCart();
  if(cart.length!==0){
  
    for(var i=0;i<cart.length;i++){
     var  itemObj=cart[i];
       var keys=Object.keys(itemObj);
         
          var value=itemObj[keys];
           total+=value;
         
    }
  }
  return total;
}

function removeFromCart(item) {
  var flag=false;
  var cart=getCart();
  console.log(`cart after getcart() ${cart}`);
  if(cart.length!==0){
    for(var i=0;i<cart.length;i++){
      var itemObj=cart[i];
      var keys=Object.keys(itemObj);
     
         if (keys===item){
           cart.splice(i, 1)
            console.log(`cart after spilce() ${cart}`);
          cart= setCart(cart);
           console.log(`cart after setcart ${cart}`);
          delete itemObj[key];
           flag=true;
         
      }
      
    }
  }
  if(flag==false){
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  var message;
  if (arguments.length===0){
    message="Sorry, we don't have a credit card on file for you.";
  }
}
