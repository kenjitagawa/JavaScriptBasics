// Loops

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

const people = [
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 30
    },
    {
        firstName: 'Mary',
        lastName: 'Smith',
        age: 28
    }
];

for (let i = 0;i < people.length; i++){
    console.log(people[i]);
}

// Or 

for (let person of people){
    console.log(person.firstName);
}

// High-order array methods
people.forEach((person) => {
    console.log(person.lastName);
});

const personName = people.map(person => person.firstName);
console.log(personName)

const personAgeUnder30 = people.filter(person => person.age < 30);
console.log(personAgeUnder30)
















