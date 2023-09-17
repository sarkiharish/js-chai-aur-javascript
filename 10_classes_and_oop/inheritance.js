class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse() {
        console.log(`A new Course was added by ${this.username}`)
    }
}

const hari = new Teacher("Hari", 'hari@teacher.com', 123)
hari.addCourse()

const pari = new User('Papa ki pari')
pari.logMe()