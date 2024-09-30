
const Myarray = [1, 2, 3, 4, 5]

const arr = new Array(1,2,3,4,5)

// console.log(arr[0])

//Array Method

arr.push(6)
// console.log(arr);

arr.pop()
// console.log(arr)

// arr.unshift(0); //unshift insert the value at first
// console.log(arr);

// arr.shift();//remove the value at first
// console.log(arr);

// const newArr = arr.join() // convert all the value into string

// console.log(arr);       //[1,2,3,4,5]
// console.log(newArr);    //1,2,3,4,5

//slice , splice 

// console.log("A ", arr);

// const newArr = arr.slice(1,3);

// console.log(newArr);
// console.log("B" , arr);

// const newArr2 = arr.splice(1,3)     //it changes the original array
// console.log("C" , arr);
// console.log(newArr2);


const marvel_heros = ["thor" , "Ironman"]
const dc_heros = ["batman" , "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const heros = [...marvel_heros , ...dc_heros]
console.log(heros);

const a = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const A = a.flat(Infinity)  //Make all the array in array to single array
console.log(A);
