var randomNumber1 = (Math.floor(Math.random() * 5)+1);
var randomNumber2 = (Math.floor(Math.random() * 5)+1);

var diceImage;

diceImage = randomDiceImage(randomNumber1);
console.log(diceImage);

document.querySelector("img.img1").setAttribute('src', diceImage);
diceImage = randomDiceImage(randomNumber2);
console.log(diceImage);
document.querySelector("img.img2").setAttribute('src', diceImage);

if(randomNumber1 > randomNumber2)
{
  //Player 1 wins
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 == randomNumber2)
{
  //tie
  document.querySelector("h1").innerHTML = "It's a TIE";
}
else
{
  //Player 2 wins.
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

function randomDiceImage(imageNum)
{

  return "images/dice" + imageNum + ".png";
}
