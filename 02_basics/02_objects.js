//singleton
// Object.create

//object literals 

const mySym = Symbol("key1")

const JsUser = {
    name : "Lakshya",
    "full name" : "Lakshya Khandelwal",
    [mySym] : "myKey1",     //this is way to excess the symbol
    age : 20,
    location : "Udaipur",
    email : "lakshya@gmail.com",
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// Object.freeze(JsUser);      //lock the object from modification
// JsUser.email = "moun@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");   
}
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);   
}

// console.log(JsUser.greeting)    //[Function (anonymous)]    It just tell that greeting is the function but not execute it
// console.log(JsUser.greeting())  

// console.log(JsUser.greeting2())


