const form = document.querySelector('form')

form.addEventListener('submit' , function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results') 

    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    results.innerHTML = `<span>${bmi}</span>` ;

    const weightRange = bmi
    const h2 = document.createElement('h2')

    if(weightRange < 18.6){
        h2.appendChild(document.createTextNode(`Under Weight`))
        document.querySelector('#weight-guide').appendChild(h2)
    }else if(weightRange> 18.6  && weightRange < 24.9){
        h2.appendChild(document.createTextNode(`Normal Range`))
        document.querySelector('#weight-guide').appendChild(h2)
    }else{
        h2.appendChild(document.createTextNode(`Over Weight`))
        document.querySelector('#weight-guide').appendChild(h2)
    }
})