/* 
    Operators ~  > , < , >= , <= , == , != , === , !==
    -> in case of === we not only compare values but also compare datatypes of values.
*/

// *********   if    *********

// if(2 == "2"){                                    //true
//     console.log("executed");            
// }

// if(2 === "2"){                                      //false (typeof 2 is not same)
//     console.log("executed");
// }


// const temp = 40;

// if(temp <= 50){
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }


// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }


// const balance = 500;
// if(balance < 1000)  console.log("correct") , console.log("correct2");
//we can run multiple statement of code in if-else without using scope or curly braces 
//but they must be separated by comma(,)
// but this is not preffered (don't do this).


// const game = 600;
// if(game < 200)  console.log("less than 200");
// else if(game < 300)     console.log("less than 300");
// else if(game < 500)     console.log("less than 500");
// else console.log("more than 500");
//else will run


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && (loggedInFromGoogle || loggedInFromEmail)){
    console.log("Allow to buy products");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

