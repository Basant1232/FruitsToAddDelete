let form = document.getElementsByTagName('form')[0];

const formNew = document.querySelector('form');
const button = document.querySelector('button');
const newInput = document.createElement('input');
form.insertBefore(newInput, button);

Object.assign(newInput,{
    type: 'text',
    id: 'description',
    placeholder: 'Enter fruit description'
    
})



// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.


// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }


    const fruitToAdd = document.querySelector('#fruit-to-add')
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    const newLiText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    fruititems.appendChild(newLi);

    const newP = document.createElement('p');
    const pDesc = document.createTextNode(fruitDescription);
    newP.appendChild(pDesc);
    newP.style.fontStyle = 'italic';
    newLi.appendChild(newP);

    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';
    newLi.appendChild(deleteBtn);

    

  
    
    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.

    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});

const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {
    const textEntered = event.target.value.toLowerCase();
    const fruit = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruit.length; i++){
        const fruitName = fruit[i].firstChild.textContent.toLowerCase();

        const pDesc = fruit[i].querySelector('p');

        const fruitDesc = pDesc ? pDesc.textContent.toLowerCase() : '';

            if(fruitName.includes(textEntered)||fruitDesc.includes(textEntered)){
                fruit[i].style.display = 'flex';
            } else {
                fruit[i].style.display = 'none';
     }
       
    }
})

// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.


