/*
let a = 10;
const b = 20;
var c = 30;

console.log(a);      //10
console.log(b);      //20
console.log(c);      //30
*/


/*
let a = 10;
const b = 20;
var c = 30;
if(true){
    let a = 100;
    const b = 200;
    var c = 300;
    console.log(`Inner : ${a}`);         //100
    console.log(`Inner : ${b}`);         //200
    console.log(`Inner : ${c}`);         //300
}
console.log(a);         //10
console.log(b);         //20
console.log(c);         //300
*/


/*
function one(){
    const username = "Shivank";
    function two(){
        const address = "Delhi";
        console.log(username);
    }
    // console.log(address);        //Error scope of address is inside function two.
    two();
}
one();
*/


/*
if(true){
    const username = "Shivank";
    if(username === "Shivank"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);         //Error website is not defined (scope of website)
 }
// console.log(username);            //Error username is not defined (scope of website)
*/

// ~~~~~~~~~~~   Interesting   ~~~~~~~~~~~~            (Mini Hoisting)

/*
function addOne(num) {
    return num + 1;
}

console.log(addOne(3));         // 4
*/

/*
console.log(addOne(3));         // 4            ---> No error

function addOne(num) {
    return num + 1;
}
*/

/*
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(3));         //5
*/

/*
console.log(addTwo(3));
const addTwo = function(num){
    return num + 2;                     //This will give an error. (Cannot access 'addTwo' before initialization) 
}
*/