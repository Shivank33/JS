//   **********   reduce    **********

// const myArray = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = myArray.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);

// console.log(sumWithInitial);                // 10

// const myNums = [1 , 2 , 3];

// const myTotal = myNums.reduce(function (acc , currval) {
//     return (acc + currval);
// }, 0 );                                                      // -> using function

// const myTotal = myNums.reduce((acc , currval) => acc + currval , 0);
// // here 0 is initial value, at starting acc takes value from initial value 
// // and they do work and store value in acc for next step.
// // currval is value from array at each indexes.

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Jeans",
        price : 1000
    },
    {
        itemName : "Shirt",
        price : 700
    },
    {
        itemName : "Shoes",
        price : 2000
    },
    {
        itemName : "Mobile",
        price : 20000
    },
    {
        itemName : "Laptop",
        price : 50000
    }
];

// const totalPrice = shoppingCart.reduce((acc , currval) => acc + currval.price , 0);

// console.log(totalPrice);

