//    Immediately Invoked Function Expression (IIFE)

// function cricket(){
//     console.log("All out");
// }
// cricket();       // All out

// (function cricket(){
//    // named iife
//     console.log("All out");                 // All out
// })();

// const cricket = () => {
//     console.log("All out");
// }
// cricket();                                     // All out

( () => {
    console.log("All out");                       // All out
})();

( (playerName) => {
    console.log(`All out , ${playerName}`);                       // All out , Kohli
})("Kohli");
