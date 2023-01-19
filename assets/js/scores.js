var highscoresOlEl = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

var scores;

scores = JSON.parse(localStorage.getItem("scores"));
if(scores !== null) {
    scores.forEach((s) => {
        var li = document.createElement("li");
        li.textContent = s;
        highscoresOlEl.appendChild(li);
    });
}

clearButton.addEventListener("click", function() {
    localStorage.removeItem("scores");
    highscoresOlEl.innerHTML = "";
})
