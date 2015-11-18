	//Goal: Ask users to select an image and write brief text; output image overlaid with user text to page.  

	//When image is clicked, display that image to page and hide gallery of images; save "src" attribute of image.
		//Bind event handler to click on image. Get "src" attribute of clicked image.
		//Hide gallery of images, and create new image element to replace it on page.
		//Set its width and height and set its "src" attribute to that of selected image.
		//Hide gallery and append new image element to div with id "picturebox."

	var imgName;

	$().ready(function () {
		$("#picturebox").hide();
		$("img").click(function () {
			imgName = $(this).attr("src");
			$("#gallery").css("display","none");
			$("#first-instruction").css("display","none");
			var img = document.createElement("img");
			img.style.width = "100%";
			img.style.height = "auto";
			img.setAttribute("src", imgName);
			$("#picturebox").append(img);
			$("#picturebox").show();

	//		$('#picturebox').css('background-image', 'url(' + imgName + ')');
	//		$('myOjbect').css('background-image', 'url(' + imageUrl + ')');
	//		$("#picturebox").css("width","100%");
	//		$("#picturebox").css("height", "auto");

		});	
	});

	//When twitch button is clicked, collect user input and store to variable. Then output selected image with text overlaid on top.
		//Bind event handler to click on button.
		//Store value of text entered by user in a variable.
		//Create new div to hold selected image as background image and user text as h1 element.

	var twitchInput = document.getElementById("twitch-input"); //text entered by user
	var addButton = document.getElementsByTagName("button")[0]; //first button
	var twitchToDisplay; //user text to display to page

	addButton.onclick = function () {
	//collect value of user input and log to console to test
	//set value back to empty string
		twitchToDisplay = twitchInput.value;
		console.log(twitchToDisplay);
		twitchInput.value = "";
		document.getElementById("input-display").innerHTML = twitchToDisplay;

	//	$("#picturebox").append(twitchToDisplay);  
	};



	//Set image as background to an HTML element (div with id "display-input")
	//Or create new HTML element and set image as background to it?
	//Could I replace 6 images with selected image? Then make input box disappear?


