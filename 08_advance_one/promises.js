const promiseOne = new Promise((resolve, reject) => {
    //Do any async task
    //DB calls, Cryptography, Network calls etc..
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve()
    },1000)
    
})

promiseOne.then(()=>{
    console.log("Promise Consumed!")
})


//another way

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved!")
})

//third promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({name:"Harish", email:"hari@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

//Fourth promise
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({userName:'Harish', password:'123456789'})
        } else {
            reject("ERROR : Something went wrong!")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("The Promise is either resolved or rejected!"))

//Fifth promise

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({userName:'jsUser', password:'Javascript46'})
        } else {
            reject("ERROR : JS went wrong!")
        }
    }, 1000);
});

async function consumePromeseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

//https://jsonplaceholder.typicode.com/users
async function fetchAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("E : ", error)
    }
}

fetchAllUsers();

//same like above method with .then and .catch
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => {
return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error) => console.log(error))