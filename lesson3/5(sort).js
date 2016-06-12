var items = ['Shane', 'Sally', 'Isaac'];

items.sort();
console.log(items); // ['Isaac', 'Sally', 'Shane']


//________________________________________
var items = [10, 30, 20];

items.sort();
console.log(items); // [10, 20, 30]


//________________________________________
var items = [10, 30, 2, 20];

items.sort();
console.log(items); // [10, 2, 20, 30]


//________________________________________
var items = [10, 30, 2, 20];

items.sort((a, b) => a - b);
console.log(items); // [2, 10, 20, 30]



//________________________________________
var items = [10, 30, 2, 20];

items.sort((a, b) => {
	if (a - b === 0) {
		return 0;
	}
	if (a - b < 0) {
		return -1;
	}
	if (a - b > 0) {
		return 1;
	}
});

console.log(items); // [2, 10, 20, 30]




//________________________________________
var items = ['Shane', 'Kittie', 'Sally', 'Isaac'];

items.sort((a, b) => b.length - a.length);
console.log(items); // ['Kittie', 'Shane', 'Sally', 'Isaac']



//________________________________________
var lessons = [
	{
		title: 'javascript array methods in depth - concat'
		views: 1000
	},
	{
		title: 'javascript array methods in depth - slice'
		views: 1050
	},
	{
		title: 'javascript array methods in depth - join'
		views: 1025
	}
];

var list = lessons
	.sort((a, b) => b.views - a.views)
	.map(x => `		<li>${x.title} (${x.views})</li>`).join('\n');

var output = `<ul>\n${list}\n</ul>`;
console.log(output); // html 

















