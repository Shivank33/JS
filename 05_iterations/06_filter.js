// const cities = ["Delhi" , "Mumbai" , "Kolkata" , "Pune" , "Chennai"];

// const answer = cities.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(answer);             //undefined (return value of answer).


//  ************   filter  *************
// for each does not return any value.
// filter method returns values.

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// const newNums  = myNums.filter((num) => num > 4);
// console.log(newNums);                           // [ 5, 6, 7, 8, 9, 10 ]

// const newNums  = myNums.filter((num) => { 
//     return num > 4; 
//     //return must be used compulsarily otherwise it will return empty object i.e. {}.
// });
// console.log(newNums);

// Same using for each instead of filter -->

// const newNums = [];
// myNums.forEach((item) => {
//     if(item > 4){
//         newNums.push(item);
//     }
// });

// console.log(newNums);                   // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((item) => item.genre === "History");

const userBooks = books.filter((val) => val.publish > 1990 && val.genre === "History");

  console.log(userBooks);