// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5) {
//         console.log("5 is best")
//     }
//     console.log(element)
    
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication of ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)   
//     }
    
// }


let myArr = ["Ram", "shyam", "Hari"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}

// break and continue

for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log('5 detected')
        break;
    }
    console.log(`value of index is : ${index}`)
    
}

for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log('5 detected')
        continue
    }
    console.log(`value of index is : ${index}`)
    
}