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

// console.log("RESULT : ", result)

function loginUserMessage(userName) {
    if(userName){
        return `${userName} just logged in.`
    }
    return `Please enter username!`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Harish"))


function calculateCartPrice(...nums) {
    return nums
}

// console.log(calculateCartPrice(100, 200, 500, 2000))

const user = {
    userName:"Harish",
    price: 199
}

function handleAnyObject(anyObj) {
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`)
}

handleAnyObject(user)

handleAnyObject({
    userName:'Ram',
    price:399
})

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(anyArr) {
    return anyArr[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400, 500]))