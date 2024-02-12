// *********************   ARRAYS    ***********************

const myArr = [10,20,30,40,50];

// console.log(myArr);
// console.log(myArr[2]);
// console.log(typeof myArr);           //object

const myArr2 = new Array(60,70,80,90,100);
// console.log(myArr2);
// console.log(typeof myArr2);          //object

//*****************  Array methods ****************

// myArr.push(60);
// myArr.push(70);
// myArr.pop();

// myArr.unshift(5);
// myArr.shift();

// console.log(myArr.includes(15));

// console.log(myArr.indexOf(15));         //Returns -1 because 15 is not present in array
// console.log(myArr.indexOf(30));

const newArr = myArr.join();

// console.log(myArr);                     // [ 10, 20, 30, 40, 50 ]

// console.log(newArr);                    // 10,20,30,40,50
// console.log(typeof newArr);             //string

console.log("A" , myArr);                   // A [ 10, 20, 30, 40, 50 ]
const nextArr = myArr.slice(1,3);           

console.log(nextArr);                       // [ 20, 30 ]
console.log("B" , myArr);                   // // B [ 10, 20, 30, 40, 50 ]

const nextArr2 = myArr.splice(1,3);

console.log(nextArr2);                      // [ 20, 30, 40 ]
console.log("C" , myArr);                   // C [ 10, 50 ]

/*
    Difference between slice and splice is -->
    1. slice does not include second index but splice includes it.
    2. slice does not changes the original array whereas 
       splice removes the selected data between given indexes from original array and changes it.
*/

