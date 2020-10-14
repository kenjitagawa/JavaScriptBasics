// Functions

function hello(name){
    console.log(`Hello ${name}`);
}

hello('Kenji');

function convertPercent(num){
    return num/ 100;
}

console.log(convertPercent(10)); // IF a string is passed, NaN is returned!

// ES6 Functions

const convertPercent2 = num => num/100; //if only one call method

const convertPercent3 = (num) => {
    num += 10;
    return (num / 100);
}

console.log(convertPercent2(15))
console.log(convertPercent3(20))









