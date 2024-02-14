// **********   for in loop   ************ 
// it is basically used to print keys directly (we can print both also).

const myObject ={
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby"
}

for (const key in myObject) {
    // console.log(key);                   //Print all keys
}

for (const key in myObject) {
    // console.log(myObject[key]);                   //Print all values
}

//Different thing
// for (const [key , values ,power] in myObject) {
//     console.log(key + " : " + values + " : " + power);              
// }
//j : s : undefined          c : p : p           p : y : undefined          r : b : undefined

const product = ["laptop" , "pc" , "mobile" , "tablet"];

for (const key in product) {
    console.log(key);                           // 0      1      2      3       (Print all keys)
}

for (const key in product) {
    console.log(product[key]);                   // laptop     pc     mobile     tablet     (Print all values)
}

// for-in loops are not able to iterate maps. 