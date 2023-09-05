const accountId = 123456789
let accountEmail = "hari@gmail.com"
var accountPassword = "hari123"
accountCity = "MNR"
let accountState;

// accountId=7 => NOT ALLOWED

/*
Prefer not use var
because of the issue in block scope and function scope.
*/

accountEmail = "harish@google.com"
accountPassword = "H@ri456"
accountCity = "DHN"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);