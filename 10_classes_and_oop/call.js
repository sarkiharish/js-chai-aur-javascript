function setUsername(username) {
    //complex db calls 😀😀
    this.username = username
    console.log('called')
}

function createUser(username, email, password) {
    setUsername.call(this, username)

    this.email = email;
    this.password =password;
}

const hari = new createUser('harish', 'haris@gmail.com', 123)
console.log(hari)