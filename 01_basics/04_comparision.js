console.log("2" > 1);

console.log( null > 0);     //false
console.log( null == 0);    //false
console.log( null >= 0);    //true

//Reason is that the equality check ==  and comparision > < >= <= work differently
//comaparision convert null to a number and treat as 0

//strict check 
// ===

console.log(2 === "2");


if("1" === true)
{
    console.log(true);
}