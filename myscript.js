// export/run all of this when document loads
$(document).ready(function() {
	console.log("document ready");

	var screen = $("#screen");
	var mostButtons = $(".buttons span").not("#cancel").not("#calc"); //select all items in the .buttons class that are also a <span>
	// and do not have the id #calc or the id #cancel
	var cancelButton = $("#cancel"); 			//select the item with the id #cancel
	var euqalButton = $("#calc"); 				//select the item with the id #calc
	
	
	mostButtons.on("click", function(){	
		//console.log("clicked a button");		//check that it's working as expected
		var element = $(this);
		var elementValue = element.text()
		console.log(elementValue);				//check that it's working as expected
		//screen.text(elementValue);			//shows just the current button value in the screen
		screen.append(elementValue);			//adds the current button value to the end of the HTML in the screen
	});
	
	cancelButton.on("click", function(){
		var elementCancel = $(this);
		elementCancelValue = "clear";
		console.log(elementCancelValue);
		screen.text("");
	});
	
	euqalButton.on("click", function(){
		//get current value inside of screen
		var screenInput = screen.text();
		console.log(screenInput);
			
		//var thing = $.type(screenInput);
		//console.log(thing);					//tells me that the screenInput is a string
		
		//convert string to numbers & operators & save in new variable
		//var strToNum = parseInt(screenInput, 10);

		//var thing2 = $.type(strToNum);
		//console.log(thing2);					//tells me that the strToNum is a number
		//console.log(strToNum);				//tells me that the parseInt is stopping at the operator
		
		//doMath();
		var result = eval(screenInput);			//eval() is magic!!
		console.log(result);					//will only work on plus and minues, though, not multiply or divide

		//display result inside of screen, replace inputValue text()
		screen.text(result);
	})



}); 	// closes the file
