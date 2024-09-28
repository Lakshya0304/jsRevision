const accountId  = 12345 
let accountEmail = "lakshya@gmail.com"
var accountPassword = "123123"
accountCity = "Udaipur"
let accountState ; //If we doesn't assign the value to the javascript it default assign as undefined

// accountId = 1357 this line gives us error because const can't let you to change you predefined value 
console.log(accountId);

accountEmail = "Ankish@gamil.com"
accountPassword = "9876"
accountCity = "Jaipur"

console.table([accountId , accountEmail, accountPassword , accountCity , accountState])