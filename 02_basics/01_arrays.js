//array

const myArr = [0, 1, 2, 3, 4, 5]
const myFriends = ["Harish", "Anand", "Sishir"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2));

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

//** slice and splice */

console.log("A ", myArr) // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log("sliced arr ", myn1) // sliced arr  [ 1, 2 ]

console.log("B ", myArr) // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("Spliced arr ", myn2) // Spliced arr  [ 1, 2, 3 ]
console.log("C ", myArr) // C  [ 0, 4, 5 ]

//splice manipulates original array while slice donot manipulate 





