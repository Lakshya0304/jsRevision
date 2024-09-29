const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(2));

const x = 123.37
console.log(x.toPrecision(4))

const num = 10000000
console.log(num.toLocaleString('en-IN'));


//Math library
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

min = 1
max = 6
console.log(Math.floor(Math.random()*(max-min+1)) + min);   //To get the number in-between the range

