// Primitive => number , string , boolean , null , undefined , symbol , bigInt
// Non - primitive => array , object , function

// Stack (Primitive)        => we make a copy of reference value
// Heap    (Non - primitive)    => we get the reference of original value

let Myname = "Lakshya"

let anotherName = Myname 
anotherName = "Monu"

console.log(Myname); // Lakshya
console.log(anotherName); // Monu

let userOne = {
    email : "lakshya@gamil.com",
    upi : "sbi@123"
}

let userTwo = userOne

console.log(userOne.email);     //lakshya@gmail.com

userTwo.email = "monu@gmail.com"
console.log(userOne.email);     //monu@gmail.com
console.log(userTwo.email);     //monu@gmail.com

