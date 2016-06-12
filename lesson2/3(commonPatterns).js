var data = [1, 2, 3];
var doubled = data.reduce(function (acc, value) {
	acc.push(value * 2);

	return acc;
}, []);

console.log(doubled); // [ 2, 4, 6 ]

// equals
var doubleMapped = data.map(function(item) {
	return item * 2;
});



//__________________________________________
var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce(function(acc, value) {
	if (value % 2 === 0) {
		acc.push(value);
	}
	return acc;
}, []);


var eventFiltered = data2.filter(function(item) {
	return (item % 2 === 0);
});

console.log(evens) // [2,4,6];


var filterMapped = data2.filter(function(val) {
	return val % 2 === 0;
}).map(function(v) {
	return v * 2;
});

console.log(filterMapped); // [4, 8, 12];


//__________________________________________
var bigData = [];
for (var i = 0; i < 1000000; i++) {
	bigData[i] = i;
}

console.time('bigData')
var filterMappedBigData = bigData
	.filter(function(val) {
		return val % 2 === 0}
	)
	.map(function(val) {
		return val * 2;
	});
	//.filter((val) => val % 2 === 0)
	//.map((val) => val * 2);

console.timeEnd('bigData'); // 76ms



//__________________________________________
console.time('bigDataReduce')
var reducedBigData = bigData.reduce(function(acc, value) {
	if (value % 2 === 0) {
		acc.push(value * 2);
	}
	return acc;
}, []);

console.timeEnd('bigDataReduce'); // 54ms
