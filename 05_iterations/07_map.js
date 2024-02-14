// **********   map   ***********
// similar to filter method.
//returns value itself.
// return must be used if using curly braces.

const myNumbers = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];

// const newNumbers = myNumbers.map((num) => num + 5);

// console.log(newNumbers);

//same using for-each loop instead of map

// const newNums = [];
// myNumbers.forEach((item) => {
//     newNums.push(item+5);
//     if(item === 100){
//         console.log(newNums);
//     }
// });
// [15, 25, 35, 45,  55, 65, 75, 85, 95, 105]

// this is chaining 
// const newNumbers = myNumbers.map((num) => num * 10).map((num) => num + 7);
// console.log(newNumbers);
// [107, 207, 307, 407, 507, 607, 707, 807, 907, 1007]

const newNumbers = myNumbers.map((num) => num * 10)
                            .map((num) => num + 7)
                            .filter((num) => num >= 500);
console.log(newNumbers);

