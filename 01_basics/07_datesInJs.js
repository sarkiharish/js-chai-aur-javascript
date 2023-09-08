// Dates

let myDate = new Date();
// console.log("myDate ",myDate)  // myDate  2023-09-08T04:27:40.674Z
// console.log("toString ",myDate.toString())  // toString  Fri Sep 08 2023 04:27:40 GMT+0000 (Coordinated Universal Time)
// console.log("toDateString ",myDate.toDateString())  // toDateString  Fri Sep 08 2023
// console.log("toISOString ",myDate.toISOString());  // toISOString  2023-09-08T04:27:40.674Z
// console.log("toLocaleDateString ",myDate.toLocaleDateString());  // toLocaleDateString  9/8/2023
// console.log("toLocaleTimeString ",myDate.toLocaleTimeString());  // toLocaleTimeString  4:27:40 AM
// console.log("toTimeString ",myDate.toTimeString());  // toTimeString  04:27:40 GMT+0000 (Coordinated Universal Time)
// console.log("toUTCString ",myDate.toUTCString());  // toUTCString  Fri, 08 Sep 2023 04:27:40 GMT
// console.log("toJSON ",myDate.toJSON());  // toJSON  2023-09-08T04:27:40.674Z
// console.log("toLocaleString ", myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now())
// console.log( Math.floor(Date.now() / 1000) ) //conversion of ms to seconds.


const newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

newDate.toLocaleString("default", {
    weekday:'long'
})