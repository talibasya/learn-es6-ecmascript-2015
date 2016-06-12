var {color} = {
	color: "blue"
}

console.log(color) // blue


//__________________________________
var {color, posititon} = {
	color : "blue",
	name : "John",
	state: "New York",
	position: "Forward"
}
console.log(color);
console.log(position);


//__________________________________
function generateObj() {
	return {
		color : "blue",
		name : "John",
		state: "New York",
		position: "Forward"
	}
}

var {name, state} = generateObj();
console.log(name); // John
console.log(state); // New York



//___________________________________
var {name:firstName, state:location} = generateObj();
console.log(firstName); // John
console.log(location); // New York



//___________________________________
// only 0 and 4
var [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];
console.log(first); // red
console.log(fifth); // orange


//___________________________________
var people = [
	{
		"firstName" : "Clinton",
		"lastName" : "Ruiz",
		"phone" : "1-403-985-0449",
		"email" : ...
		"address" : ...
	},
	{
		"firstName" : "Clinton2",
		"lastName" : "Ruiz2",
		"phone" : "1-403-985-04492",
		"email" : ...
		"address" : ...
	},
	{
		"firstName" : "Clinton3",
		"lastName" : "Ruiz3",
		"phone" : "1-403-985-04493",
		"email" : ...
		"address" : ...
	},
	{
		"firstName" : "Clinton4",
		"lastName" : "Ruiz4",
		"phone" : "1-403-985-04494",
		"email" : ...
		"address" : ...
	},
]

var [, Skyler] = people;
function logEmail({email}) {
	console.log(email);
} 

logEmail(Skyler); // shows Ruiz2

people.forEach( ({firstName}) => console.log(firstName) )// will show first name





