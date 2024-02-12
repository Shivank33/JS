// singleton
// Object.create

//object literals

const mySym = Symbol("myKey");

const newUser = {
    name : "Shivank",
    "full Name" : "Shivank Chaudhary",
    [mySym] : "myKey1",                             //Adding symbol in object using square brackets
    age : 20,
    location : "Ghaziabad",
    email : "shivank@google.com",
    isLoggedIn : false,
    lastLogginDays : ["Sunday" , "Wednesday" , "Friday"]
}

// console.log(newUser.name);              //Shivank
// console.log(newUser["name"]);           //Shivank

// console.log(newUser["full Name"]);      //Shivank Chaudhary

/*
 console.log(newUser.full Name);
 Here full Name cannot be accessed using newUser.full Name 
because -> there is space in full Name
*/

// console.log(newUser[mySym]);            //myKey1

// console.log(newUser);
newUser.location = "Delhi";
// console.log(newUser);           
// we can easily change values using . method

// Object.freeze(newUser);         //Object is freezed
// newUser.location = "Noida";
// console.log(newUser); 
// When object is freezed values cannot be changed

newUser.hello = function () {
    console.log("Hello World");
}
newUser.hello2 = function () {
    console.log(`Hello World , I am ${this.name}`);             
}

console.log(newUser);
console.log(newUser.hello());               //Hello World       (undefined)
console.log(newUser.hello2());              // Hello World , I am Shivank       (undefined)
