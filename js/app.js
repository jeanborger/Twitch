//Goal: Ask for text (twitch) input from user; format and write input to page (possibly using typewriter)

var newTwitch = document.getElementById("new-twitch"); //text entered by user
var addButton = document.getElementsByTagName("button")[0]; //first button

addButton.onclick = function () {
	newTwitch = newTwitch.value;
	document.write(newTwitch);
};


