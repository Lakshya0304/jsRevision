// const promiseOne = new Promise( (resolve , reject) => {
//     //Do an async task

//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     } , 2000)
// })

// promiseOne.then(() => {
//     console.log('Promise consumed');
// })

// ***************************************************************************************

// new Promise( (resolve , reject) => {
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     } , 2000)
// }).then(()=> {
//     console.log('async promise');
// })

// ***************************************************************************************

// const promiseThree = new Promise( (resolve , reject) => {
//     setTimeout(() => {
//         resolve({username : "Lakshya" , email : "lakshya@gmail.com"})
//     } , 2000)
// })

// promiseThree.then((user) => {
//     console.log(user);
// })

// ***************************************************************************************

// const promiseFour = new Promise( (resolve , reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username : "Lakshya" , email : "lakshya@gmail.com"})
//         }else{
//             reject("Something went wrong!!")
//         }
//     } , 2000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username)=>{console.log(username);
// }).catch((error)=>{console.log(error);
// }).finally(() => console.log('The promise is either resolve or rejected')
// )

// ***************************************************************************************

// const promiseFive = new Promise( (resolve , reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username : "JavaScript" , email : "lakshya@gmail.com"})
//         }else{
//             reject("JavaScript went wrong!!")
//         }
//     } , 2000)
// })

// async function consumedPromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumedPromiseFive()

// ***************************************************************************************

