import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { notNumber, calculateIMC } from "./utils.js"

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(e) {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightNotNumber = notNumber(weight) || notNumber(height)
    if(weightOrHeightNotNumber){
        alertError.open()
        return;
    }

    alertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessaage(result)
}

function displayResultMessaage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
    
}

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()
