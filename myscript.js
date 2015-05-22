// export/run all of this when document loads
$(document).ready(function() {
	console.log("ready");

	var total = 0;
	var tempArr = [];
	var prevButton;
	
	var thisButton = $(event.target).text();
	// console.log(thisButton);
	
	var calcB = $("#calc");

	$("#calculator").on("click", function(event){
		if (event.this === calcB){
			console.log("#calc");
			return;
		}
	});
	
}); 	// closes the file
	
/*
var takeNums = function(event){
	$("#calculator").on("click", function(event){
	
}
	*/
	
// .gif of result shows all of the keys content until the = button is clicked,
// then it calulates, clears, and displays the reult	
	
//	when I click on a button...I want to see the character I click, no matter what
// I want to see all numbers if they are numbers
// I do NOT want to see operators
// when I click on an operator, I want the screen to go blank and switch to the operator character, 
	// and also store the number from the first few clicks into a temporary variable or array
	// if I click an operator more than once, nothing should happen
// then I want to repeat this process
// until I hit equals
// when I hit equals, the number is stored in a 'total' array
	
	// start with addition of 1 and 2 => 3

/*
	var thisButton = $(event.target).text();
	console.log(thisButton);
	

	
	if (thisButton === 1 || thisButton === 2){
		console.log("1 or 2");
	}
	

	var pushNum = function(){e
		tempArr.push(thisButton);
	}
	*/
	/*
	var clickEqual = function(){
		if (thisButton !== "=" ){
			$("#screen").append(thisButton);
			pushNum();
				
	}
		
	}
	

		console.log(tempArr);
		
		
		
		$("#screen").append(thisButton);
		tempArr.push(thisButton);
	
		if (thisButton === "C" ){
			$("#screen").html("<span></span>");
		} 
	
		if (thisButton === "+" ){
			$("#screen").html("<span></span>")
			tempArr.push(thisButton);
			console.log(tempArr);
		}
	}
	
	*/




//	}
	

	
	
//	});	// closes the #calculator onclick function


/*

// This is all from my first attempt at making individual buttons
// we're not supposed to do this

// make variable name for the operator buttons
	var clearB = $("#cancel");
	var divideB = $(".operator:nth-child(2)");
	console.log(divideB);
	var multiplyB = $(".operator:nth-child(2)");
	var minusB = $(".operator:nth-child(3)");
	var plusB = $(".operator:nth-child(4)");
	var equalsB = $("#calc");
	
// make variable names for the number buttons
	var zeroB = $("#zero").html();
	console.log(zeroB);
//	var oneB = $(".buttons span:nth-child(12)").html();
//	var twoB = $(".buttons span:nth-child(13)").html();
//	var threeB = $(".button spans:nth-child(14)").html();
//	var fourB = $(".buttons span:nth-child(8)").html();
//	var fiveB = $(".buttons span:nth-child(9)").html();
//	var sixB = $(".buttons span:nth-child(10)").html();
	var sevenB = $(".buttons span:nth-child(4)").html();
	console.log(sevenB);
	console.log("hi");
	var eightB = $(".buttons span:nth-child(5)").html();
	console.log(eightB);
	var nineB = $(".buttons span:nth-child(6)").html();
	
// make a variable for the display screen
	var displayScreen = $("#screen");
	
	
	
// do stuff!
	

//	$(this).click(function(){
//		console.log($(this).text());
		//return $(this);
//	});


*/
