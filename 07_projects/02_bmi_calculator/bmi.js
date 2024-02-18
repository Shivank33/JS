const form = document.querySelector("form");
// const height = parseInt(document.querySelector("#height2").value);
// const weight = parseInt(document.querySelector("#weight2").value);
//These cases will give us empty values.

const button = document.querySelector("#btn");

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height2").value);
    const weight = parseInt(document.querySelector("#weight2").value);
    const results = document.querySelector("#results");
    const msg = document.querySelector("#msg");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Not valid ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Not valid ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = bmi;
        if(bmi < 18.6){
            msg.innerHTML = "Underweight category";
        }
        else if(bmi > 18.6 && bmi < 24.9){
            msg.innerHTML = "Normalweight category";
        }
        else{
            msg.innerHTML = "OverWeight category";
        }
    }
});