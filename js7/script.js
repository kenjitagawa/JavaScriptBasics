// DOM Document Object Model

// Single Element Selectors

const list = document.getElementById('list');
console.log(list);

const list2 = document.querySelector('#list');
console.log(list2)

const listItems = document.querySelector('.list-item') ; // Only the first it finds on the DOM
console.log(listItems);

const listItems = document.querySelectorAll('.list-item') ; // Only the first it finds on the DOM
console.log(listItems);

listItems.forEach(item => {
    console.log(item.textContent);
})


// DOM Manipulation

list.firstElementChild.textContent = 'New Item'; /* innerText or innerHTML (
 <h1>New Item on the list! </h1>    
) */


list.firstElementChild.remove(); //or lastElementChild

// Styles

list.lastElementChild.style.background = 'red';


















