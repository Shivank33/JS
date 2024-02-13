function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("K");
}

/*
sayMyName            ---> Reference
sayMyName();          ---> Execution
*/

// sayMyName();

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}

// addTwoNumbers(3 , 7);       //10
// addTwoNumbers(3 , "7");     //37
// addTwoNumbers(3 , "a");     //3a
// addTwoNumbers(3 , null);    //3

// const result = addTwoNumbers(7 , 8);        //15
// console.log(result);                        //undefined

function addTwoNumbers2(number1 , number2){
    let result2 = number1 + number2;
    return result2;
}

const result2 = addTwoNumbers2(7 , 8);       
// console.log("Result :" , result2);              //Result : 15

function addTwoNumbers3(number1 , number2){
    return (number1 + number2);
}
const result3 = addTwoNumbers3(10 , 20);
// console.log("Result is " , result3);            //Result is 30

// Nothing will work after return statement.

function loginUserMessage(userName) {               
    return `${userName} just logged in`;
}
//(userName = "Stark") --> now default value of username is Stark for no value is given,
//value will automatically become Stark and if value is given then it will override Stark.

// console.log(loginUserMessage("Shivank"));           // Shivank just logged in

// console.log(loginUserMessage());                    // undefined just logged in
// When arguments are not passed then undefined is returned by default.

// function loginUserMessage2(userName2) {
//     if(userName2 === undefined){           // or-->  if(!userName)
//         console.log("Please enter userName");
//         return;
//     }
//     return `${userName2} just logged in`;
// }
// console.log(loginUserMessage2());           //Please enter userName        undefined


// **** Rest ****

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400));           // [ 100, 200, 300, 400 ]
//Here num1 = [ 100, 200, 300, 400 ]


// function calculateCartPrice(val1 , val2 , ...num1){
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400));           // [ 300, 400 ]
// //Here val1 = 100, val2 = 200, num1 = [300,400]


// const product = {
//     name : "laptop", 
//     price : 50000
// }

// function objectHandler(anyObject) {
//     console.log(`Name of product is ${anyObject.name} and its price is ${anyObject.price}`);
// }

// objectHandler(product);



// const myArray = [200 , 400 , 600 , 800];

// function returnSecondValue(value) {
//     return myArray[value];
// }

// const answer = returnSecondValue(1);
// console.log(`The answer is ${answer}`);      //The answer is 400


const myArray = [200 , 400 , 600 , 800];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));        // 400
console.log(returnSecondValue([200 , 400 , 600 , 800]));            // 400

