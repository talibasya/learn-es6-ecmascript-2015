var salutation = "Hello";
var place = "planet"
var greeting = `

${salutation}, 
		World  ${salutation}"

`;

console.log(greeting); // Hello,\n\t\tWorld  planet\n\n


//_______________________________________________________
var x = 1;
var y = 2;
var equation = `${ x } + ${ x } = ${ x + y }`;
console.log(equation); // 1 + 2 = 3;



//_______________________________________________________
function tag(string, ...value) {
	console.log(strings); // [ 'It\'s ', 'I\'m sleepy' ]
	console.log(values); // [ 15 ]

	if (values[0] < 20) {
		values[1] = 'awake';
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;

}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message) // It's 15 I'm sleepy

