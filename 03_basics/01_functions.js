function sayMyName() {
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    return (number1 + number2)
}

const result = addTwoNumbers(3, 5)

console.log("RESULT : ", result)

function loginUserMessage(userName) {
    if(userName){
        return `${userName} just logged in.`
    }
    return `Please enter username!`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Harish"))