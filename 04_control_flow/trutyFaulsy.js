
// FALSY VALUE
// false , 0 , -0, BigInt , null , undefined , Nan , ""

//TRUTHY VALUE
// "0" , 'false' , " " , [] , {} , function(){}

const userEmail = []
if(userEmail.length === 0){
    console.log(`Array is Empty`);
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`);
    
}


// false == 0      //true
// false == ''     //true
// 0 == ''         //true

//Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5??10
// val = null ?? 10
// val = undefined ?? 15

// console.log(val);


// Terniary Operator

// condition ? true : false

const tea = 100
tea >= 80 ? console.log(`More than 80`) : console.log(`Less than 80`);
