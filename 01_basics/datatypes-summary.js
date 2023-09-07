// PRIMITIVE : => String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 6541622222663254984684n


// Non Primitive (Reference): =>  Array, Objects, Functions

const friends = ["Harish", "Sishir", "Anand"]

const myOBj = {
    name: 'Harish',
    age: 22
};

const myFunc = function() {
    console.log("Hi Harish")
}


/* 
typeOf null => object
typeof undefiend => undefined
typeof boolean => boolean
typeof number => number
typeof string => string

(all non primitives typeof will return function)
typeof function => function i.e. object function
typeof array, object => obj / function

*/

// console.log(typeof myOBj)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
MEMORY IN JAVASCRIPT:
1.Stack => all the primitive types are stored => here copy of the variable is given
2.Heap => Non primitive types are stored => here reference of the actual value is given

*/

let myName = "Harish"
let anotherName = myName

anotherName = "Hari"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: 'hari@gmail.com',
    upi: 'hari@okicici'
}

let userTwo = userOne
userTwo.email='harish@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)