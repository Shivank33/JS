// **************        For Loop        ****************

// for(let i =1; i<=10; i++){
//     const element = i;
//     if(element == 5 ){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(element);        //Error not reachable


// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop ${i}`);
//     for(let j = 1; j <= 5; j++){
//         console.log(`Inner loop ${i} and ${j}`);
//     }
    
// }


// const myArr = ["ironman" , "superman" , "batman" , "hulk" , "thor"];

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }


// ***********     break and continue    ************

// for(let i = 1; i <= 10 ; i++){
//     if(i == 5){
//         console.log(`${i} has arrived`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

for(let i = 1; i <= 10 ; i++){
    if(i == 5){
        console.log(`${i} has arrived`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}

