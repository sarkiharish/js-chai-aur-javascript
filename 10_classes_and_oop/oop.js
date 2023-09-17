//Object literal
const user = {
    username: "Harish",
    loginCount: 7,
    signedIn : true,

    getUserDetails: function getUsr() {
        // console.log("Fetched users from database!")
        console.log(this.username)
    }
}

console.log(user.username)
console.log(user.getUserDetails())


//constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
}

const userOne = new User("Harish", 15, true)
const userTwo = new User("Naresh", 7, false)

console.log(userOne)
console.log(userTwo)