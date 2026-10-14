// Write your code below 
function handleFormSubmit(event) {

    event.preventDefault();
    const usernameEntered = event.target.username.value;
    const emailEntered = event.target.email.value;
    const phoneEntered = event.target.phone.value;

localStorage.setItem('username', usernameEntered);
localStorage.setItem('email', emailEntered);
localStorage.setItem('phone', phoneEntered);
}

module.exports = handleFormSubmit;