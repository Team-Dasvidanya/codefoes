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
resultContainer.textContent = JSON.parse(results());

const scoreShown = document.getElementById('thisScore');
scoreShown.textContent = JSON.parse(score());