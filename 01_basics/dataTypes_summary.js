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

console.log(typeof anotherId);         //symbol

// console.log(id === anotherId);      //false
// console.log(id == anotherId);       //false

const bigNumber = 1123343546576n;

console.log(typeof bigNumber);      //bigint



/* Non-Primitive(Reference) ---->
    Arrays, Objects, Functions
*/

const heroes = ["IronMan" , "Thor" , "Captain America" , "Hulk"];

console.log(typeof heroes);      // heroes

let myObj = {
    name : "Shivank",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction);
console.log(typeof myFunction);      //function


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