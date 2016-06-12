var items = [1, 2, 3, 4, 5];
var hasThree = items.some(x => x ===3);
console.log(hasThree); // true


var hasThree = items.some(x => x ===6);
console.log(hasThree); // false

var tasks = [
	{
		title: 'Do laundry',
		completed: true
	},
	{
		title: 'Feed the cat',
		completed: false
	},
	{
		title: 'Watch the array lessons on egghead.io',
		completed: true
	}
];

var list = document.querySelector('.task-list');
list.classList.add(
	tasks.some(task => task.completed === false)
	? 'task-list--uncompleted'
	: 'tas-list--completed'
);

list.innerHTML = tasks
	.map(x => x.completed ? `<s>${x.title}</s>` : x.title)
	.map(x => `<li>${x}</li>`)
	.join('')




//_________________________________________________________
var tasks = [
	{
		title: 'Do laundry',
		completed: true
	},
	{
		title: 'Feed the cat',
		completed: false
	},
	{
		title: 'Watch the array lessons on egghead.io',
		completed: true
	}
];

function addTask(title) {
	if (tasks.some(task => task.title === title)) {
		return;
	}
	tasks.push({title: title, completed: false})
};

addTask('Feed the Dog');
console.log(tasks);