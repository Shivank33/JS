// Type 1
let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// Type 2
let score2 = "33abc";

console.log(typeof score2);

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// Type 3
let score3 = null;

console.log(typeof score3);

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// Type 4
let score4 = undefined;

console.log(typeof score4);

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

/*
"33" => 33
"33abc" => NaN(Not a Number)
true => 1;  false => 0;
null => 0;
undefined => NaN
*/


let isLoggedIn = "Shivank";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/*
1 => true ; 0 => false;
"Shivank" => true
"" => false
*/


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);