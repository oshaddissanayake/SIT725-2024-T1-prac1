function changeTxt(){
    var textArray = ["Call Of Duty "," GTA ","Far Cry"]
    var number = getRandomNoBetween( 0,textArray.length - 1)
    console.log("Ïndex: ",number)

    document.getElementById("heading").innerHTML = textArray[number];

}

function getRandomNoBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let express = require('express');
let app = express(); 
// Your Express application logic goes here
let PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
console.log('Server is running on port $ {PORT}'); 
});