//npm i babel-cli -g
babel --presets react src.js -o dist.js --watch



//___________________src.js:
"use strict"
const App = () => {
	return (
		<div>Hello</div>
	);
}



//___________________dist.js
"use strict";

const App = () => {
	return React.createElement(
		"div",
		null,
		"Hello"
	);
};