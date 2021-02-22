var randomNumber = Math.floor(Math.random() * 5);;
randomNumber++;
console.log(randomNumber);

var image1 = document.querySelector("img.img1");
console.log(image1);
//document.querySelector(".img1").setAttribute('src','images/dice2.png')


var diceImage;

diceImage = randomDiceImage(1);
console.log(diceImage);


if(randomNumber == 1){
  document.querySelector("img.img1").setAttribute('src','images/dice1.png');

}
else if (randomNumber == 1){
  document.querySelector("img.img1").setAttribute('src','images/dice1.png');
}

function randomDiceImage(imageNum)
{

  return "images/dice1";
}
