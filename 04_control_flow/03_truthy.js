/*                  falsy values
    false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
 */

/*                  truthy values
    "0" , "false" , " " , [] , {} , function(){}
*/


// const userEmail = [];

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


// const emptyObject = {};

// if(Object.keys(emptyObject.length === 0)){
//     console.log("Object is empty");
// }

// console.log(false == 0);         //true
// console.log(false == "");        //true
// console.log(0 == "");            //true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;                 //5
// val1 = null ?? 10;              //10
// val1 = undefined ?? 15;         //15
// val1 = null ?? 10 ?? 15;        //10
// val1 = undefined ?? null;       //null
// val1 = null ?? undefined;       //undefined
// console.log(val1); 


// ********   Ternary Operator   ********
// condition ? true : false

const batPrice = 1000;
batPrice >= 800 ? console.log("less than 800") : console.log("more than 800");
