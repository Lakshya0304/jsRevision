// for of => array , map 

const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}

//Maps  => Unique values

const map = new Map()
map.set('IN' , "India")
map.set('Jp' , "Japan")
map.set('Gry' , "Germany")
map.set('IN' , "India")
map.set('IN' , "India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key , '=>' , value);
}

// const myObj = {
//     game1 : 'NFS',
//     game2 : 'spiderman'
// }

// for (const key of myObj) {
//     console.log(key);
// }
// myObj is not iterable by for of loop

