var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
console.log(family.indexOf('Kiitie')); // 3 (index)



//_______________________________________________
var family = ['Shane', 'Sally', 'Isaac'];
console.log(family.indexOf('Kiitie')); // -1



//_______________________________________________
var family = ['Shane', 'Sally', 'Isaac'];
var kittieExists = family.indexOf('Kittie') > -1;
console.log(kittieExists); // false // or true if wil be name Kittie



//_______________________________________________

var family = ['Shane', 'Kittie', 'Sally', 'Isaac'];
console.log(family.indexOf('Kiitie', 2)); // -1
console.log(family.indexOf('Kiitie', 1)); // 1



//_______________________________________________
var shane = {
	name: 'Shane'
}

var sally = {
	name: 'Sally'
}

var kittie = {
	name: 'Kittie'
}

var family = [shane, sally];
console.log(family.indexOf(kittie)) // -1

var family = [shane, sally, kittie];
console.log(family.indexOf(kittie)) // 2



//_______________________________________________

var whileList = ['.css', '.js'];

var events = [
	{
		file: 'css/core.css'
	},
	{
		file: 'js/app.js'
	},
	{
		file: 'index.html'
	}
];



var filtered = events.filter(event => {
	var ext = require('path').extname(event.file);
	return whileList.indexOf(ext) > -1;
})

console.log(filtered) // only core.css and app.js




















