//Goal: Ask users to select an image and write brief text; Output image and user text to page

//Steps:  

//Ask for image selection and store it in a variable
//Set image as background to an HTML element (div with id "display-input")

var imageInput; //image selected by user
var imageToDisplay; //image to display to page




//Ask for text input and bind to button click, store input in a variable (twitchInput)

var twitchInput = document.getElementById("twitch-input"); //text entered by user
var addButton = document.getElementsByTagName("button")[0]; //first button
var twitchToDisplay; //user text to display to page

addButton.onclick = function () {
	twitchToDisplay = twitchInput.value;
	console.log(twitchToDisplay);
	twitchInput.value = "";
	console.log(twitchInput.value);
};



//Append user text to image

//Display text and image


