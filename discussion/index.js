// There are 5 ways to select elements - DOM selectors
/*
1. getElementByTagName()     collective through the use of the element/tag name
2. getElementByClassName()   collective through the use of their class attributes.
3. getElementById()          select a distinct/specific through     
4. querySelector()            
5. querySelectorAll()       
*/
function countUsingWhile() {
	let task1Input = document.getElementById("task1").value;
	if (task1Input <= 0) {
		let msg = document.getElementById("message");
		msg.innerHTML = "Invalid value.";
	} else {
		while(task1Input !== 0) {
		alert(task1Input);
		task1Input--;
		}
	}	
};

// a function that will count to a series of number depending on the value inserted by the user.

function countUsingDoWhile() {
	//get the input of the user.
	let task2Input = document.getElementById("task2").value
	if (task2Input <= 0) {
		// the value is not valid.
		let msg = document.getElementById("info")
		msg.innerHTML = "Invalid af"
	} else {
		// proceed because the value is valid.

		// task will be to count from 1 to n (depending on the value inserted by the user.)
		// the block of code here will be executed first.
		let displayText = document.getElementById("info")
		let indexStart = 1;
		do {
			alert("Count value: " + indexStart)
			displayText.innerHTML = task2Input + " is valid."
			indexStart++		} while (indexStart <= task2Input) {

		}
	}
}
