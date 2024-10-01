// Immediately Invoked Function Expression (IIFE)
// global scope ke declaration se problem hiti h isliye hamne iife ka use kiya

(function chai (){
    console.log(`DB connected`);
})() ;
//here we put ; at end because it execute but doesn't now where to stop that why when we call another function it gives us error

// (function defination)(execution call)
// chai() 

( (name) => {
    console.log(`DB connected ${name}`);
}) ("Lakshya")

