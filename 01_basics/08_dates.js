let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

const newdate = new Date()
newdate.toLocaleString("default" , {
    weekday : "long"
})

console.log(newdate)
