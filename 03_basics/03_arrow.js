// const user = {
//     username : "Lakshya",
//     price : 1099,
//     welcomeMessg : function(){
//         console.log(`${this.username} , Welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessg()
// user.username = "Monu"
// user.welcomeMessg()

// console.log(this);  //in node env like here this show {} 

// function chai(){
//     let username = "Lakshya"
//     console.log(this.username);   // In function we can't use this 
// }

// const chai = function(){
//     let username = "Lakshya"
//     console.log(this.username);   // In function we can't use this 
// }

// chai()





// Arrow function --------------> 
// () => {}

// const chai = () => {
//     let username = "Lakshya"
//     console.log(this);  
// }

// chai()


// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }

const addTwo = (num1 , num2)=> num1 + num2  //implicite return
// const addTwo = (num1 , num2)=> (num1 + num2) 
console.log(addTwo(3,4)); 
