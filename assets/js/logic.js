var startButtonEl = document.getElementById("start");
var startScreenDivEl = document.getElementById("start-screen");
var questionsDivEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesDivEl = document.getElementById("choices");
var endScreenDiv = document.getElementById("end-screen");
var finalScoreSpanEl = document.getElementById("final-score");
var submitButtonEl = document.getElementById("submit");
var initialTextEl = document.getElementById("initials");
var feedbackDivEl = document.getElementById("feedback");
var wrapperDiv = document.getElementById("wrapper");
var timeSpanEl = document.getElementById("time");
var i=0;
var score = 0;
var timer;
var timerCount = questions.length * 5;
var isCorrect;
var scoreArray = [];

for(var b=1; b<=3; b++) {
    var button = document.createElement("button");
    button.setAttribute("id", b);
    choicesDivEl.appendChild(button);
}

startButtonEl.addEventListener("click", function() {
    i=0;
    score=0;
    startScreenDivEl.setAttribute("class", "hide");
    questionsDivEl.setAttribute("class", "start");
    timerCount = questions.length * 5;
    startTimer();
    getQuestion();
})


function getQuestion() {
    questionTitleEl.textContent = i + 1 + ". " + questions[i].question;
    var buttonId = 1;
    questions[i].answers.forEach((a) => {
        var button = document.getElementById(buttonId);
        button.textContent = a;
        buttonId++;
    });
}

var button1 = document.getElementById("1");
button1.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button1.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);
var button2 = document.getElementById("2");
button2.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button2.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);
var button3 = document.getElementById("3");
button3.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button3.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timeSpanEl.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
      }
    }, 1000);
}

submitButtonEl.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    var text = initialTextEl.value + "  " + score;
    console.log(text);
    if(localStorage.getItem("scores") !== null) {
        scoreArray = JSON.parse(localStorage.getItem("scores"));
    }
    scoreArray.push(text);
    localStorage.setItem("scores", JSON.stringify(scoreArray));
    endScreenDiv.setAttribute("class", "hide");
    startScreenDivEl.setAttribute("class", "start");
    initialTextEl.value = "";
});



