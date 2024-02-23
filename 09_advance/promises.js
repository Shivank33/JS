/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
 */


//   Promise one
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log('This is promise one');
//         resolve();
//     }, 2000);
// });

// promiseOne.then(()=>{
//     console.log('Promise One is resolved');
// })


//   Promise two
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("This is promise two");
//         resolve();
//     },2000);
// }).then(function(){
//     console.log("Promise Two is resolved");
// });


//  Promise Three

// const promiseThree = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('This is promise three');
//         resolve({username:"Shivank" , email : "shivank@google.com" , id : 100});
//     },2000);
// });

// promiseThree.then((user)=>{
//     console.log(user);
// })


//   Promise Four

// const promiseFour = new Promise((resolve , reject) =>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username: 'John' , email:'john@gmail.com'});
//         }else{
//             reject('ERROR! Something went wrong');
//         }
//     },2000);
// });

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("Finally block executed"));
// finally will run either the promise is resolved or rejected.


//   Promise Five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Shivank33')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
/*
The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
This returned promise fulfills when all of the input's promises fulfill 
(including when an empty iterable is passed), with an array of the fulfillment values.
It rejects when any of the input's promises rejects, with this first rejection reason. 
*/