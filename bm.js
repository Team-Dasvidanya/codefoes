'use strict'

// sources below 
// https://www.sitepoint.com/simple-javascript-quiz/
// 

//TODO PREGAME
//TODONE generate characters

console.log(getUserName());

function GenerateCharacter(name, health, imgUrl) {
    this.name = name;
    this.health = health;
    this.imgUrl = imgUrl;
}



let hero = new GenerateCharacter(getUserName(), 500, "img/hero.png");
let enemy = new GenerateCharacter("JB", 500, "img/JB.png");

//TODO pull username from localstorage
function getUserName() {
    let userName = localStorage.getItem('userName');

    if (userName !== null) {
        let parsedUserName = userName /*JSON.parse(userName);*/
        return parsedUserName;
    } else {
        return null;
    }
}

function setUserName(event) {
    event.preventDefault();
    let stringifiedName = JSON.stringify(event.target.userName.value);
    console.log('eventValue', event.target.userName.value);
    localStorage.setItem('userName', stringifiedName);
 }

const userNameFormSubmit = document.getElementById('userNameForm');
userNameFormSubmit.addEventListener('submit', setUserName);
console.log('username', userNameFormSubmit);

//TODO initialize the health

// function health() {
//     let healthTotal = 500;
// }

/* const heroHealth = document.getElementById("hero-health");
const enemyHealth = document.getElementById("enemy-health");
console.log("heroHealth", heroHealth);
heroHealth.textContent = "500";
enemyHealth.textContent = "500"; */

//TODO set up quesions and answers in arrays with correct answers identified
let lightAttack = [];
let mediumAttack = [];
let heavyAttack = [];

//TODO set up a function that shows the heavy light medium attacks and pulls from the correct array
let q1 = new HeavyQuestion("what?", "yes", "no", "not quite", "maybe");

function HeavyQuestion(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

}

function MediumQuestion(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

}

function LightQuestion(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

}

//TODO GAME
//TODO generate random question
//TODO add an event listener for clicks or submit on answers or set it up like a quiz form with radio buttons
//TODO set up a function that determines if the question was answered correctly
//TODO set up a function that determines damage taken by characters
//TODO set up a function that evalutes the health of hero and enemy to see if it is at or below 0 and generate the post game

//TODO POST GAME
//TODO failure and victory displays
//TODO store the result of the game in localstorage
//TODO set up scoring function
//TODO return to homepage button
//TODO update homepage with scores from localstorage


// let gameData = {};

// let attackLevel = '',
//     curAttack = {},
//     randInt = 0,
//     defendProgressInt = null,
//     defendProgressComplete = 0,
//     progressInt = null,
//     progressComplete = 0;

// gameData = {
//     step: 1,
//     hero: {},
//     enemy: {}
// }

//TODO set up a function that chooses a random question and its answers with a correct answer 




// function randomNum(max, min) {
//     // generate a random number

//     // min not required
//     if (min === undefined || min === '' || min === null) {
//         // min default value
//         min = 0;
//     }

//     // random number, yay
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function attackMultiplier(attacker, curAttack) {
//     var defender = 'enemy';
//     if (attacker === 'enemy') {
//         defender = 'hero';
//     }

//     if (gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0) {
//         // weakness exists
//         curAttack.hp *= 2;
//     }

//     if (gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0) {
//         // weakness exists
//         curAttack.hp /= 2;
//     }

//     curAttack.hp = Math.floor(curAttack.hp);
//     return curAttack.hp;
// }


























































































/* end */