const myObj = {
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    java:"Java"
}

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`)
}

const programming = ['js', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key])
}


//NOTE: for map forin loop is not applicable as its not iterable
const map = new Map();
map.set("in", "India")
map.set("np", "Nepal")
map.set("us", "USA")

for (const key in map) {
    console.log(key)
}