const div = document.querySelector(".container");
const time = document.querySelector(".time");

setInterval(() =>{
    let myDate = new Date();
    time.innerHTML = myDate.toLocaleTimeString();
},1000);