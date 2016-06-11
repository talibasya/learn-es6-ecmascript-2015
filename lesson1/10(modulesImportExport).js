
// LEARN MORE: babeljs.io/docs/
//__________________________________main.js
import {sumTwo, sumThree} from 'addition';

console.log("2 + 3", sumTwo(2, 3));
console.log("2 + 3 + 4", sumThree(2, 3, 4));


//__________________________________addtition.js
function sumTwo(a, b) {
	return a + b;
}

function sumThree(a, b) {
	return a + b;
}

export {sumTwo, sumThree};


//__________________________________OR
//__________________________________addtition.js
export function sumTwo(a, b) {
	return a + b;
}

export function sumThree(a, b) {
	return a + b;
}


//__________________________________main.js
import {sumTwo: addTwoNumbers, sumThree} from 'addition';

console.log("2 + 3", addTwoNumbers(2, 3));
console.log("2 + 3 + 4", sumThree(2, 3, 4));



//__________________________________main.js
import * as addition from 'src/addtition';
console.log("2 + 3", addition.sumTwo(2, 3));
console.log("2 + 3 + 4", addition.sumThree(2, 3, 4));







//__________________________________OR
//___________________________________users.js
export var users = [
	{'user': 'barney', 'age' : 36, 'active': false, 'pets': ['hoppy']},
	{'user': 'barney2', 'age' : 40, 'active': true, 'pets': ['boppy']}
]


//__________________________________main.js
import {users} from 'src/users';
console.log(users);