//Goal: Ask users to select an image and write brief text; output image and user text to page.  

//When image is clicked, display that image to page and hide gallery of images.
	//Bind event handler to click on image. Get "src" attribute of clicked image.
	//Hide gallery of images, and create new image element to replace it on page.
	//Set its width and height and set its "src" attribute to that of selected image.
	//Hide gallery and append new image element to div with id "picturebox."

$().ready(function () {
	$("img").click(function () {
		var imgName = $(this).attr("src");
		$("#gallery").css("display","none");
		$("#first-instruction").css("display","none");
		var img = document.createElement("img");
		img.style.width = "100%";
		img.style.height = "auto";
		img.setAttribute("src", imgName);
		$("#picturebox").append(img);  
	});	
});


//On button click, collect user input and output it to the page.
	//Store value of text entered by user in a variable.
	//Bind event handler to click on button.
	//Display text to page.

var twitchInput = document.getElementById("twitch-input"); //text entered by user
var addButton = document.getElementsByTagName("button")[0]; //first button
var twitchToDisplay; //user text to display to page

addButton.onclick = function () {
	twitchToDisplay = twitchInput.value;
	console.log(twitchToDisplay);
//	document.getElementById("user-text").innerHTML = twitchToDisplay;
	twitchInput.value = "";
	$("#picturebox").append(twitchToDisplay);  
};


//Set image as background to an HTML element (div with id "display-input")
//Or create new HTML element and set image as background to it?
//Could I replace 6 images with selected image? Then make input box disappear?


