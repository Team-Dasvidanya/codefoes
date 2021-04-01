function results() {
    winOrLose = localStorage.getItem("endresult");
    JSON.parse(winOrLose);
    return winOrLose;
}

function score() {
    score = localStorage.getItem("endscore");
    JSON.parse(score);
    return score;

}

// results();
console.log(results());

const resultContainer = document.getElementById("results");
let gameResult = JSON.parse(results())

resultContainer.textContent = gameResult;

const scoreShown = document.getElementById('thisScore');
scoreShown.textContent = JSON.parse(score());

// Run animations
const head = document.getElementById('hero-head');


if (gameResult === 'You Won!'){
 head.style.animation = 'youWon 2s';
}
if (gameResult === 'YOU DIED.') {
    head.style.animation = 'youDied 3s'
}