var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "IT'S A TIE";
}