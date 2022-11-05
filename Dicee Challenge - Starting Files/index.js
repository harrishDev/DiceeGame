var numberSelector1 = Math.floor(Math.random() *6) + 1; //1-6

var imageSelector = "images/dice" + numberSelector1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSelector);

var numberSelector2 = Math.floor(Math.random() *6) + 1; //1-6

var imageSelector2 = "images/dice" + numberSelector2 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", imageSelector2);

if (numberSelector1 > numberSelector2){
  document.querySelector("h1").innerHTML = " 🚩Player 1 Wins ";
}
else if (numberSelector2 > numberSelector1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
