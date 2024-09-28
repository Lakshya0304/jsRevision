let score = null

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));  //number 
console.log(valueInNumber); //Nan

//There are some restriction in conversion 
// i/p      o/p
// 33       33
//"33"      NaN (not a number)
//true      1
//false     0
//null      0

let isLoggedIn 
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)      

//There are some restriction in conversion 
// i/p            o/p
// 1              true
// 0              false
// ""             false 
// "Lakshya"      true
// null           false
//undefined       false

let x = 33
let stingNum = String(x);
console.log(stingNum);
console.log(typeof(stingNum));

// *********************************    OPERATIONS   **************************************

let value = 3
console.log(-value)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);      // ** => used for power 
console.log(2/3);
console.log(2%3);

console.log(1 + "2");           // 12
console.log("1" + 2);           // 12
console.log("1" + 2+ 2);        //122
console.log(1 + 2+ "2");        //32

