const marvel_heroes = ["ironman" , "thor" , "hulk"];

const dc_heroes = ["flash" , "superman" , "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);                   //[ 'ironman', 'thor', 'hulk', [ 'flash', 'superman', 'batman' ] ]
// console.log(marvel_heroes[3][1]);             // superman

const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);                        // [ 'ironman', 'thor', 'hulk', 'flash', 'superman', 'batman' ]

const all_new_heroes = [...marvel_heroes , ...dc_heroes];
// console.log(all_new_heroes);                                    
//Expected output-> [ 'ironman', 'thor', 'hulk', 'flash', 'superman', 'batman' ]

const another_array = [ 1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 , 8 , [ 9 , 10 , 11 , [ 12 , 13 ] ] ];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);        //Simplifies all arrays into one.

console.log(Array.isArray("Shivank"));      //Shivank is not present in array. So returns false. 
console.log(Array.from("Shivank"));         // ['S','h','i','v','a','n','k']
console.log(Array.from({name:"Shivank"}));  // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2, score3));     // [ 100, 200, 300 ]
