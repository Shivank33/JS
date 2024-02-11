/* Primitive Datatypes ---->
   7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
*/

const score = 100;
const scoreval = 200.5;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;       // or  let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(typeof anotherId);         //symbol

// console.log(id === anotherId);      //false
// console.log(id == anotherId);       //false

const bigNumber = 1123343546576n;

// console.log(typeof bigNumber);      //bigint



/* Non-Primitive(Reference) ---->
    Arrays, Objects, Functions
*/

const heroes = ["IronMan" , "Thor" , "Captain America" , "Hulk"];

// console.log(typeof heroes);      // heroes

let myObj = {
    name : "Shivank",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(myFunction);
// console.log(typeof myFunction);      //function


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// *************************************
//      Stack (Primitive) , Heap (Non-Primitive)

let myName = "ShivankChaudhary";

let anotherName = myName;
anotherName = "VishuChaudhary";

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "userOne@gmail.com",
    upi : "userOne@upi.com"
}

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// Stack ---> changes are made to copied value, original value remains same.
// Heap ---> changes are made to real value.