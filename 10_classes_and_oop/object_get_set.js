const User = {
    _email:'hari@irah.com',
    _password: 'hsaljfk;a',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value
    }
}

const hari = Object.create(User)
console.log(hari.email)