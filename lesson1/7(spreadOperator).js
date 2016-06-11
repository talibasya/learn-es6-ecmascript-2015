console.log([1, 2, 3]); // [ 1, 2, 3 ]



//___________________________________________
console.log(...[1, 2, 3]) //1 2 3


//___________________________________________
let first = [1, 2, 3];
let second = [4, 5, 6];

fist.push(second);
console.log(first); // [ 1, 2, 3, [4, 5, 6 ] ]


//___________________________________________
let first = [1, 2, 3];
let second = [4, 5, 6];

fist.push(...second); // is append
console.log(first); // [ 1, 2, 3, 4, 5, 6 ]
fist.push(...second);
console.log(first); // [ 1, 2, 3, 4, 5, 6, 4, 5, 6 ]



//___________________________________________
function addThreeThings(a, b, c) {
	let result = a + b + c;
	console.log(result);
};

addThreeThings(...first);// console shows 6;
addThreeThings(...second);// console shows 15;