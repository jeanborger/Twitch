//Goal: Ask users to select an image and write brief text; Output image and user text to page

//Steps:  

//Collect image selection and store it in a variable

var imageInput; //image selected by user
var imageToDisplay; //image to display to page

$().ready(function () {
	$("img").click(function () {
		var imgName = $(this).attr("src");
		
		$("#gallery").css("display","none");
		var img = document.createElement("img");
		img.height = "500px";
		img.width = "100%";		
		img.setAttribute("src", imgName);
		$("#picturebox").append(img);    
	});	
});



//Ask for text input and bind to button click, store value of input in a variable (twitchToDisplay)

var twitchInput = document.getElementById("twitch-input"); //text entered by user
var addButton = document.getElementsByTagName("button")[0]; //first button
var twitchToDisplay; //user text to display to page

addButton.onclick = function () {
	twitchToDisplay = twitchInput.value;
	console.log(twitchToDisplay);
	twitchInput.value = "";
	console.log(twitchInput.value);
};


//Set image as background to an HTML element (div with id "display-input")
//Or create new HTML element and set image as background to it?
//Could I replace 6 images with selected image? Then make input box disappear?


