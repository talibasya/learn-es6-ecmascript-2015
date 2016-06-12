const pets = ['Cat', 'Dog'];

pets.push("Hamster", "Horse");
console.log(pets); //[Cat, Dog, Hamster, "Horse"]



//______________________________________
const pets = ['Cat', 'Dog'];
const wishList = ["hamster", "Horse", "Snake"];

pets.push.apply(pets, wishList);
//equalment
//pets.push("Hamster", "Horse", "Snake");

console.log(pets); //[Cat, Dog, Hamster, Horse, Snake]




//______________________________________
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

const pets = [];

button.addEventListener('click', function(evt) {
	if (input.value.length > 0) {
		pets.push(input.value);
		input.value = "";
		render();
	}
});

function render() {
	list.innerHTML = pets.map(x => `<li>${x}</li>`).join('');
}