const userEmail = "h@g.com"

if(userEmail) {
    console.log("Got user email")
} else {
    console.log("no user email found");
}

//Falsy Values => false,  0, -0, null, undefined, NaN, BigInt 0n, ""

//Truthy values => "0", "false", " ", [], {}, function() {}

const usrEmail = []
if(usrEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


//Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1)


//Ternary Operator  => condition ? true : false

const teaCost = 100
teaCost <= 80 ? console.log("less than 80") : console.log("more than 80")


/*
2:13 - why control Flow?
2:54 - if-statement
5:00 - comparison operators
10:20 - "else" keyword
11:40 - difference between "var" & {"let", "const"} regarding scope.
14:42 - Implicit scope
16:17 - suggestion
17:00 - else - if
23:36 - practical use case mentioned
24:33 - switch case statement (useful in redux)
30:12 - "truthy" & "falsy" values.
33:04 - Rules of "truthy" & "falsy" consideration
37:18 - Empty array check
38:10 - Empty object check
41:00 - nullish coalescing operator 
42:25 - significance of "??" operator
46:00 - confusion warning!!
48:25 - summary
*/ 