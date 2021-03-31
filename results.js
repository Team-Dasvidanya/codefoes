function results() {
    winOrLose = localStorage.getItem("endresult");
    JSON.parse(winOrLose);
    return winOrLose;
}

// results();
console.log(results());

const resultContainer = document.getElementById("results");
resultContainer.textContent = JSON.parse(results());