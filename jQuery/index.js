

$("h1").click(function(){
  $("h1").css("color", "purple");
});


//Add event listener to the button.  Before we had to loop to attach listeners.
$("button").click( function() {
  //$("h1").css("color", "green");
  $("h1").hide();

});
