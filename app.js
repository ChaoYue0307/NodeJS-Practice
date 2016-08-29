/**
 * Created by user1 on 29/08/2016.
 */

function placeAnOrder(orderNumber){
    console.log('Customer order:', orderNumber);
    cookAndDeliverFood(function (){
        console.log('Delvered food order:', orderNumber);
    })
}

//Simulate a 5 second operation
function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}

//Simulate users web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

//This script is to prove multiple requests handling functionalities by nodejs
