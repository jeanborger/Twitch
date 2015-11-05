//Goal: Hide, then show tagline, image, and nav
//Solution: JQ to grab element, hide it, then show it once typewriter runs

//Hide tagline, main image, and nav
$("#tagline1").hide();
$("#tagline2").hide();
$("#tagline3").hide();
$("#main-image").hide();


//Show tagline, photo, and nav gradually after logo text is typed
setTimeout(function(){
  $("#tagline1").show();
}, 5000);

setTimeout(function(){
  $("#tagline2").show();
}, 6000);

setTimeout(function(){
  $("#tagline3").show();
}, 6000);

setTimeout(function(){
  $("#main-image").show();
}, 7000);



//Goal: Ask for input from user; format and write input to page (possibly using typewriter)

var twitchInput = document.getElementById("twitch-text"); //twitch-text
var addButton = document.getElementsByTagName("button")[0]; //first button

 