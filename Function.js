var a = 2;
var b = 3;

function add (a,b){
	return a + b;
}

var sum = add (a,b);

function subtract (a,b){
	return b - a;
}

var difference = subtract (b, a);


function multiply (b, a){
	return b * a;
}

var product = multiply (b, a);


function checkDifference (a){
	return "My football team lost " + a + " this week";
}

var loss = checkDifference (difference);


function checkSum (x){
	return "I CAN ADDZ  " + x + " NUMBERS";
}

var result = checkSum (sum);

function checkProduct (x,y){
	return x * y;
}

var results = (product,sum);

function addThenSubtract (x,y,z){
	return x + y - z;
}

var result = addThenSubtract (sum,product,difference);

function addThenMultiply (a, b, c){
	return a * b * c;
}

var howMany = (sum,product,difference);

function createFullName (firstName, lastName){
  return "firstName" + "lastName";
}

var results = ("Arnel " + " Nobleza");



function verifyDrinkingAge (age){
	if(age >= 21) {
		return false;
	}else{
		return true;
	}
}

var someonessAge = 22;
var canDrinkBeer = verifyDringkAge(someonsAge);


function throwParty (oldenough){
	if(oldenough) {
	console.log ("This Party will have tons of Cake");
}
else {
    console.log("This Pary will have an open bar");
}
}

throwParty(canDrinkBeer);	

function createFullName (firstName, lastName,) {
	return firstName + "      "  + lastName;
}
console.log(fullName + "loves to eat " + food + "!");


eatfood ("Arnel", "Nobleza", "Pizza");

}

function repeater(howMany, oldenough) {
	for (var i = 0;) i < howmany; i ++) {
		if (oldenough)
	}		
}






