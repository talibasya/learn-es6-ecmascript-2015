var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var flattenedData = data.reduce(function(acc, val) {
	return acc.concat(value);
}, []);

console.log(flattenedData); //shows single list


//__________________________________________________

var input = [
	{
		title: "Batman Begins"
		year: 2005,
		cast: [
			"Christian Bale",
			"Michael caine"
		]
	},
	{
		title: "Batman Begins"
		year: 2008,
		cast: [
			"Christian Bale",
			"Michael caine"
		]
	}
	...
];

var stars = input.reduce(function(acc, val) { // get only cast from input array
	// remove dublicates
	value.cast.forEach(function(star) {
		if (acc.indexOf(star) === -1)
			acc.push(star);
	})
	
	return acc;
}, []);

console.log(stars); // get uniqe casts


//__________________________________________________
var data = [1, 2, 3, 4, "5"];
var sum = data.reduceRight(function(acc, value, index){
	console.log(index); // 4 3 2 1 0
	return acc + value;

}, 0)
console.log(sum); // get 054321   // reduce return 105