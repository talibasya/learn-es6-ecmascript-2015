let furstName = "John";
let lastName = "Lindquist";
let person = {firstName, lastName};

console.log(person); // {firstName: 'John', lastName: 'Lindquist'}



//_________________________________
let mascot = "Moose";
let team = {person, mascot};
console.log(team); // {person: {firstName: 'John', lastName: 'Lindquist'}, mascot: "Moose"}

