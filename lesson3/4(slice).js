var items = [1, 2, 3, 4, 5];
var copy = items.slice();// create new array with copy values (but for references object will another)
console.log(copy); // [1, 2, 3, 4, 5]



//__________________________________
var person = {name: 'Shane'};
var items = [1, person];
var copy = items.slice();

copy[1].name = "Sally";

console.log(items); // will Sally
console.log(copy); // Sally



//_____________________________________
var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(0, 1); 
console.log(copy) // [1]


var copy = items.slice(0, 2); 
console.log(copy) // [1, 2]


var copy = items.slice(0, 3); 
console.log(copy) // [1, 2, 3]


var copy = items.slice(3); 
console.log(copy) // [4, 5, 6, 7, 8]

var copy = items.slice(3, 6); 
console.log(copy) // [4, 5, 6]

var copy = items.slice(-1); 
console.log(copy) // [8]


var copy = items.slice(-2); 
console.log(copy) // [7, 8]

var copy = items.slice(1, -1); 
console.log(copy) // [2, 3, 4, 5, 6, 7]



//_____________________________________
var person = {
	name: 'shane-osbourne'
};

var filters = {
	'deslugify' : x => x.repace('=', ' ')
	'uppercase' : x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';
var sections = input.split('|').map(x => x.trim());

console.log(sections); // [name, deslugify, uppercase]

var ref = person[secttions[0]];
var output = sections
	.slice(1)
	.reduce((prev, next) => {
		if (filters[next]) {
			return filters[next].call(null, prev);
		}
	}, ref);

console.log(output) // SHANE OSBOURNE












