var luke = {
	name: "luke sky",
	jedi: true,
	parents: {
		father: {
			jedi: true
		},
		mother: {
			jedi: false
		}
	}
}


var han = {
	name: "han solo",
	jedi: false,
	parents: {
		father: {
			jedi: false
		},
		mother: {
			jedi: false
		}
	}
}

var anakin = {
	name: "anakin skywalker",
	jedi: true,
	parents: {
		mother: {
			jedi: false
		}
	}
}

var characters = [luke, han, anakin];

characters.forEach(function(character) {
	console.log(character.name + "'s father was a jedi:", character.parents.father.jedi); // error on an anakin
});


//___________________________________________
function fatherWasJedi(character) {

	var path = "parents.father.jedi";
	return path.split('.').reduce(function(obj, field) {
		if (obj) {
			return obj[field];
		}
		return false;
	}, character);
}

characters.forEach(function(character) {
	console.log(character.name + "'s father was a jedi:", fatherWasJedi(character)); // error on an anakin
});



