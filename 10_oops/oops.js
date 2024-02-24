const user = {
    username: "shivank",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        //this will print whole user object.
    }

}



console.log(user.username);
console.log(user.getUserDetails());         //undefined
console.log(this);                      // {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("john", 12, true)
const userTwo = new User("charlie", 11, false)
// console.log(userOne.constructor);              //[Function: User]
// console.log(userTwo);
