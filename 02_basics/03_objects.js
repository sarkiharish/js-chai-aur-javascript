//singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Harish",
    "full Name":"Harish sarki",
    [mySym]: "mykey1",
    age: 22,
    location: "Jhalari",
    email: "hari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "harish@company.com"
// Object.freeze(JsUser)
JsUser.email = "harish@newcom.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());