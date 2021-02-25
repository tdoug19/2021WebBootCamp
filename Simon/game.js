var buttonColors = ["red", "yellow", "green", "blue"];
var audioSounds = [new Audio('sounds/red.mp3'), new Audio('sounds/yellow.mp3'),
  new Audio('sounds/green.mp3'), new Audio('sounds/blue.mp3')
];
var randomChosenColor;
var gamePattern = [];
var userClickedPattern = [];

var level = 0;



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
  //displayUserPattern();

});

//Start the game
$(document).keypress(function(event) {

  console.log("keypress");
  nextSequence();

  displayGamePattern();
})









function nextSequence() {
  $("h1").text("Level " + level);
  ++level;
  var randomNumber = (Math.floor(Math.random() * 4));
  randomChosenColor = buttonColors[randomNumber];
  console.log(randomNumber);
  //audio.play();

  gamePattern.push(randomChosenColor);

}

function displayGamePattern() {
  for (i = 0; i < gamePattern.length; ++i) {
    showButtonPress(gamePattern[i], 500);
    wait(1000);



  }
}

function displayUserPattern() {
  for (i = 0; i < userClickedPattern.length; ++i) {



  }
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
