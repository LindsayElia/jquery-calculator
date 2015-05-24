// export/run all of this when document loads
$(document).ready(function() {
	console.log("document ready");

	var screen = $("#screen");

// not yet using
	var total = 0;
	var tempArr = [];
	var prevButton;
	var calcB = $("#calc");
	
//	var allButtons = $(".buttons");
//	console.log(allButtons);


	$(".buttons span").on("click", function(){	//select all items in the .buttons class that are also a <span>
		//console.log("clicked a button");		//check that it's working as expected
		var element = $(this);
		var elementValue = element.text()
		console.log(elementValue);
		screen.text(elementValue);
	});



}); 	// closes the file
	