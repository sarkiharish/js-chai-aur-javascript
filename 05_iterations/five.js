//forEach

//["","",""]
//[{},{},{}]


const programming = ["js", 'ruby', 'python', 'java', 'cpp']

programming.forEach( function (val) {
    // console.log(val)
})

// programming.forEach( (item) => { console.log(item)})

// function printMe(item) {
//     console.log(item)
// }

// programming.forEach(printMe)

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })



const myCoding = [
    {
        programmingLanguage:'Javascript',
        programmingFile : 'js'
    },
    {
        programmingLanguage:'Java',
        programmingFile : 'java'
    },
    {
        programmingLanguage:'Python',
        programmingFile : 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.programmingLanguage)
})