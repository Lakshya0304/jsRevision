const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.map( (num) => {return num+10})

//Chaining concept
const newNum = myNum.map((num) => num*10).map((num) => num+2 ).filter((num) => num>50)

console.log(newNum);
