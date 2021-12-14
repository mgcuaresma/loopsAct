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
}
