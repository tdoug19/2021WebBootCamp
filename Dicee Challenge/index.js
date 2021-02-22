var randomNumber = Math.floor(Math.random() * 5);
randomNumber++;
console.log(randomNumber);

var image1 = document.querySelector("img.img1");
console.log(image1);
//document.querySelector(".img1").setAttribute('src','images/dice2.png')


var diceImage;

diceImage = randomDiceImage(randomNumber);
console.log(diceImage);

document.querySelector("img.img1").setAttribute('src', diceImage);

randomNumber = (Math.floor(Math.random() * 5) +1);
diceImage = randomDiceImage(randomNumber);
console.log(diceImage);

document.querySelector("img.img2").setAttribute('src', diceImage);


function randomDiceImage(imageNum)
{

  return "images/dice" + imageNum + ".png";
}
