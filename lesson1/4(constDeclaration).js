var VALUE = "hekko world";
VALUE = 'foo bar';
console.log('values:', VALUE); // 'foo bar';



//___________________________________________
const VALUE = "hekko world";
VALUE = 'foo bar';
console.log('values:', VALUE); // error



//___________________________________________
const VALUE = {};
VALUE.foo = 'bar';
console.log('values:', VALUE); // "value {foo: 'bar'}"



//___________________________________________
const VALUE = {};
VALUE = 'bar';
console.log('values:', VALUE); // "error"



//___________________________________________
if (true) {
	const foo = 'bar';
}
console.log(foo); // foo is not defined