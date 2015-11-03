//Goal: Hide, then show tagline
//Solution: JQ to grab element, hide it, then show it once typewriter runs

//Hide tagline
$("#tagline1").hide();
$("#tagline2").hide();
$("#tagline3").hide();
$("#main-image").hide();


//Show tagline gradually after logo text is typed
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