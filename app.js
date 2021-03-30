'use strict'

function setUserName(event) {
    event.preventDefault();
    let stringifiedName = JSON.stringify(event.target.userName.value);
    console.log('eventValue', event.target.userName.value);
    localStorage.setItem('userName', stringifiedName);
}

const userNameFormSubmit = document.getElementById('userNameForm');
userNameFormSubmit.addEventListener('submit', setUserName);
console.log('username', userNameFormSubmit);