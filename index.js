function returnLargestValue(event){
    
    event.preventDefault()

    const num1 = event.target.num1.valueAsNumber
    const num2 = event.target.num2.valueAsNumber
    const largest = undefined

    if(num1 > num2){
        largest = num1
    } else {
        largest = num2
    }

    const h2 = document.querySelector('h2')
    h2.innerText = largest
}

const form = document.querySelector('form')
form.addEventListener('submit', returnLargestValue)