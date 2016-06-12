var message = "hi";
{
    var message = "bye";
}

console.log(message);
// show bye

//________________________________________________
var message = "hi";

function greet(){
    var message = "bye";
}

console.log(message);
// show hi

//________________________________________________
let message = "hi";
{
    let message = "bye";
}

console.log(message);
// show hi


//________________________________________________
var fs = [];

for (var i = 0; i < 10; i++) {
	fs.push(function() {
		console.log(i);
	})
}

fs.forEach(function(f) {
	f();
});

// only 10


var fs = [];

for (let i = 0; i < 10; i++) {
	fs.push(function() {
		console.log(i);
	})
}

fs.forEach(function(f) {
	f();
});

// only since 0 to 9


//_________________________________________________
function varFunc() {
	var previous = 0;
	var current = 1;
	var i;
	var temp;

	for(i = 0; i < n; i += 1) {
		temp = previous;
		previous = current;
		current = temp + current;
	}
}

function letFunc() {
	let previous = 0;
	let current = 1;

	for (let i = 0; i < n; i += 1) {
		let temp = previous;
		previous = current;
		current = temp + current;
	}
}