var buttonColors = ["red", "yellow", "green", "blue"];
var audioSounds = [new Audio('sounds/red.mp3'), new Audio('sounds/yellow.mp3'),
  new Audio('sounds/green.mp3'), new Audio('sounds/blue.mp3')
];
var gameOverSound = new Audio('sounds/wrong.mp3');
var randomChosenColor;
var gamePattern = [];
var gameOver = false;
var userClickedPattern = [];

var level = 0;
var buttonIndex = 0;



$(".btn").click(function(event) {
  switch (event.target.id) {

    case "red":
      $("#red").fadeOut(100).fadeIn(100);
      audioSounds[0].play();
      break;

    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100);
      audioSounds[1].play();
      break;

    case "green":
      $("#green").fadeOut(100).fadeIn(100);
      audioSounds[2].play();
      break;

    case "blue":
      $("#blue").fadeOut(100).fadeIn(100);
      audioSounds[3].play();
      break;



  }
  userClickedPattern.push(event.target.id);
  ++buttonIndex;
  if (buttonIndex == level) // Time to check the answer.
  {
    checkAnswer();
  }


  //displayUserPattern();

});

//Start the game
$(document).keypress(function(event) {

  nextSequence();
  //displayGamePattern();
})



function checkAnswer() {
  for (i = 0; i < gamePattern.length; ++i) {
    if (gamePattern[i] != userClickedPattern[i]) {

      gameOverSound.play();
      gameOver = true;

    }
  }
  //Clear the array;
  if (!gameOver) {
    userClickedPattern = [];
    buttonIndex = 0;
    nextSequence();
  }
}

function nextSequence() {
  $("h1").text("Level " + level);
  ++level;
  var randomNumber = (Math.floor(Math.random() * 4));
  randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor);
  showButtonPress(randomChosenColor);
  gamePattern.push(randomChosenColor);
  //wait(5000);
}



function showButtonPress(buttonPress) {
  switch (buttonPress) {

    case "red":
      $("#red").fadeOut(100).fadeIn(100);
      audioSounds[0].play();
      break;

    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100);
      audioSounds[1].play();
      break;

    case "green":
      $("#green").fadeOut(100).fadeIn(100);
      audioSounds[2].play();
      break;

    case "blue":
      $("#blue").fadeOut(100).fadeIn(100);
      audioSounds[3].play();
      break;
  }

}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}





function displayGamePattern() {
  for (i = 0; i < gamePattern.length; ++i) {
    showButtonPress(gamePattern[i]);
    console.log(gamePattern[i]);
    wait(1000); //
  }
}

function displayUserPattern() {
  for (i = 0; i < userClickedPattern.length; ++i) {



  }
}
