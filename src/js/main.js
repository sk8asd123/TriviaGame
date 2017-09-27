// set random for problem by passing in the max number that will appear in the problem
function random(maxNumber) {
    "use strict";
    return Math.floor(Math.random() * maxNumber) + 1;
}

var answer;
var continueGame = true;

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
        if (userInput == (answer)) {
            console.log("correct");
        } else {
            console.log("not correct");
            console.log(userInput);
            console.log(answer);
        }
        if (continueGame){
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

function startGame() {
    "use strict";

    function createTimer(seconds) {
        var intervalVar = setInterval(function () {
            console.log("interval var");
            console.log(seconds);
            if (seconds === 0) {


                clearInterval(intervalVar);
                console.log("time up");
                document.getElementById("answer_input").style.visibility = "hidden";
                continueGame = false;
            }
            else {
                continueGame = true;
            }
            console.log("testing time in log");
            document.getElementById("a_time").innerHTML = timeConverter(seconds);

            // this.minutes = Math.floor(this.seconds / 60);
            // this.secondsToShow = (this.seconds - this.minutes * 60).toString();
            // if (this.secondsToShow.length === 1) {
            //     this.secondsToShow = "0" + this.secondsToShow; // if the number of seconds is '5' for example, make sure that it is shown as '05'
            // }
            // this.seconds = this.seconds - 1;
            seconds--;
        }, 1000);
    }

    createTimer(10);
    generateQuestion();
}




