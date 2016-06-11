var d = new Promise((reslove, reject) => {
	setTimeout(() => {
		if (true) {
			reslove('hello world');
		} else {
			reject('no bueno');
		}
	}, 2000);
	
});

d
	.then((data) => {
		console.log('success : ', data);
		throw new Error('error thrown!');
		return 'foo bar';
	})
	.then((data) => {
		console.log('success 2: ', data);
	})
	.catch((error) => console.log('error : ', error));



//_________________________________________
var d = new Promise((reslove, reject) => {
	setTimeout(() => {
		if (false) {
			reslove('hello world');
		} else {
			reject('no bueno');
		}
	}, 2000);
	
});

d.then((data) => console.log('success : ', data), (error) => {
	console.error('new error msg: ', error);
});

