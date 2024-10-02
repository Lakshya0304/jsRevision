//Filter


// const code = ['java' , 'js' , 'cpp' , 'c']
// const val = code.forEach( function (item) {
//         console.log(item); 
//         return item
// })
// console.log(val);       //undefined 

const num = [1,2,3,4,5,6,7,8,9]   

// const newNum = num.filter((n) => {
//     return n>5
// } )

// const newNum = num.filter((n) => n>5 )


const newNum = [] 
num.forEach((num) => {
    if(num > 5){
        newNum.push(num)
    }
})

// console.log(newNum);
