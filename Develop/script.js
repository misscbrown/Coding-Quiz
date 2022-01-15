// Questions for quiz
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyped Type Marker Language",
      "Hover Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Casanova Styling Shoes",
      "Cascading Style Sheets",
      "Cascading Sheet Sets",
    ],
    answer: "Cascading Style Sheets",
  },

  //     question: "What is the meaning of const?",
  //     answers:
  //         {
  //         a: 'Defines a variable as unchangeable', correct: false,
  //         b: 'Constantly typing code', correct: false,
  //         c: 'Constantly change a variable', correct: false,
  //         answer: a,

  // },

  //     question: "Where do we link a javascript file?",
  //     answers:
  //         {
  //         a: 'At the bottom of the CSS file', correct: false,
  //         b: 'At the top of the HTML file', correct: false,
  //         c: 'At the bottom of the HTML file', correct: false,
  //         answer: c

  // },
        
  //     question: "What is a Boolean?",
  //     answers:
  //         {
  //         a: 'A variable that can have a true or false value', correct: false,
  //         b: 'A type of scary ghost', correct: false,
  //         c: 'A variable that is true, false or unsure', correct: false,
  //         answer: a

  // },
];

//Current Question Index
var currentQuestionIndex = 0;

//Timer elements from html, with message once timer complete
var timerEl = document.getElementById("counting");
var mainEl = document.getElementById("main");

//References to different areas of html
var startButton = document.getElementById("start-quiz");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var scoreArea = document.getElementById("scoreArea");
var highScoresButton = document.getElementById("showScoresButton");
var startPage = document.getElementById("start-page");
var questionsPage = document.getElementById("questionsContainer");

//Start quiz
function startQuiz() {
  console.log("Start Quiz triggered...");
  //Add class hide to start page
  startPage.setAttribute("class", "hide");
  //Remove class hide from questions page
  questionsPage.removeAttribute("class");
counting();
  renderNewQuestion();
}

function renderNewQuestion() {
  console.log("Render new question triggered...");
  //create a variable to reference the first element of the questions array
  var currentQuestionObj = questions[currentQuestionIndex];

  console.log(currentQuestionObj);
  //assign the current questions being asked to the html
  question.textContent = currentQuestionObj.question;

  //Clears down the previous questions buttons before creating and appending the new ones
  answers.innerHTML = "";

  currentQuestionObj.answers.forEach(function (answer) {
    //create button element
    var newButton = document.createElement("button");
    //give the element an atribute to identify its value
    newButton.setAttribute("class", "answersButtons");
    //give it its text content
    newButton.textContent = answer;
    //give it an  onclick to check answer when selected
    newButton.onclick = checkAnswer;
    //add it to the html
    answers.appendChild(newButton);
  });
};

function checkAnswer() {
  console.log("Check answer triggered...");
  console.log("Triggerer:", this);
  console.log("Selected answer:", this.textContent);
  console.log("Correct answer", questions[currentQuestionIndex].answer);
  //check if the selected answer is incorrect

//  // var = questions[currentQuestionIndex].answer

  if (question==questions[currentQuestionIndex].answer) {
      renderNewQuestion(2)
  }

//reduce timer function
  if (!questions[currentQuestionIndex].answer) {
    counting 
  }

//   }

  //if its incorrect we need to minus time from the timer



  // if its correct move on

  //increment the currentQuestionIndex

    
  //need to do another check to see if currentQuestionIndex is is equal to questions.length
    
  //if its equal - you are out of questions - end Quiz
    
  //otherwise you want to call renderNewQuestion();
}
    
//Timer function with display message
function counting() {
  console.log("Counting Timer triggered....");
  var timeLeft = 90;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds left 🕧";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  console.log("End Quiz Triggered");
  // clear the interval you have running

  //hide the questions screen

  //hide the timer

  //display the end screen
}

function saveHighscore() {}

submitScore.addEventListener("click", saveHighscore);

startButton.addEventListener("click", startQuiz);
