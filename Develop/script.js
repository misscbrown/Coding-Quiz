
//Timer elements from html, with message once timer complete
var timerEl = document.getElementById('counting');
var mainEl = document.getElementById('main');

var message = 
    "Time's up!";
var words = message.split(' ');

//Timer function
function counting() {
    var timeLeft = 90;

    var timeInterval = setInterval(function () {
        if(timeLeft > 1){
            timerEl.textContent = timeLeft + ' seconds left 🕧'
            timeLeft--
        
        }
        else {
            timerEl.textContent = ''
            clearInterval(timeInterval)
            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;

    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}

counting();







// function startTimer() {

// }

// const startButton = document.getElementById("start-quiz")

// startButton.addEventListener('click', startQuiz)

// function startQuiz() {

// }

// function setNextQuestion() {

// }
