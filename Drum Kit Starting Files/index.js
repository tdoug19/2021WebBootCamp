
var audio = new Audio("sounds/tom-1.mp3");
for (var i = 0; i < document.querySelectorAll(".drum").length; ++i)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      console.log(this.innerHTML);

      
      switch(this.innerHTML){
        case "w":
          new Audio("sounds/tom-1.mp3").play();
        break;

        case "a":
          new Audio("sounds/tom-2.mp3").play();
        break;

        case "s":
          new Audio("sounds/tom-3.mp3").play();
        break;
        case "d":
          new Audio("sounds/tom-4.mp3").play();
        break;

        default:


      }
    });
}


function handleClick(){
  audio.play();
}
