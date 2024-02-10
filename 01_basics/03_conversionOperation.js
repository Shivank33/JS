let score = "33";

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);


let score2 = "33abc";

// console.log(typeof score2);

let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);


let score3 = null;

// console.log(typeof score3);

let valueInNumber3 = Number(score3);
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);


let score4 = undefined;

// console.log(typeof score4);

let valueInNumber4 = Number(score4);
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);

/*
"33" => 33
"33abc" => NaN(Not a Number)
true => 1;  false => 0;
null => 0;
undefined => NaN
*/


let isLoggedIn = "Shivank";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

/*
1 => true ; 0 => false;
"Shivank" => true
"" => false
*/


let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************Operations****************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%3);

let str1 = "Shivank";
let str2 = " Chaudhary";

let str3 = str1 + str2;             //String concatenation
// console.log(str3);            //Shivank Chaudhary   

// console.log("1" + 2);        //12
// console.log(1 + "2");        //12
// console.log("1" + 2 + 2);    //122
// console.log(1 + 2 + "2");    //32
// console.log(("1" + 2) + 2);  //122
// console.log(1 + (2 + "2"));  //122

// console.log(true);        //true
// console.log(+true);       //1
// // console.log(true+);    // Error
// console.log("");          //Space
// console.log(+"");         //0
// console.log(false);       //false
// console.log(+false);      //0

//Increment operator
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// Link to study--->
// https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-toprimitive
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment