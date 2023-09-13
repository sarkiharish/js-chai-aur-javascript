//for of


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(`Value is ${num}`)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`char is ${greet}`)
}

const map = new Map();
map.set("in", "India")
map.set("np", "Nepal")
map.set("us", "USA")

// console.log(map)

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
    
}

const myObj = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(`${key} :- ${value}`)
// }