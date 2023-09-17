function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function() {
            return this._email.toUpperCase();
        },
        set : function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
            return this._password.toUpperCase();
        },
        set : function(value) {
            this._password = value
        }
    })
}

const hari = new User('hari@ari.com', 'hairs')
console.log(hari._email)
console.log(hari.email)