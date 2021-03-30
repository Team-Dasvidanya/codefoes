'use strict'

// sources below https://www.sitepoint.com/simple-javascript-quiz/
// 

let gameData = {};

let attackLevel = '',
    curAttack = {},
    randInt = 0,
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0;

gameData = {
    step: 1,
    hero: {},
    enemy: {}
}

//TODO set up a function that chooses a random question and its answers with a correct answer 

lightAttack = [];
mediumAttack = [];
heavyAttack = [];

function HeavyQuestion(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

}


function randomNum(max, min) {
    // generate a random number

    // min not required
    if (min === undefined || min === '' || min === null) {
        // min default value
        min = 0;
    }

    // random number, yay
    return Math.floor(Math.random() * (max - min) + min);
}

function attackMultiplier(attacker, curAttack) {
    var defender = 'enemy';
    if (attacker === 'enemy') {
        defender = 'hero';
    }

    if (gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0) {
        // weakness exists
        curAttack.hp *= 2;
    }

    if (gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0) {
        // weakness exists
        curAttack.hp /= 2;
    }

    curAttack.hp = Math.floor(curAttack.hp);
    return curAttack.hp;
}