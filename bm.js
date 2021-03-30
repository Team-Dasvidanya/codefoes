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

function HeavyQuestion(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    HeavyQuestion.allHeavyQuestions.push(this);
};

function MediumQuestion(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    MediumQuestion.allMediumQuestions.push(this);
}

function LightQuestion(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    LightQuestion.allLightQuestions.push(this);
}

let lightAttack = [];
let mediumAttack = [];
let heavyAttack = [];

HeavyQuestion.allHeavyQuestions = [];
MediumQuestion.allMediumQuestions = [];
LightQuestion.allLightQuestions = [];

//TODO set up a function that shows the heavy light medium attacks and pulls from the correct array
let qh1 = new HeavyQuestion("what?", "yes", "no", "not quite", "maybe", "answer1");
let qh2 = new HeavyQuestion("what1?", "yes1", "no1", "not quite1", "maybe1", "answer1");

let qm1 = new MediumQuestion("what1?", "yes1", "no1", "not quite1", "maybe1", "answer1");
let qm2 = new MediumQuestion("what2?", "yes2", "no2", "not quite2", "maybe2", "answer1");

let ql1 = new LightQuestion("what1?", "yes1", "no1", "not quite1", "maybe1", "answer1");
let ql2 = new LightQuestion("what2?", "yes2", "no2", "not quite2", "maybe2", "answer1");



// usedQuestions = [];


//TODO GAME

let currentHealth = 500;
let death = 0; 

const handleClickOnAttack = function(event) {
    if (currentHealth > death) {
        const attackWeClicked = event.target;
        const id = attackWeClicked.id;
        if (id === "attack-item-light" || id === "attack-item-medium" || id === "attack-item-heavy") {
            if (id === "attack-item-light"){
                pickNewLightQuestion();
            } else if (id === "attack-item-medium"){
                pickNewMediumQuestion();
            } else {
                pickNewHeavyQuestion();
        }
    }
}


//TODO generate random question

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

let prevLightQuestion = null;
let prevMediumQuestion = null;
let prevHeavyQuestion = null;

function pickNewLightQuestion(){
    const previousQuestion = prevLightQuestion;

    shuffle(LightQuestion.all);
    for (let question of LightQuestion.allLightQuestions) {
        if (question !== previousQuestion) {
            prevLightQuestion = question;
            break;
        }
    }
}
function pickNewMediumQuestion(){
    const previousQuestion = prevMediumQuestion;

    shuffle(MediumQuestion.all);
    for (let question of MediumQuestion.allMediumQuestions) {
        if (question !== previousQuestion) {
            prevMediumQuestion = question;
            break;
        }
    }
}
function pickNewHeavyQuestion(){
    const previousQuestion = prevHeavyQuestion;

    shuffle(HeavyQuestion.all);
    for (let question of HeavyQuestion.allHeavyQuestions) {
        if (question !== previousQuestion) {
            prevHeavyQuestion = question;
            break;
        }
    }
}


function quizQuestion() {
    const questionElem = document.getElementById("quiz-question");
    questionElem.textContent = ql1.question;

}

function quizAnswer1() {
    const answer1Elem = document.getElementById("answer1label");
    answer1Elem.textContent = ql1.answer1;
    console.log(answer1Elem);
}

function quizAnswer2() {
    const answer2Elem = document.getElementById("answer2label");
    answer2Elem.textContent = ql1.answer2;

}
function quizAnswer3() {
    const answer3Elem = document.getElementById("answer3label");
    answer3Elem.textContent = ql1.answer3;

}
function quizAnswer4() {
    const answer4Elem = document.getElementById("answer4label");
    answer4Elem.textContent = ql1.answer4;

}


//TODO add an event listener for clicks or submit on answers or set it up like a quiz form with radio buttons
const attackElem = document.getElementById('attack-ctr');
attackElem.addEventListener('click', handleClickOnAttack);

// TODO: when user clicks on light attack, choose a constructed light question randomly from lightquestion array (LightQuestion.all) and populate it in the quiz-ctr div with the question, answers on radio buttons, and a correct answer specified. Once they submit, calculate if they got it right. If they did, remove health from enemy. If they did not, remove health from hero. If either hero or enemy is not dead, let them select another attack.


quizQuestion();
quizAnswer1();
quizAnswer2();
quizAnswer3();
quizAnswer4();



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