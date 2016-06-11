function greet(greeting, name = "John") {
	console.log(greeting, + ", " + name);
}

greet("hello", "Bill"); // hello, Bill
greet("hello"); // hello, John
greet(); // undefined, John



//_________________________________________
function receive(complete = function() {
	console.log("complete");
}) {
	complete();
}

receive(); // show complete



//_________________________________________
function receive(complete = () => console.log("complete")) {
	complete();
}

receive(); // show complete



//_________________________________________
let receive = (complete = () => console.log("complete")) =>complete();

receive(); // show complete
