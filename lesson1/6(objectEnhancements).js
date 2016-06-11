var color = "red";
var speed = 10;
function go() {
	console.log('vroom');
}

var car = {
	color, 
	speed,
	go
};

console.log(car.color); // red
console.log(car.speed); // 10

car.go(); // vroom



//_______________________________________
var color = "red";
var speed = 10;

var car = {
	color, 
	speed,
	go() {
		console.log('vroom');
	}
	//or 
	/*
	["go"]: function() {
		console.log('vroom');
	}*/

};

console.log(car.color); // red
console.log(car.speed); // 10

car.go(); // vroom