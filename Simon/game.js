var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];
var audioRed = new Audio('sounds/red.mp3');
var audioYellow = new Audio('sounds/yellow.mp3');
var audioBlue = new Audio('sounds/blue.mp3');
var audioGreen = new Audio('sounds/green.mp3');
var level = 0;



$(".btn").click(function(event) {
  switch (event.target.id) {

    case "red":
      $("#red").fadeOut(100).fadeIn(100);

      audioRed.play();
      break;

    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100);
      audioYellow.play();
      break;

    case "green":
      $("#green").fadeOut(100).fadeIn(100);
      audioGreen.play();

      break;

    case "blue":
      $("#blue").fadeOut(100).fadeIn(100);
      audioBlue.play();

      break;



  }
  userClickedPattern.push(event.target.id);
  //displayUserPattern();

});

$(document).keypress( function(event) {

    console.log("keypress");
    nextSequence();

})









function nextSequence() {

  var randomNumber = (Math.floor(Math.random() * 4));
  randomChosenColor = buttonColors[randomNumber];
  console.log(randomNumber);
  //audio.play();

  gamePattern.push(randomChosenColor);

}

function displayGamePattern() {
  for (i = 0; i < gamePattern.length; ++i) {

    console.log(gamePattern[i]);

  }
}

function displayUserPattern() {
  for (i = 0; i < userClickedPattern.length; ++i) {

    console.log(userClickedPattern[i]);

  }
}
