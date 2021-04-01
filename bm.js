'use strict'

// sources below 
// https://www.sitepoint.com/simple-javascript-quiz/
// questions taken from canvas 201 quizzes

//TODO PREGAME
//TODONE generate characters
let totalScore = 13000;
let userName = '';

function GenerateCharacter(name, health, imgUrl) {
    this.name = name;
    this.health = health;
    this.imgUrl = imgUrl;
}

let hero = new GenerateCharacter(getUserName(), 500, "img/hero.png");
let enemy = new GenerateCharacter("JB", 500, "img/JB.png");

//TODO pull username from localstorage
function getUserName() {
    userName = localStorage.getItem('userName');
    console.log(userName);

    JSON.parse(userName);
    return userName;
}

getUserName();

const heroName = document.getElementById('heroName');
heroName.textContent = JSON.parse(userName);





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
    this.damage = 200;
    HeavyQuestion.allHeavyQuestions.push(this);
};

function MediumQuestion(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    this.damage = 100;
    MediumQuestion.allMediumQuestions.push(this);
}

function LightQuestion(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    this.damage = 50;
    LightQuestion.allLightQuestions.push(this);
}

let lightAttack = [];
let mediumAttack = [];
let heavyAttack = [];

HeavyQuestion.allHeavyQuestions = [];
MediumQuestion.allMediumQuestions = [];
LightQuestion.allLightQuestions = [];


//TODO set up a function that shows the heavy light medium attacks and pulls from the correct array
new HeavyQuestion("Which of the following best describes fixed positioning?", "Relative to the box’s original location, the box is offset by a certain distance", "The box is placed relative to its containing box", "The box is held in the same location even if the page is scrolled", "Subsequent text is flowed around the positioned box, according to the box’s new left or right location", "answer3");
new HeavyQuestion("What command would we use to create and switch to a new branch called debug in Git?", "git checkout debug", "git checkout -b debug", "git branch new debug", "git branch debug", "answer2");
new HeavyQuestion("In an object functions become known as what?", "a property", "a method", "a variable", "a string", "answer2");


new MediumQuestion(`In the following line of code: let car = newCar(‘Subaru’, 10);
"Subaru” and 10 are:`, "Insantations", "Function expressions", "Arguments", "Variables", "answer3");
new MediumQuestion("What is the name we call a function that is associated with/attached to an Object?", "A method", "An ability", "An instance", "An action", "answer1");
new MediumQuestion("Which is not a data type?", "string", "array", "boolean", "attribute", "answer4");
new MediumQuestion("When writing clean code, which should you avoid?", "step by step instructions", "syntax highlighting", "no whitespace", "fixed-width font", "answer3");


new LightQuestion("Your best friend has an account on GitHub with a username of “neatdad22.” He has a repository called “dadjokes.” In order to download the “dadjokes” Git repository on your local machine for the first time, which of the following Git commands would you enter?", "git pull origin https://github.com/neatdad22/dadjokes.git", "git merge https://github.com/neatdad22/dadjokes.git", "git init https://github.com/neatdad22/dadjokes.git", "git clone https://github.com/neatdad22/dadjokes.git", "answer4");
new LightQuestion("What property is used to change the text color of an element?", "textcolor", "font-color", "fontcolor", "color", "answer4");
new LightQuestion("Which is a correct example of concatenation in JavaScript?", "'hello' + 'there' userName", "I like to eat + bananas", "'dogs run through the parking lot all happy' + and stuff", "'I brush my ' + bodyPart + ' in the morning'", "answer4");
new LightQuestion("What tag do you need to run JavaScript code in an html file?", "<script></script>", "<javascript></javascript>", "<js></js>", "<p></p>", "answer1");
new LightQuestion("Which defines the structure of a webpage?", "HTML", "JS", "CSS", "GitHub", "answer1");
new LightQuestion("What Unix command would create a new directory called thursday?", "new directory thursday", "mkdir thursday", "directory thursday", "newdir thursday", "answer2");
new LightQuestion("Which is not an example of a JavaScript statement?", "cookieCount *= 5;", "var NumBooks;", "1 =! loneliestNumber;", "userName = userName.toUpperCase();", "answer3");



//TODO GAME

let currentHealthHero = hero.health;
let currentHealthEnemy = enemy.health;
// console.log(currentHealth);
let death = 0;
let currentQuestion = null;


const quizHider = document.getElementById('quiz-ctr-form');

const handleClickOnAttack = function (event) {

    //reset css animations for attack and getting hurt
    resetAnimation(heroHead);
    resetAnimation(enemyHead);

    if (hero.health && enemy.health > death) {
        const attackWeClicked = event.target;
        const id = attackWeClicked.id;
        console.log(attackWeClicked);
        if (id === "attack-item-light" || id === "attack-item-medium" || id === "attack-item-heavy") {
            if (id === "attack-item-light") {
                currentQuestion = pickNewLightQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            } else if (id === "attack-item-medium") {
                currentQuestion = pickNewMediumQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            } else {
                currentQuestion = pickNewHeavyQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            }
        }
        quizHider.style.display = 'block';
        quizQuestion(currentQuestion);
        quizAnswer1(currentQuestion);
        quizAnswer2(currentQuestion);
        quizAnswer3(currentQuestion);
        quizAnswer4(currentQuestion);
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

function pickNewLightQuestion() {
    const previousQuestion = prevLightQuestion;

    shuffle(LightQuestion.allLightQuestions);
    for (let question of LightQuestion.allLightQuestions) {
        if (question !== previousQuestion) {
            prevLightQuestion = question;
            break;
        }
    }
    console.log(LightQuestion.allLightQuestions[0])
    return LightQuestion.allLightQuestions[0];
}

function pickNewMediumQuestion() {
    const previousQuestion = prevMediumQuestion;

    shuffle(MediumQuestion.allMediumQuestions);
    for (let question of MediumQuestion.allMediumQuestions) {
        if (question !== previousQuestion) {
            prevMediumQuestion = question;
            break;
        }
    }
    return MediumQuestion.allMediumQuestions[0];
}
function pickNewHeavyQuestion() {
    const previousQuestion = prevHeavyQuestion;

    shuffle(HeavyQuestion.allHeavyQuestions);
    for (let question of HeavyQuestion.allHeavyQuestions) {
        if (question !== previousQuestion) {
            prevHeavyQuestion = question;
            break;
        }
    }
    return HeavyQuestion.allHeavyQuestions[0];
}


function quizQuestion(selectedQuestion) {
    const questionElem = document.getElementById("quiz-question");
    questionElem.textContent = selectedQuestion.question;

}

function quizAnswer1(selectedQuestion) {
    const answer1Elem = document.getElementById("answer1label");
    answer1Elem.textContent = selectedQuestion.answer1;
    console.log(answer1Elem);
}

function quizAnswer2(selectedQuestion) {
    const answer2Elem = document.getElementById("answer2label");
    answer2Elem.textContent = selectedQuestion.answer2;

}
function quizAnswer3(selectedQuestion) {
    const answer3Elem = document.getElementById("answer3label");
    answer3Elem.textContent = selectedQuestion.answer3;

}
function quizAnswer4(selectedQuestion) {
    const answer4Elem = document.getElementById("answer4label");
    answer4Elem.textContent = selectedQuestion.answer4;

}



// Render Character Health on Screen to 500 (DEFAULT)

let heroHealthCtr = document.getElementById('hero-health');
let enemyHealthCtr = document.getElementById('enemy-health');

let heroHealthBar = document.getElementById('heroHealthBar');
let enemyHealthBar = document.getElementById('enemyHealthBar');


heroHealthCtr.textContent = hero.health;
enemyHealthCtr.textContent = enemy.health;

// Initialize Hero percentage to 100%
let heroPercent = percentageHealth(hero);
let enemyPercent = percentageHealth(enemy);

//Assign hero percentage as width value for the healthbar div width
heroHealthBar.style.width = `${heroPercent}%`;
enemyHealthBar.style.width = `${enemyPercent}%`;

//function to calculate enemy and hero's percentage of health
function percentageHealth(person) {
    let percentHealth = (person.health / 500) * 100;
    return percentHealth;
}



const heroHead = document.getElementById('hero-img');
const enemyHead = document.getElementById('enemy-img');

function resetAnimation(head) {
    head.style.animation = 'reset 500ms';
}

//TODONE remove event listener when click happens and reapply when submit button is clicked/after damage is taken
//TODONE set up a function that determines if the question was answered correctly
//1. TODO set up a function that determines damage taken by characters
const handleClickOnSubmit = function (event) {
    event.preventDefault();
    attackElem.addEventListener('click', handleClickOnAttack);

    let selectedAnswer = event.target.answer.value
    totalScore -= 1000;

    // IF ANSWER CORRECT
    if (selectedAnswer === currentQuestion.correctAnswer) {

        // Attack Animations
        heroHead.style.animation = 'heroAttack 300ms forwards';
        enemyHead.style.animation = 'enemyHurt 500ms ease-in forwards';     

        // Decrease enemy health and update text content        
        enemy.health -= currentQuestion.damage;
        enemyHealthCtr.textContent = enemy.health;

        // calculate hero percentage and assign width to health bar div
        enemyPercent = percentageHealth(enemy);
        enemyHealthBar.style.width = `${enemyPercent}%`;


        // if health is below 150, turn red
        if (enemy.health < 150) {
            enemyHealthBar.style.backgroundColor = 'red';
        }


        alert('you got it');

    } else if (selectedAnswer !== currentQuestion.correctAnswer) {
        
        //JB RESPONSE


        //Attack animations
        enemyHead.style.animation = 'enemyAttack 300ms';
        heroHead.style.animation = 'heroHurt 500ms ease-in';
        
        
        hero.health -= 50;
        heroHealthCtr.textContent = hero.health;

        // calculate hero percentage and assign width to health bar div
        heroPercent = percentageHealth(hero);
        heroHealthBar.style.width = `${heroPercent}%`;

        // if health is below 150, turn red
        if (hero.health < 150) {
            heroHealthBar.style.backgroundColor = 'red';
        }

        alert('incorrect');
    }
    const inputs = document.querySelectorAll('input[type=radio]:checked');
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].checked = false;
    }

    if (hero.health <= 0) {
        let lost = "YOU DIED.";
        localStorage.setItem("endresult", JSON.stringify(lost));
        localStorage.setItem("endscore", JSON.stringify(totalScore));
        answerSubmitButton.removeEventListener('submit', handleClickOnSubmit)
        window.location.replace("results.html");
    }
    if (enemy.health <= 0) {
        let win = "You Won!";
        localStorage.setItem("endresult", JSON.stringify(win));
        localStorage.setItem("endscore", JSON.stringify(totalScore));
        answerSubmitButton.removeEventListener('submit', handleClickOnSubmit)
        window.location.replace("results.html");
    }

    quizHider.style.display = 'none';
    console.log(event.target.answer.value, "test");
};


//TODONE add an event listener for clicks or submit on answers or set it up like a quiz form with radio buttons
const attackElem = document.getElementById('attack-ctr');
attackElem.addEventListener('click', handleClickOnAttack);

const answerSubmitButton = document.getElementById('quiz-ctr-form');
console.log(answerSubmitButton);
answerSubmitButton.addEventListener('submit', handleClickOnSubmit);

// TODO: when user clicks on light attack, choose a constructed light question randomly from lightquestion array (LightQuestion.all) and populate it in the quiz-ctr div with the question, answers on radio buttons, and a correct answer specified. Once they submit, calculate if they got it right. If they did, remove health from enemy. If they did not, remove health from hero. If either hero or enemy is not dead, let them select another attack.



//2. TODO set up a function that evalutes the health of hero and enemy to see if it is at or below 0 and generate the post game
//TODO POST GAME
// 3. TODO store game data for correct answers in localstorage
//TODO 4. failure and victory displays on results.html
// 5. When game is finished total the number of correct answers and give score along with a you lose or win h1
//TODO set up scoring function STRECH GOAL
//TODO 6. return to homepage button
//TODO 7. update homepage with scores from localstorage


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