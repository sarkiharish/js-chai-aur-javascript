const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter)

// console.log(Math.PI)
// Math.pi = 5
// console.log(Math.PI)  //not possible to overide

const chai = {
    name:'ginger',
    price: 250,
    isAvailable:true,

    orderChai : function() {
        console.log('chai nai bani ')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    // writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, values] of Object.entries(chai)) {
    if(typeof values !== 'function') {
        console.log(`${key} :: ${values}`)
    }
}