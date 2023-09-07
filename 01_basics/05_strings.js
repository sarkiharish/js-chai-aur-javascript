const name = "Harish"
const repoCount = 50

// console.log(name + repoCount + " Value")  //earlie way

//modern way using back ticks:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Harish-sk-com")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "          Harish        "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hari.com/hari%20sarki"
console.log(url.replace("%20", '-'))

console.log(url.includes("hari"))
console.log(url.includes("Nari"))

console.log(gameName.split('-'))