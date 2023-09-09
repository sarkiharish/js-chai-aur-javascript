const user = {
    userName : "Harish",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website!`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "Laxmi"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     const userName = "Harish"
//     console.log(this.userName)
// }
// chai()

// const chai = function() {
//     const userName = "Harish"
//     console.log(this.userName)
// }

const chai = () => {
    const userName = "Harish"
    console.log(this)
}
// chai()


// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2  // => expicit return
// }

// const addTwoNumbers = (num1, num2) =>  num1 + num2 // implicit return
const addTwoNumbers = (num1, num2) =>  (num1 + num2) // implicit return

console.log(addTwoNumbers(3, 4))