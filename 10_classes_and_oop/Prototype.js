// let myName = "Harish    "
// let channelName = "Chai aur    "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: 'hammer',
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.harish = function() {
    console.log(`Harish is present in all objects`)
}

Array.prototype.heyHarish = () => console.log(`Harish says hello!`)

// heroPower.harish()
// myHeros.harish()
// myHeros.heyHarish()
// heroPower.heyHarish()


//inheritance
const User = {
    name: 'hari',
    email: 'hari@chaiaurcode.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
"Harish".trueLength()
'teayacoffe'.trueLength()