//   *****************    while loop    *******************

// let index = 1;
// while(index <= 5){
//     console.log(`Index value is ${index}`);
//     index++;
// }

// let myArray = ["Cricket" , "Football" , "Kabaddi" , "Hockey" , "Gymnastics"];

// let i = 0;
// while(i < myArray.length){
//     console.log(`value at ${i} index is ${myArray[i]}`);
//     i++;
// }


//   **********************   do - while    ***********************

// let i = 1;
// do{
//     console.log(`Value of i is ${i}`);
//     i++;
// }while(i <= 5);

let indoorGames = ["Chess" , "Carrom" , "Ludo" , "Snake_Ladder"];

let i=0;
do{
    console.log(`value at ${i} index is ${indoorGames[i]}`);
    i++;
}while(i < indoorGames.length);

//do - while loop will atleast run once before checking the condition.
//while loop will run only after checking the condition. 