//     *************  for of loop   **************

// const arr = [1 , 2 , 3 , 4 , 5];

// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "Hello World!";
// for (const val of greetings) {
//     console.log(val);
// }




// ******** Map *********
const myMap = new Map();
myMap.set("IN" , "India");
myMap.set("FR" , "France");
myMap.set("JPN" , "Japan");
myMap.set("IN" , "India");               //this pair is already available so it will not enter in map.
// console.log(myMap.size);              // 3
// console.log(myMap);

// for(const [key ,value] of myMap){
//     console.log(key);                     // IN    FR    JPN    (Print all keys).
// }                                      

// for(const key of myMap){
//     console.log(key);                     // print whole map.
// }

// for(const [key ,value] of myMap){
//     console.log(value);                     // India    France    Japan        (Print all values).                        
// }

//map does not allow duplicate values(all values entered are unique).
// map provides the order of insertion.(values are available in order of insertion).

// const myObject = {
//     game1 : "NFS",
//     game2 : "Vice City",
//     game3 : "IGI"
//  }

//  for (const {key , value} of myObject) {
//     console.log(val);
//  }
// for of loops are not able to iterate on objects.    ( myOject is not iterable).

