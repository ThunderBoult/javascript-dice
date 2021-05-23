var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomDiceImage1= "dice" + randomNumber1 + ".png";
var randomImageSource1= "images/" + randomDiceImage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2= Math.floor(Math.random() * 6)+1;
var randomImageSource2= "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var randomNumber3= Math.floor(Math.random() * 6)+1;
var randomImageSource3= "images/dice" + randomNumber3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

 if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3 ){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 3 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
