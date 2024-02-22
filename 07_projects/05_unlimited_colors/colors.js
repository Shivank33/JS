// const body = document.querySelector("body");
// const div = document.querySelector(".container");
// const start = document.querySelector(".start");
// const stop = document.querySelector(".stop");


//   start.addEventListener("click" , function() {
//     const stopMe = setInterval(function(){
//         let random1 = Math.floor(Math.random() * 255);
//         let random2 = Math.floor(Math.random() * 255);
//         let random3 = Math.floor(Math.random() * 255);
//         body.style.backgroundColor = `rgba( ${random1} , ${random2} , ${random3} )`;
//         div.style.backgroundColor = `rgba( ${random2} , ${random3} , ${random1} )` ;
//     },1000);

//     stop.addEventListener("click" , function(){
//         clearInterval(stopMe);
//     });
// });

// First code fails test cases -> when we click on start and again click on start.




const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomColorBox = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
      div.style.backgroundColor = randomColorBox();
    }

  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('.start').addEventListener('click', startChangingColor);
  
  document.querySelector('.stop').addEventListener('click', stopChangingColor);

  const div = document.querySelector(".container");