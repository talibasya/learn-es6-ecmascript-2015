function* greet() {
	console.log(`You called 'next()'`);
}

let greeter = greet();
console.log(greeter); // {next: [function], throw: [Function]}
let next = greeter.next();
console.log(next); // {value: undefined, done: true}



//_______________________________________
function* greet() {
	console.log(`You called 'next()'`);
	yield "hello";
}

let greeter = greet();
console.log(greeter); // {next: [function], throw: [Function]}
let next = greeter.next();
console.log(next); // {value: 'hello', done: false}
let done = next.next();
console.log(done); // {value: undefined, done: true}



//_______________________________________
function* greet() {
	console.log(`Generators are "lazy"`);
	let tmp = yield "How";
	console.log(tmp); // undefined
	console.log(`I'm not called until the second next`);
	yield "are";
	console.log(`Call me before you?`);
	yield 'you?';
	console.log(`Called when "done"`);
}

var greeter = greet();
//Generators are "lazy"
console.log(greeter.next()); // {value : 'How', done: false}
// I'm not called until the second next
console.log(greeter.next()); // {value : 'are', done: false}
//Call me before you?
console.log(greeter.next()); // {value : 'you?', done: false}
//Called when "done"
console.log(greeter.next()); // {value : undefined, done: true}

// is equal

for (let word of greeter) {
	console.log(word);

}


//________________________________________

function* greet() {
	let tmp = yield "How";
	console.log(tmp); // the back
	yield "are";
	yield 'you?';
}

var greeter = greet();
console.log(greeter.next());
console.log(greeter.next("the back"));
console.log(greeter.next());
console.log(greeter.next());



//________________________________________

function* greet() {
	let friendly = yield "How";
	friendly = yield friendly + "are";
	yield friendly + 'you?';
}

var greeter = greet();
console.log(greeter.next().value); // How
console.log(greeter.next("the heck ").value); // the heck are
console.log(greeter.next("silly ol'").value); // silly ol'you



//________________________________________
function* graph() {
	let x = 0;
	let y = 0;
	while (true) {
		yield {x:x, y:y}
		x += 2;
		y += 1;
	}
}

var graphGen = graph();
console.log(graphGen.next().value) // {x:0, y:0}
console.log(graphGen.next().value) // {x:2, y:1}
console.log(graphGen.next().value) // {x:4, y:2}
...