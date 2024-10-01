
function myName(){
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("Y");
    console.log("A"); 
}
// myName();


// if we do this 
// function add(num1 , num2){
//     console.log(num1 + num2)
// }
// const result = add(1,2);
// result is undefined because we doesn't return what function give us when executed 

function add(num1 , num2){
    return num1 + num2
}
const res = add(1,2);
// console.log(res);

function logInUserMssg(username) {
    return `${username} just logged in!`
}
// console.log(logInUserMssg())    //if we doesn't pass the value then it is undefined hence o/p undefined just logged in!

//Here ... is called as rest operator 
function calculateCartPrice(...num){
    return num ;
}

// console.log(calculateCartPrice(100,200,300));


const user = {
    username : "Lakshya",
    price :199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

// handleObject(user)

const array = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(array));

