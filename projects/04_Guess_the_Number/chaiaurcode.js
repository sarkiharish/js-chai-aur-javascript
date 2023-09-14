let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

const validateGuess = (guess) => {
    if(isNaN(guess)) {
        alert(`Please enter a valid number.`)
    } else if ( guess < 1) {
        alert(`Please enter a number more than 1`)
    } else if(guess > 100) {
        alert(`Please enter a number less than 100`)
    } else {
        prevGuess.push(guess)
        if(numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Guessed Number is low. Try Again!`)
    } else {
        displayMessage(`Guessed Number is high. Try Again!`)
    }
}

const displayGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}