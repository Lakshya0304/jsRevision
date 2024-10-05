
const buttons = document.querySelectorAll('.button');
console.log(buttons)

const backgroundBodyColor = document.querySelector('body')
console.log(backgroundBodyColor);


buttons.forEach( function (button) {
    console.log(button);
    
    button.addEventListener('click' , function(e){
        // console.log(e);
        // console.log(e.target);
        
        // if(e.target.id === "grey"){
        //     backgroundBodyColor.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "white"){
        //     backgroundBodyColor.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "blue"){
        //     backgroundBodyColor.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "yellow"){
        //     backgroundBodyColor.style.backgroundColor = e.target.id
        // }

        backgroundBodyColor.style.backgroundColor = e.target.id

    })
})