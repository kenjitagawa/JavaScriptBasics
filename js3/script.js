// Object literals

// let firstName = 'John';
// let lastName = 'Smith';
// let age = 30;

const person = {
    firstName: 'John',
    lastName: 'Stack',
    age: 30
}

//Dot notation
console.log(person.firstName);
console.log(person.age);
console.log(person.lastName);

// Bracket notation
console.log(person['age']);

//variable
let key = 'firstName';
console.log(person['lastName']);

//Adding new values
person.email = `${person['firstName']}${person["lastName"]}@gmail.com`;

// Deleting keys

delete person.age;
console.log(person);

//Preparing to send to a server
const peopleJSON = JSON.stringify(person);
console.log(JSON.parse(peopleJSON))



