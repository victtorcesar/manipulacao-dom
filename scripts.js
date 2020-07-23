let inputElement = document.querySelector("input")
let buttonElement = document.querySelector("form button")

let ulElement = document.querySelector("ul")



buttonElement.onclick = e => {
  e.preventDefault()

  if (inputElement.value) {

    const liTextElement = document.createElement('span')
    liTextElement.innerHTML = inputElement.value

    const buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'Remover'


    const liElement = document.createElement('li')
    liElement.appendChild(liTextElement)
    liElement.appendChild(buttonRemove)

    buttonRemove.onclick = () => {
     ulElement.removeChild(liElement)
    }

    ulElement.appendChild(liElement)
    inputElement.value = ""
  }
}
