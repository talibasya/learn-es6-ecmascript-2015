var names = ['Shane', 'Alan', 'Osbourne'];

//console.log(names[0] + ' ' + names[1]);
console.log(names.join(' - ')); // default ','



//___________________________________________
var help = [
	'Usage',
	'	foo-app <input>'
];

if (process.argv[2] === 'help') {
	console.log(help.join('\n'));
}




//___________________________________________
var name = 'shane osbourne';

var upper = name.split(' ') // [shane, osbourne]
	.map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
	.join(' '); // 'Shane Osbourne'

console.log(upper);















