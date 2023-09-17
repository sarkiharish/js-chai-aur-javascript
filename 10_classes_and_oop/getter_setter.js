class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}123%456`;
    }

    set password(value) {
        this._password = value
    }
    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value
    }
}

const hari = new User('hari@nari.com', 123)
console.log(hari.password)
console.log(hari.email)