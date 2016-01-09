function youGetTaco (action) {
	var eat = 'eat';
	if (action === eat) {
		return "Eat Tacos"; 
		} else {
			return ':\'(';
	}
}
	
var myAction = 'eat';
var myActionResult = youGetTaco(myAction);
console.log('1. youGetTaco', myAction, myActionResult);

var myOtherAction = 'drink';
var myOtherActionResult = youGetTaco(myOtherAction);
console.log('1. youGetTaco', myOtherAction, myOtherActionResult);