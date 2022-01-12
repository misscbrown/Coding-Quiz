
//Timer elements from html, with message once timer complete
var timerEl = document.getElementById('counting');
var mainEl = document.getElementById('main');

var message = 
    "Time's up!";
var words = message.split(' ');

//Timer function with display message
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

//Questions for quiz

const questions = [
    {
        question: "What does HTML stand for?", 
        answers: [
            { text: 'Hyper Text Markup Language', correct: false },
            { text: 'Hyped Type Marker Language', correct: false },
            { text: 'Hover Text Markup Language', correct: false }
        ]
    },

    {
        question: "What does CSS stand for?",
        answers: [
            { text: 'Casanova Styling Shoes', correct: false },
            { text: 'Cascading Style Sheets', correct: false },
            { text: 'Cascading Sheet Sets', correct: false}
        ]
    },

    {
        question: "What is the meaning of const?",
        answers: [
            { text: 'Defines a variable as unchangeable', correct: false },
            { text: 'Constantly typing code', correct: false },
            { text: 'Constantly change a variable', correct: false}
        ]
    },

    {
        question: "Where do we link a javascript file?",
        answers: [
            { text: 'At the bottom of the CSS file', correct: false },
            { text: 'At the top of the HTML file', correct: false },
            { text: 'At the bottom of the HTML file', correct: false}
        ]
    },

    {
        question: "What is a Boolean?",
        answers: [
            { text: 'A variable that can have a true or false value', correct: false },
            { text: 'A type of scary ghost', correct: false },
            { text: 'A variable that is true, false or unsure', correct: false}
        ]
    },

]





// function startTimer() {

// }

// const startButton = document.getElementById("start-quiz")

// startButton.addEventListener('click', startQuiz)

// function startQuiz() {

// }

// function setNextQuestion() {

// }
