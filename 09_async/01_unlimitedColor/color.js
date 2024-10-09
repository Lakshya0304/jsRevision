//Generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());

let intervalId 
const startChangingColor = function(){
    function changeColor(){
        document.body.style.backgroundColor = randomColor()
    }
    intervalId = setInterval(changeColor , 1000)
}


const stopChangingColor = function(){
    clearInterval(intervalId)
    document.body.style.backgroundColor = "#212121"
    document.querySelector('h1').style.color = "white"

}
document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)
