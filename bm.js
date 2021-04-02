'use strict'

// sources below 
// https://www.sitepoint.com/simple-javascript-quiz/
// questions taken from canvas 201 quizzes

//TODO PREGAME
//TODONE generate characters

// let totalScore = 13000;
// let userName = '';

let userName = '';
getUserName();

function GenerateCharacter(name, health, imgUrl) {
    this.name = name;
    this.health = health;
    this.imgUrl = imgUrl;
}
let gameData = {};

let hero = new GenerateCharacter(userName, 500, "img/hero.png");
let enemy = new GenerateCharacter("JB", 500, "img/jb-fighter.gif");

getGameData();

function storeGame() {
    let gameString = JSON.stringify(gameData);
    localStorage.setItem('gameData', gameString);
}

function getGameData() {
    let gameString = localStorage.getItem('gameData');
    if (gameString === 'null') {
        gameString = null;
        console.log('updated status of game string')
    }
    console.log(gameString, 'this is from localstorage');
    if (gameString !== null) {
        console.log(gameString);
        gameData = JSON.parse(gameString);
        console.log('we have game data')
    } else {
        gameData = {
            totalScore: 13000,
            userName: userName,
            hero: hero,
            enemy: enemy,
        };
    }
}

//TODO pull username from localstorage
function getUserName() {
    let userNameString = localStorage.getItem('userName');
    // console.log(userName);

    userName = JSON.parse(userNameString);
    // gameData.hero.name
    // return gameData.userName;
    console.log('this was success')
}

// getUserName();
storeGame();

const heroName = document.getElementById('heroName');
heroName.textContent = gameData.userName;


//TODO initialize the health

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

HeavyQuestion.workingQuestions = [];
MediumQuestion.workingQuestions = [];
LightQuestion.workingQuestions = [];

//TODO set up a function that shows the heavy light medium attacks and pulls from the correct array
// Quiz questions borrowed from JB Tellez and Code Fellows Course 201
new HeavyQuestion("Which of the following best describes fixed positioning?", "Relative to the box’s original location, the box is offset by a certain distance", "The box is placed relative to its containing box", "The box is held in the same location even if the page is scrolled", "Subsequent text is flowed around the positioned box, according to the box’s new left or right location", "answer3");
new HeavyQuestion("What command would we use to create and switch to a new branch called debug in Git?", "git checkout debug", "git checkout -b debug", "git branch new debug", "git branch debug", "answer2");
new HeavyQuestion("In an object functions become known as what?", "a property", "a method", "a variable", "a string", "answer2");
new HeavyQuestion("What is the purpose of z-index in CSS positioning?", "Determines the number of pixels that a user may drag a pixel to reposition it", "Limits the overall width of an element", "In a layout with overlapping elements, determines which element sits on top", "Allows an element to shrink and grow in relation to the size of the browser window", "answer3");
new HeavyQuestion("What type of CSS positioning takes an element out of normal flow and positions it in relation to its containing element?", "Fixed positioning", "Absolute positioning", "Z-index positioning", "Normal positioning", "answer2");
new HeavyQuestion("What is the term we use for a function that is associated with (or, attached to) an object?", "A method", "An action", "An ability", "An instance", "answer1");

new MediumQuestion(`In the following line of code: let car = newCar(‘Subaru’, 10);
"Subaru” and 10 are:`, "Insantations", "Function expressions", "Arguments", "Variables", "answer3");
new MediumQuestion("What is the name we call a function that is associated with/attached to an Object?", "A method", "An ability", "An instance", "An action", "answer1");
new MediumQuestion("Which is not a data type?", "string", "array", "boolean", "attribute", "answer4");
new MediumQuestion("When writing clean code, which should you avoid?", "step by step instructions", "syntax highlighting", "no whitespace", "fixed-width font", "answer3");
new MediumQuestion("What type of CSS positioning is a subset of absolute positioning and positions an element in relation to the browser window?", "Browser positioning", "Float positioning", "Fixed positioning", "Navigation positioning", "answer3");
new MediumQuestion("In JavaScript, what is the difference between the == and === operators?", "=== means equality without type coersion, meaing the two values being compared must be of the same data type (and value) to return true.", "There is no difference, it is simply a preference.", "=== does not exist in JavaScript, its a trick question!", "I don't know, yet", "answer1");
new MediumQuestion("What does the CSS property 'float' do?", "Allows you to take an element in normal flow and place it as for to the left or the right of the containing element as possible", "Moves an element to sit on the top of its container, as if it were floating on water", "Allows an element to appear to 'float' on the display, with other elements passing underneath it when the page is scrolled", "The positioning of the element varies depending upon its relation to other elements whose 'float' property is set to 'true'", "answer1");
new MediumQuestion("When used inside of an object, this refers to:", "The object that it is used in", "The block of code following 'this'", "The function concatenation that it is used inside of", "Any variable that is declared either immediately before or immediately after the use of 'this'", "answer1");
new MediumQuestion("var rabbit = {};", "Object literal notation", "Properties and methods", "Cascading prototypal inheritance", "A constructor function", "answer1");
new MediumQuestion("An object is a collection of:", "properties and methods", "arguments and methods", "arguments and variables", "variables and arrays", "answer1")

new LightQuestion("Your best friend has an account on GitHub with a username of “neatdad22.” He has a repository called “dadjokes.” In order to download the “dadjokes” Git repository on your local machine for the first time, which of the following Git commands would you enter?", "git pull origin https://github.com/neatdad22/dadjokes.git", "git merge https://github.com/neatdad22/dadjokes.git", "git init https://github.com/neatdad22/dadjokes.git", "git clone https://github.com/neatdad22/dadjokes.git", "answer4");
new LightQuestion("What property is used to change the text color of an element?", "textcolor", "font-color", "fontcolor", "color", "answer4");
new LightQuestion("Which is a correct example of concatenation in JavaScript?", "'hello' + 'there' userName", "I like to eat + bananas", "'dogs run through the parking lot all happy' + and stuff", "'I brush my ' + bodyPart + ' in the morning'", "answer4");
new LightQuestion("What tag do you need to run JavaScript code in an html file?", "<script></script>", "<javascript></javascript>", "<js></js>", "<p></p>", "answer1");
new LightQuestion("Which defines the structure of a webpage?", "HTML", "JS", "CSS", "GitHub", "answer1");
new LightQuestion("What Unix command would create a new directory called thursday?", "new directory thursday", "mkdir thursday", "directory thursday", "newdir thursday", "answer2");
new LightQuestion("Which is not an example of a JavaScript statement?", "cookieCount *= 5;", "var NumBooks;", "1 =! loneliestNumber;", "userName = userName.toUpperCase();", "answer3");
new LightQuestion("In modern browsers, localStorage data is stored in:", "A database", "Browser sessions", "The Cloud", "The file system", "answer4");
new LightQuestion("In JavaScript, the = operator is used for what purpose?", "To assign a value to a variable", "It varies, and depends upon the context", "There is no purpose", "To check for equality", "answer1");
new LightQuestion("What does Math.floor() do?", "It truncates the decimal values from a floating point number", "It picks a random number and attaches it to the prototype", "It takes a decimal and invokes it up to the next higher integer value", "It generates decimal numbers of the number digits that are passed in as an argument", "answer1");
new LightQuestion("In the line of code 'var turtle = newAnimal(Michelangelo,1);' Michelangelo and 1 are: ", "Variables", "Function expressions", "Arguments", "Instantiations", "answer3");
new LightQuestion("What does DOM stand for?", "Document Object Model", "Direct Object-oriented Maintenance", "Distribution of Methods", "Domain Oriented Manipulation", "answer1");

//TODO GAME

let currentHealthHero = gameData.hero.health;
let currentHealthEnemy = gameData.enemy.health;
// console.log(currentHealth);
let death = 0;
let currentQuestion = null;


const quizHider = document.getElementById('quiz-ctr-form');

const handleClickOnAttack = function (event) {

    //reset css animations for attack and getting hurt
    resetAnimation(heroHead);
    resetAnimation(enemyHead);

    // hide JB Dialogue box
    responseBox.style.display = 'none';

    if (gameData.hero.health && gameData.enemy.health > death) {
        const attackWeClicked = event.target;
        const id = attackWeClicked.id;
        console.log(attackWeClicked);
        if (id === "attack-item-light" || id === "attack-item-medium" || id === "attack-item-heavy" || id === "lightattack" || id === "mediumattack" || id === "heavyattack") {
            if (id === "attack-item-light" || id === "lightattack") {
                currentQuestion = pickNewLightQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            } else if (id === "attack-item-medium" || id === "mediumattack") {
                currentQuestion = pickNewMediumQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            } else {
                currentQuestion = pickNewHeavyQuestion();
                attackElem.removeEventListener('click', handleClickOnAttack);
            }
        }
        quizQuestion(currentQuestion);
        quizAnswer1(currentQuestion);
        quizAnswer2(currentQuestion);
        quizAnswer3(currentQuestion);
        quizAnswer4(currentQuestion);
    }
    quizHider.style.display = 'block';
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

function pickNewLightQuestion() { // that was weird but working
    if (LightQuestion.workingQuestions.length === 0) {
        LightQuestion.workingQuestions = LightQuestion.allLightQuestions.slice();
        shuffle(LightQuestion.workingQuestions);
    }
    // const previousQuestion = prevLightQuestion;

    let newQuestion = LightQuestion.workingQuestions.pop(); //chooses the last position of the array in example this is position 5
    if (newQuestion === prevLightQuestion) { // if this position in the array is the same as the previous arrays position 0 do this
        LightQuestion.workingQuestions.unshift(newQuestion); // put array position 5 at array position 0
        newQuestion = LightQuestion.workingQuestions.pop(); // removes number 4 of the first array 
    }
    prevLightQuestion = newQuestion;
    return newQuestion;
    // shuffle(LightQuestion.allLightQuestions);
    // for (let question of LightQuestion.workingQuestions) {
    //     if (question !== previousQuestion) {
    //         prevLightQuestion = question;
    //         break;
    //     }
    // }
    // console.log(LightQuestion.workingQuestions[0])
    // return LightQuestion.workingQuestions[0];
}

function pickNewMediumQuestion() {
    if (MediumQuestion.workingQuestions.length === 0) {
        MediumQuestion.workingQuestions = MediumQuestion.allMediumQuestions.slice();
        shuffle(MediumQuestion.workingQuestions);
    }
    // const previousQuestion = prevMediumQuestion;

    let newQuestion = MediumQuestion.workingQuestions.pop(); //chooses the last position of the array in example this is position 5
    if (newQuestion === prevMediumQuestion) { // if this position in the array is the same as the previous arrays position 0 do this
        MediumQuestion.workingQuestions.unshift(newQuestion); // put array position 5 at array position 0
        newQuestion = MediumQuestion.workingQuestions.pop(); // removes number 4 of the first array 
    }
    prevMediumQuestion = newQuestion;
    return newQuestion;
    // const previousQuestion = prevMediumQuestion;

    // shuffle(MediumQuestion.allMediumQuestions);
    // for (let question of MediumQuestion.allMediumQuestions) {
    //     if (question !== previousQuestion) {
    //         prevMediumQuestion = question;
    //         break;
    //     }
    // }
    // return MediumQuestion.allMediumQuestions[0];
}
function pickNewHeavyQuestion() {
    if (HeavyQuestion.workingQuestions.length === 0) {
        HeavyQuestion.workingQuestions = HeavyQuestion.allHeavyQuestions.slice();
        shuffle(HeavyQuestion.workingQuestions);
    }
    // const previousQuestion = prevLightQuestion;

    let newQuestion = HeavyQuestion.workingQuestions.pop(); //chooses the last position of the array in example this is position 5
    if (newQuestion === prevHeavyQuestion) { // if this position in the array is the same as the previous arrays position 0 do this
        HeavyQuestion.workingQuestions.unshift(newQuestion); // put array position 5 at array position 0
        newQuestion = HeavyQuestion.workingQuestions.pop(); // removes number 4 of the first array 
    }
    prevHeavyQuestion = newQuestion;
    return newQuestion;
    // const previousQuestion = prevHeavyQuestion;

    // shuffle(HeavyQuestion.allHeavyQuestions);
    // for (let question of HeavyQuestion.allHeavyQuestions) {
    //     if (question !== previousQuestion) {
    //         prevHeavyQuestion = question;
    //         break;
    //     }
    // }
    // return HeavyQuestion.allHeavyQuestions[0];
}


function quizQuestion(selectedQuestion) {
    const questionElem = document.getElementById("quiz-question");
    questionElem.textContent = selectedQuestion.question;

}

function quizAnswer1(selectedQuestion) {
    const answer1Elem = document.getElementById("answer1label");
    answer1Elem.textContent = selectedQuestion.answer1;
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


heroHealthCtr.textContent = gameData.hero.health;
enemyHealthCtr.textContent = gameData.enemy.health;

// Initialize Hero percentage to 100%
let heroPercent = percentageHealth(gameData.hero);
let enemyPercent = percentageHealth(gameData.enemy);

//Assign hero percentage as width value for the healthbar div width
heroHealthBar.style.width = `${heroPercent}%`;
enemyHealthBar.style.width = `${enemyPercent}%`;

//function to calculate enemy and hero's percentage of health
function percentageHealth(person) {
    let percentHealth = (person.health / 500) * 100;
    return percentHealth;
}


// Get hero images
const heroHead = document.getElementById('hero-img');
const enemyHead = document.getElementById('enemy-img');

// Get JB Response box
const responseBox = document.getElementById('enemyResponse');

// JB Quotes

const jbQuotes = [
    'You don\'t know...........YET!!!',
    'Where\'s my applause box....',
    'All right...',
    'Sara, do you wanna take this one?',
    `Looks like ${gameData.userName}'s been disconnected from Zoom...`,
    `Anyone wanna help ${gameData.userName} with this one?`,
];

const defeatQuote = ["You really think you can defeat me???", `Alright folks, ${gameData.userName} is gonna teach today`, "This is why they pay us the big bucks"]

function generateDefeatQuote() {
    shuffle(defeatQuote);
    return defeatQuote[0];
}

const niceJobQuote = ["Not too shabby", "That's exactly right!", "...heh..."]

function generateNiceQuote() {
    shuffle(niceJobQuote);
    return niceJobQuote[0];
}

function generateJBQuote() {
    shuffle(jbQuotes);
    return jbQuotes[0];
}

function resetAnimation(head) {
    head.style.animation = 'reset 500ms';
}


function heroHurtAnimation() {
    enemyHead.style.animation = 'enemyAttack 300ms';
    heroHead.style.animation = 'heroHurt 500ms ease-in';
}




//TODONE remove event listener when click happens and reapply when submit button is clicked/after damage is taken
//TODONE set up a function that determines if the question was answered correctly
//1. TODO set up a function that determines damage taken by characters
const handleClickOnSubmit = function (event) {
    event.preventDefault();
    attackElem.addEventListener('click', handleClickOnAttack);

    let selectedAnswer = event.target.answer.value
    gameData.totalScore -= 1000;

    // IF ANSWER CORRECT
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Attack Animations
        heroHead.style.animation = 'heroAttack 300ms forwards';
        enemyHead.style.animation = 'enemyHurt 500ms ease-in forwards';
        // Decrease enemy health and update text content        
        gameData.enemy.health -= currentQuestion.damage;
        storeGame();
        enemyHealthCtr.textContent = gameData.enemy.health;
        // calculate hero percentage and assign width to health bar div
        enemyPercent = percentageHealth(gameData.enemy);
        enemyHealthBar.style.width = `${enemyPercent}%`;


        // if health is below 150, turn red
        if (gameData.enemy.health < 301 && gameData.enemy.health > 249) {
            responseBox.style.display = 'grid';
            responseBox.textContent = generateNiceQuote();
        }


        // if health is below 150, turn red
        if (gameData.enemy.health < 150) {
            enemyHealthBar.style.backgroundColor = 'red';
            responseBox.style.display = 'grid';
            responseBox.textContent = generateDefeatQuote();
        }
        alert('Yes, you got it!');

    } else if (selectedAnswer !== currentQuestion.correctAnswer) {
        gameData.totalScore -= 500;
        //JB RESPONSE --  1. make box visible..   2. fill response in box
        responseBox.style.display = 'grid';
        responseBox.textContent = generateJBQuote();


        // Enemy Attack animations
        setTimeout(heroHurtAnimation, 4000);
        gameData.hero.health -= currentQuestion.damage;
        storeGame();

        heroHealthCtr.textContent = gameData.hero.health;

        // calculate hero percentage and assign width to health bar div
        heroPercent = percentageHealth(gameData.hero);
        heroHealthBar.style.width = `${heroPercent}%`;

        // if health is below 150, turn red
        if (gameData.hero.health < 150) {
            heroHealthBar.style.backgroundColor = 'red';
        }

        alert('Not quite.');
    }
    const inputs = document.querySelectorAll('input[type=radio]:checked');
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].checked = false;
    }

    if (gameData.hero.health <= 0) {
        let lost = "YOU DIED.";
        // make sure it doesn't display a negative number for health, then calling the healthbar animation.
        heroHealthCtr.textContent = 0;

        localStorage.setItem("endresult", JSON.stringify(lost));
        localStorage.setItem("endscore", JSON.stringify(gameData.totalScore));
        storeGame();
        answerSubmitButton.removeEventListener('submit', handleClickOnSubmit)
        window.location.replace("results.html");
    }
    if (gameData.enemy.health <= 0) {
        gameData.totalScore += 10000;
        let win = "You Won!";
        // make sure it doesn't display a negative number for health, then calling the healthbar animation.
        enemyHealthCtr.textContent = 0;
        heroPercent = percentageHealth(gameData.hero);
        heroHealthBar.style.width = `${heroPercent}%`;


        localStorage.setItem("endresult", JSON.stringify(win));
        localStorage.setItem("endscore", JSON.stringify(gameData.totalScore));
        enemyHead.style.animation = 'bossDied 4s';
        answerSubmitButton.removeEventListener('submit', handleClickOnSubmit);

        setTimeout(() => { window.location.replace("results.html"); }, 2500)


        // window.location.replace("results.html");
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

// TODO: when user clicks on light attack, choose a constructed light question randomly from lightquestion array (HeavyQuestion.all) and populate it in the quiz-ctr div with the question, answers on radio buttons, and a correct answer specified. Once they submit, calculate if they got it right. If they did, remove health from enemy. If they did not, remove health from hero. If either hero or enemy is not dead, let them select another attack.



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


//TODO set up a function that chooses a random question and its answers with a correct answer 




























































































/* end */