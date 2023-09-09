let a = 100
// const b =20
// var c = 300 => NEVER USE Var

if(true) {
    let a = 10
    const b =20
    var c = 30
    console.log("Inner ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const userName = "Harish" 

    function two() {
        const website = 'YOutube'
        console.log(userName)
    }

    // console.log(website)

    two()
}

one()

if(true) {
    const username = "Harish"
    if(username === 'Harish') {
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


console.log(addOne(5))

function addOne(num) {
    return num + 1;
}

// adddTwo(3)

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5))