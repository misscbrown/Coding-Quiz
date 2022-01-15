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

const max_points = 100
const max_questions = 5

function startQuiz () {
   questionCounter = 0
   score = 0
   availableQuestions = [...questions]
   renderNewQuestion()
}

renderNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    
    
//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${max_questions}`
    
//     const questionsIndex = Math.floor(math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
    
// }

// function startTimer() {

// }

// const startButton = document.getElementById("start-quiz")

// startButton.addEventListener('click', startQuiz)

// function startQuiz() {

// }

// function setNextQuestion() {

// }
