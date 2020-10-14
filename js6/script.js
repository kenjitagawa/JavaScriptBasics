// Conditionals

let color = 'red';

if (color == 'red'){
    console.log(true);
}


let age = 30;

if (age == '30'){ //Equal to 
    console.log('Equal to 30');
}else if (age === "30"){  // Solely equal to. (type)
    console.log('Solely equal to 30');
}else{
    console.log('Not equal!');
};


/* Conditional types
    ==
    ===
    !=
    <=
    >=
    !==


    Comparison operators

    &&
    ||
*/

age = 32;

if (age < 35){
    if (age > 18){
        console.log('This method is too long! ', true)
    }
}

if (age < 35 && age > 18){
    console.log(true)
}

let a = 1;
let b = 2;

function evaluate(){
    if (a < b){
        return true
    }else {
        return false
    }
}
console.log(evaluate())
//OR

function evaluate2(){
    return a < b
}
console.log(evaluate())



let animal = 'cat';
const lineCats = animal === 'cat' ? "Cats!":"Oh no!";
console.log(lineCats)

// Switch compares to animals
switch(animal){
    case 'dog':
        console.log('dog');
        break
    case 'cat':
        console.log('cat');
        break
    default:
        console.log('Neither');
        break
}







