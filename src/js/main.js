// set random for problem by passing in the max number that will appear in the problem
function random(maxNumber) {
    "use strict";
    return Math.floor(Math.random() * maxNumber) + 1;
}

var answer;
var firstNumber;
var secondNumber;
var continueGame = true;
var correct = 0;
var questions = 0;
var percentage = 0;
var level;
var operation = "+";
var operationButton;
var allOperations = ['*', '-', '+'];


function randomOperation() {
    "use strict";
    return allOperations[(Math.random() * allOperations.length) | 0];
}

function generateQuestion() {
    "use strict";
    firstNumber = random(level);
    secondNumber = random(level);
    if (operationButton === "Random") {
        operation = randomOperation();
    }
    answer = eval(firstNumber + operation + secondNumber);
    document.getElementById("problem").innerHTML = firstNumber + operation + secondNumber + " = ";
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
        } else {
            document.getElementById("incorrect").append(firstNumber + operation + secondNumber + " = " + answer + "\n");
        }
        questions += 1;
        if (continueGame) {
            generateQuestion();
        }
    }
}

// Decide which math operation will be in the problems. sum is default.
$(".btn-group :input").change(function() {
    operationButton = this.id;
    operationButton = this.id;
    operation = this.id; // points to the clicked input button
});

//get max number that will appear in the math problems
$(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle')
        .html(selText+' <span class="caret"></span>');
    level = selText;
});

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

// reset variables and page elements
function gameOver() {
    "use strict";
    document.getElementById("answer_input").style.visibility = "hidden";
    if (questions > 0) {
        percentage = Math.round(correct / questions * 100, 2);
    }

    document.getElementById("problem").innerHTML = "You got " + correct + " correct out of " + questions + "" +
            " for a score of " + percentage + "%";
    continueGame = true;
    correct = 0;
    questions = 0;
    percentage = 0;
}

function startGame() {
    "use strict";
    if (!level) {
        alert("Please select a max number");
    } else {
        document.getElementById("answer_input").style.visibility = "visible";
        document.getElementById("incorrect").innerHTML = "";
        function createTimer(seconds) {
            var intervalVar = setInterval(function () {
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

        createTimer(60);
        generateQuestion();
    }

}




