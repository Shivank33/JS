const accountId = 1000;
let accountEmail = "shivank@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";        // It will not give error but preferred way is to define all variables.
let accountState;

// accountId = 2000;   //Not Allowed

accountEmail = "shivank@shivank.com";
accountPassword = "54321";
accountCity = "Delhi";
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue of block scope and functional scope
*/