var items = [1, 2];
var newItems = items.concat(3);

console.log(newItems); // [1, 2, 3]


var newItems = items.concat(3, 4, 5, 'string', undefined);
console.log(newItems); // [1, 2, 3, 4, 5, 'string', undefined]


var newItems = items.concat([3, 4]); // same concat(3, 4);
console.log(newItems); // [1, 2, 3, 4]

var newItems = items.concat([3, 4], [5, 6, 7]);
console.log(newItems); // [1, 2, 3, 4, 5, 6, 7]

var newItems = items.concat([3, 4], [5, [6, 7]]);
console.log(newItems); // [1, 2, 3, 4, 5, [6, 7]]



//______________________________________________
var people = [
	{
		name: 'Shane'
	},
	{
		name: 'Sally'
	}
];

var people2 = [
	{
		name: 'Ben'
	},
	{
		name: 'Simon'
	}
];


/*people.forEach(function(person) {
	console.log(person.name);
});

people2.forEach(function(person) {
	console.log(person.name);
});*/
people
	.concat(people2)
	.forEach(function(person) {
		console.log(person.name);
	});




