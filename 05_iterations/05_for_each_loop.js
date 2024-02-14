// ***********   for-each loop   *************

const dress = ["Jeans" , "Shirt" , "Jacket" , "Pant"];

// dress.forEach((val) => {
//     console.log(val);
// });

// dress.forEach(function (val) {
//     console.log(val);
// });

// function printMe(item) {
//     console.log(item);
// }

// dress.forEach(printMe);                 //Not executing only reference giving.

// dress.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// });

//In this way we can access values at each index , all indexes , and whole array.

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
];

myCoding.forEach((item) => {
    console.log(`Language name -> ${item.languageName} and Language File Name -> ${item.languageFileName}`);
});