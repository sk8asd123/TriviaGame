// set random for problem by passing in the max number that will appear in the problem
function random(maxNumber) {
    "use strict";
    return Math.floor(Math.random() * maxNumber) + 1;
}

var answer;
var continueGame = true;
var correct = 0;
var questions = 0;

function generateQuestion() {
    "use strict";
    var firstNumber = random(10);
    var secondNumber = random(10);
    answer = secondNumber + firstNumber;
    console.log(firstNumber);
    console.log(secondNumber);
    document.getElementById("problem").innerHTML = firstNumber + " + " + secondNumber + " = ";
}
function getInput() {
    "use strict";
    var code = event.keyCode ? event.keyCode : event.which;
    var userInput = document.getElementById("answer_input").value;

    if (code === 13) {
        // clears value for next input
        document.getElementById("answer_input").value = "";
        if (userInput == answer) {
            correct += 1;
            console.log("correct");
        } else {
            console.log("not correct");
            console.log(userInput);
            console.log(answer);
        }
        questions += 1;
        if (continueGame) {
            generateQuestion();
        }

    }
}

function timeConverter(t) {
    "use strict";
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function gameOver() {
    "use strict";
    continueGame = false;
    document.getElementById("answer_input").style.visibility = "hidden";
    document.getElementById("problem").innerHTML = "You got " + correct + " correct out of " + questions + "" +
            " for a score of " + correct / questions * 100 + "%";
}

function startGame() {
    "use strict";
    document.getElementById("answer_input").style.visibility = "visible";
    function createTimer(seconds) {
        var intervalVar = setInterval(function () {
            console.log("interval var");
            console.log(seconds);
            if (seconds === 0) {
                clearInterval(intervalVar);
                gameOver();
            } else {
                continueGame = true;
            }
            document.getElementById("a_time").innerHTML = timeConverter(seconds);

            seconds--;
        }, 1000);
    }

    createTimer(10);
    generateQuestion();
}




