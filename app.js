'use strict'

function setUserName(event) {
    event.preventDefault();
    let stringifiedName = JSON.stringify(event.target.userName.value);
    console.log('eventValue', event.target.userName.value);
    localStorage.setItem("userName", stringifiedName);
    document.getElementById("welcome-user-h3").textContent = "Welcome, " + JSON.parse(stringifiedName);
    userInputField.value = '';
}

const userInputField = document.querySelector('#userNameForm>div>input');
console.log(userInputField);


const userNameFormSubmit = document.getElementById('userNameForm');
userNameFormSubmit.addEventListener('submit', setUserName);
console.log('username', userNameFormSubmit);

function score() {
    score = localStorage.getItem("endscore");
    JSON.parse(score);
    return score;
}

const previousScoreShown = document.getElementById('previousScores');
previousScoreShown.textContent = JSON.parse(score());


