// Numbers and Math!

let age = 5;

age = age + 5;

/* operators

+ plus
- minus
= equals
* multiplied by
// floor division
% modulo operator

short cuts:
+=
-=
/=
*=

*/

//Array Literals

const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);

console.log (numbers[2]) //3


numbers[2] = 9
console.log (numbers[2]) //9

//Const can't be re-assigned. But the array is being mutated, not re-assigned.


const colors = ['red', 'blue', 'green', 'yellow'];
colors[4] = 'orange';
console.log(colors);

console.push('white'); //Adds it to the array
console.log(colors);

colors.pop(); //Removes last item form the array
console.log(colors);

console.shift(); //Removes the first item
console.log(colors);

console.log(colors.indexOf('yellow')); //Index finding

const myArray = ['red', 4, null, true, [1,2,3]]

console.log(myArray[4][0]) //Returns 1





















