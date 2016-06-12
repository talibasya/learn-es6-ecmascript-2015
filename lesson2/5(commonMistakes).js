console.log(1 == "1"); // true
console.log(1 === "1"); // false

var data = [1, 2, 3, 4];
function reducer(acc, val) {
	return acc + val;
};

var sum = data.reduce(reducer); // the second argument default 0

console.log(sum);// 10



//____________________________________
var data = ['vote1', 'vote2', 'vote1', 'vote2'];
function reducer(acc, val) {
	if (acc[val]) {
		acc[val] = acc[val] + 1; 
	} else {
		acc[val] = 1;
	}

	return acc;
};

var tally = data.reduce(reducer, {});
console.log(tally);// {vote1: 2, vote2: 2}


// !!!!!!!!!!!!!!!!!!!!!!!!! 
var tally = data.reduce(reducer);
console.log(tally);// {vote1} ?


//____________________________________
//____________________________________
var data = ['vote1', 'vote2', 'vote1', 'vote2'];
function reducer(acc, val) {
	if (acc[val]) {
		acc[val] = acc[val] + 1; 
	} else {
		acc[val] = 1;
	}
};

var tally = data.reduce(reducer, {});
console.log(tally);// error (because second iterator returns that undefined

// 1. always init parameter
// 2. return in the reducer function
