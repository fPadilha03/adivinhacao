const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}
let randomNumber = getRandomNumber()

const guessBtn = document.getElementById('guess-btn')
const guessInput = document.getElementById('guess-input')
const message = document.getElementById('message')
const attempts = document.getElementById('attempts')
const reloadBtn = document.getElementById('reload-btn')

let userAttempts = 0

guessBtn.addEventListener('click', () => {
    let userGuess = Number(guessInput.value)

    userAttempts++

    if(userGuess === randomNumber) {
        message.innerHTML = `Parabéns! Você acertou o número <strong>${randomNumber}</strong> em <strong>${userAttempts}</strong> tentativas!`
        message.style.color = 'green'
    } else if(userGuess < randomNumber) {
        message.innerHTML = `Tente um número <strong>maior</strong>`
        message.style.color = 'red'
    } else {
        message.innerHTML = `Tente um número <strong>menor</strong>`
        message.style.color = 'red'
    }
})

reloadBtn.addEventListener('click', () => {
    reloadBtn.classList.remove('reload-btn-clicked')
    reloadBtn.offsetWidth
    reloadBtn.classList.add('reload-btn-clicked')

    message.innerHTML = ''
    userAttempts = 0

    randomNumber = getRandomNumber()
})