// **************   Dates   ****************

let myDate = new Date();

// console.log(myDate);

// console.log(typeof myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// console.log(myDate.toUTCString());

let myCreatedDate = new Date(2024, 8 , 29);
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 11, 10 , 8, 20);
// console.log(myCreatedDate2.toString());

let myCreatedDate3 = new Date("2024-09-29");
// console.log(myCreatedDate3.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);                    //Time in miliseconds

// console.log(myCreatedDate2.getTime());

// console.log(Math.floor(Date.now()/1000));       //Time in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());


// newDate.toLocaleString('default',{
//     weekday: "long"
// });

