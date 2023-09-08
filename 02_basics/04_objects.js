// const tinderUser = new Object() //=> singleton
const tinderUser = {}

tinderUser.id = "123hsk"
tinderUser.name = "Hari"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@regular.com",
    fullName:{
        userFullName: {
            firstName: "Harish",
            lastName: "sarki"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:'a', 2: 'b'}
const obj2 = {3:'a', 4: 'b'}
const obj3 = {5:'a', 6: 'b'}

const comboAssignObj = Object.assign({}, obj1, obj2, obj3)
// console.log(comboAssignObj)

const comboSpreadObj = {...obj1, ...obj2, ...obj3}
// console.log(comboSpreadObj)

const users = [
    {
        id:1,
        name:"Hari"
    },
    {
        id:2,
        name:"Nari"
    },
]

// console.log(users[1].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
    courseName: "Javascript in Hindi",
    courseFee: 999,
    courseInstructor:"H Choudhary"
}

const {courseInstructor : instructor} = course;
// console.log(courseInstructor)
console.log(instructor);