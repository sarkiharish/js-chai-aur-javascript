// if

const temperature = 41

// if(temperature < 50) {
//     console.log("temp. is less than 50")
// } else {
//     console.log("temp. is greater than 50")
// }

// console.log("executed")

// < , > , <=, >=, ==, !=, ===, !===


const score = 200

// if(score > 100) {
//     const power = 'fly'
//     console.log(`User's power : ${power}`)
// }
// console.log(`User's power : ${power}`)


const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log('less than 1200')
// }
   

const isUserLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInWithEmail = true

if(isUserLogged && debitCard) {
    console.log("Allow to buy");
}

if(loggedInFromGoogle || loggedInWithEmail) {
    console.log("Allow to login");
}