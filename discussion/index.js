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
			indexStart++} while (indexStart <= task2Input) {

		}
	}
};


//for loop
//syntax
/*
for (initialization, expression/condition; finalExpression) {
	//statement of procedures
}
*/

function countUsingForLoop() {
	let task3Input = document.getElementById("task3").value;
	let res = document.getElementById("response")
	// validate if the value of the data is what we desire
	if (task3Input <= 0) {
		res.innerHTML = "Wrong number";
	} else {
		//initialization;condition;iteration/finalExp
		for (let startCount = 0; startCount <= task3Input; startCount++) {
			// since the start of the count started with 0 then every iteration, we should add a value of 1 to eventually meet the condition and terminate the process.
			//describe what will happen per iteration.
			alert(startCount)
		}
	}
};

//how to access elements of a string using control structures

//get the info of the user
//analyze the value that will be inserted by the user.

function accessElementsInString() {
	//get the input of the user using DOM selector
	let name = document.getElementById("userName").value;
	
	//validate and make sure that input is NOT equivalent to blank.
	if (name !== "") {
		let textLength = document.getElementById("stringLength")
		textLength.innerHTML = "The input is " + name.length + " characters long."
		//Upon accessing elements inside a string, this can be done so using [] square brackets.
		//keep in minde we can access each element through the use of its index number count.
		for (let startIndex = 0; startIndex < name.length; startIndex++) {
			console.log(name[startIndex])
		}
	} else {	
		alert("Invalid input")
	}
};

