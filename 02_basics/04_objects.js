// const instaUser = new Object();              //singleton object

const instaUser = {};                           //non-singleton object

instaUser.id = "shivank000";
instaUser.name = "shivank";
instaUser.isLoggedIn = true;
// console.log(instaUser);

const fbUser = {
    email : "any@gmail.com",
    contact : 1234567890,
    fullName : {
        userName :{
            firstName : "Shivank",
            lastName : "Chaudhary"
        }
    }
}
// console.log(fbUser.fullName.userName.firstName);        //Shivank

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};

// const obj3 = {obj1 , obj2};                     // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = {...obj1 , ...obj2};
// console.log(obj3);                                  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = Object.assign({} , obj1 , obj2);
// console.log(obj4);                                  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 2,
        email : "a@gmail.com"
    },
    {
        id : 3,
        email : "i@gmail.com"
    }
]

// console.log(users[2].email);            //i@gmail.com

// console.log(instaUser);

// console.log(Object.keys(instaUser));        // [ 'id', 'name', 'isLoggedIn' ]
//Returns only keys in an array.

// console.log(Object.values(instaUser));      // [ 'shivank000', 'shivank', true ]
//Returns only values in an array.

// console.log(Object.entries(instaUser));
// [ [ 'id', 'shivank000' ], [ 'name', 'shivank' ],   [ 'isLoggedIn', true ] ]
// Returns array in array of key- value pairs.

// console.log(instaUser.hasOwnProperty('isLoggedIn'));        //true
// console.log(instaUser.hasOwnProperty('address'));           //false


//  ***************  Object de structure  ******************

const course = {
    courseName : "JavaScript",
    price : 999,
    platform : "Youtube"
}

const {platform} = course;
console.log(platform);                  //Youtube

const {courseName : name} = course;
console.log(name);                      //JavaScript
// console.log(courseName);            //Error

// APIs --->
/*
{
    "name" : "Shivank",
    "id" : 20,
    "location" : "Delhi"
}
*/

/*
[
    {},
    {},
    {}
]
*/