const score = 500;
// console.log(score);

const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);                //object

// console.log(balance.toString().length);         //4
// console.log(balance.toFixed(2));        //2 values after decimal

const otherNumber = 498.28998;
// console.log(otherNumber.toPrecision(4));        //precise values from left side.

const num = 10000000;
// console.log(num.toLocaleString());          //By default US standard
// console.log(num.toLocaleString('en-IN'));   //In Indian Standard


// ***********************   MATHS    *********************

// console.log(Math);

// console.log(Math.abs(-20));         //convert negative values into positive values --> 20

// console.log(Math.round(23.43));     //Returns round off value  --> 23

// console.log(Math.round(23.73));     //Returns round off value  --> 24

// console.log(Math.ceil(4.3));        //Returns next value --> 5

// console.log(Math.floor(4.8));       //Returns value before point --> 4

// console.log(Math.sqrt(25));         //Returns square root --> 5

// console.log(Math.pow(7, 3));        // Takes number and its power(2 values)   Returns power --> 343

// console.log(Math.pow(7, -2));       // Expected output: 0.020408163265306124  or  (1/49)

// console.log(Math.pow(-7, 0.5));     // Expected output: NaN

// console.log(Math.min(2,5,7,8,9,1));     //Returns min value from given values --> 1

// console.log(Math.max(2,5,7,8,9,1));     //Returns max value from given values --> 9

console.log(Math.random());             //Generates any random value between 0 and 1.

console.log(Math.floor(Math.random()*10 + 1));      //To generate integer value between 1 and between

const min = 20;
const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);     
//Always returns value between 20 and 50 (max and min)