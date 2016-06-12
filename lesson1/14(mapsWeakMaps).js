var myMap = new Map();

//API
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo')) // bar
console.log(myMap.has('foo')) // true
console.log(myMap.get('qwerty')) // undefined
console.log(myMap.has('qwerty')) // false
console.log(myMap.size); //2

//myMap.clear();
//console.log(myMap.size); //0


//iterators
// keys()
// entries()
// values

for (var key of myMap.keys()) {
	console.log(key); // foo hello
}

for (var v of myMap.values()) {
	console.log(v); // bar world
}

for (var [key, value] of myMap.entries()) {
	console.log(key, " -> ", value); //  foo -> bar; hello -> world
}




//_________________________________
var myMap = new Map();
var myObj = {};
var myFunc = function() { console.log('here')};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set("string", 2);

for (var [key, value] of myMap.entries()) {
	console.log(key, " -> ", value); //  foo -> bar; hello -> world
}



//_________________________________
var myMap = new WeakMap();
var myObj = {};
var myFunc = function() { console.log('here')};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
//myMap.set("string", 2);

for (var [key, value] of myMap.entries()) {
	console.log(key, " -> ", value); //  error
}