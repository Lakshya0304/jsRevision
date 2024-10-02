//for each loop 

const code = ['java' , 'js' , 'cpp' , 'c']

//callbackfn doesn't have a function name
// code.forEach( function (i) {
//     console.log(i); 
// })

// code.forEach( (i) => {console.log(i);})

const user = [
    {
        name : "Lakshya",
        age : 20
    },
    {
        name : "Ankish",
        age : 22
    },
    {
        name : "Deepansh",
        age : 21
    },
]

user.forEach( (item) => {
    console.log(item.name);
    console.log(item.age);
})