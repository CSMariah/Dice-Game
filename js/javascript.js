function play() {
  var audio = new Audio('sound/applause2.wav');
  audio.play();
}
var Dice = ["images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"];
function DiceGame() {
var Dice1 = Dice[Math.floor(Math.random()*Dice.length)];
var Dice2 = Dice[Math.floor(Math.random()*Dice.length)];

document.getElementById('dice1').src = Dice1;
document.getElementById('dice2').src = Dice2;

switch (Dice1) {
  case "images/1.png":
  var DiceOne = 1; break;
  case "images/2.png":
  var DiceOne = 2; break;
  case "images/3.png":
  var DiceOne = 3; break;
  case "images/4.png":
  var DiceOne = 4; break;
  case "images/5.png":
  var DiceOne = 5; break;
  case "images/6.png":
  var DiceOne = 6; break;
  default: console.log('Empty');
}

switch (Dice2) {
  case "images/1.png":
  var DiceTwo = 1; break;
  case "images/2.png":
  var DiceTwo = 2; break;
  case "images/3.png":
  var DiceTwo = 3; break;
  case "images/4.png":
  var DiceTwo = 4; break;
  case "images/5.png":
  var DiceTwo = 5; break;
  case "images/6.png":
  var DiceTwo = 6; break;
  default: console.log('Empty');
}

if (DiceOne > DiceTwo) {
document.getElementById('winner').innerHTML = "🚩 Player One Wins!";
play();
 }
  else if (DiceOne < DiceTwo) {
document.getElementById('winner').innerHTML = "Player Two Wins! 🚩";
play();
} else {
  document.getElementById('winner').innerHTML = "Draw!";
}
}
