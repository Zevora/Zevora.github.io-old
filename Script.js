$(document).ready(function(){ //the inside of this function will be called when this code is ready to be run
    $("#hidden").hover(function(){  //when hovering over the object with id = hidden, change the color to white
        $(this).css("color", "ghostwhite");
    },
    function(){ //call back function
        $(this).hide(); //These are the same but this one is shorter.
        //$(this).css("display", "none");
    });

    $("button").click(function(){   //ANY button clicked will run this
        //alert("I'm alerting you!");
		var rickIMG = new Image(200, 100);
		rickIMG.src = 'https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif'
		//document.body.appendChild(rickIMG);
		$(rickIMG).insertAfter("#rickButton");
		$("#p1").text("Get Rick Rolled!");
    });
});