// ES^6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }

// }

// const hari = new User("Hari", 'hari@fari.com', 123)
// console.log(hari)
// console.log(hari.encryptPassword())
// console.log(hari.changeUserName())


//behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const nari = new User("Nari", 'nari@fari.com', 456)
console.log(nari)
console.log(nari.encryptPassword())
console.log(nari.changeUserName())