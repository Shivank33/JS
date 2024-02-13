// **************    this    ****************

// const user = {
//     username : "Shivank",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);   
//         //It will give error if this is not used

//         console.log(this);          //returns current object (user)
//     }
// }

// user.welcomeMessage();          //Shivank , welcome to website
// user.username = "Chaudhary";
// user.welcomeMessage();          //Chaudhary , welcome to website

// console.log(this);           
//returns empty object {} (when used in node)
//returns window object (when used in browser)



// ****************** arrow function ********************

// function cricket() {
//     let playerName = "Rohit";
//     //if we declare playerName without let then it will return Rohit.
//     //if we declare playerName with let,const,var then it will return undefined.
//     console.log(this.playerName);
// }
// cricket();

// const cricket = function(){
//     let playerName = "Rohit";
//     console.log(this.playerName);            //undefined
// }
// cricket();

// const cricket = () => {
//     let playerName = "Rohit";
//     console.log(this.playerName);               //undefined
// }
// cricket();


// const addition = (num1 , num2) =>{
//     return num1 + num2;
// }
// console.log(addition(2 , 3));               // 5

//Implicit return (not need to use return if only one statement is given and curly braces are not used).

// const addition = (num1 , num2) => num1 + num2;
// console.log(addition(2 , 3));                 // 5

// const addition = (num1 , num2) => (num1 + num2);
// console.log(addition(2 , 3));                 // 5

const addition = (num1 , num2) => ({username : "Shivank"});
console.log(addition(2,3));                                     // { username: 'Shivank' }

