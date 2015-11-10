//Goal: Hide, then show tagline and image
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
  $("#main-image").show();
}, 7000);

