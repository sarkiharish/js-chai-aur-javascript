//reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currVal){
//     return acc + currVal
// }, 0)


const myTotal = myNums.reduce((acc, currVal) => acc+currVal, 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName:'js',
        price:2999
    },
    {
        itemName:'py',
        price:999
    },
    {
        itemName:'mobile dev ',
        price:5999
    },
    {
        itemName:'Data science1 ',
        price:12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(totalPrice)