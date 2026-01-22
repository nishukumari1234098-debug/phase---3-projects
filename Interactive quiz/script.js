const questions =[
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "High Text Markup Language"],
    correct: 1,
  },

  {
    question: "Which language is used to add interactivity to a web page?",
    answers: ["HTML", "CSS", "JavaScript", "PHP"],
    correct: 2,
  },

  {
    question: "What is the correct file extension for a JavaScript file?",
    answers: [".html", ".css", ".js", ".java"],
    correct: 2,
  },

  {
    question: "Which of the following is an output device?",
    answers: ["Keyboard", "Mouse", "Scanner", "Monitor"],
    correct: 3
  },

  {
    question: "Which tag is used to create a button in HTML?",
    answers: ["<input>", "<button>", "<btn>", "<click>"],
    correct: 1
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["<!-- -->", "#", "//", "**"],
    correct: 2,
  },

  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheet", "Color Style Sheet", "Creative Style Sheet", "Computer Style Sheet"],
    correct: 0,
  },

  {
    question: "Which of the following is a loop in JavaScript?",
    answers: ["if", "switch", "break", "for"],
    correct: 3,
  },

  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Apple", "Google"],
    correct: 1,
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "let", "const", "All of the above"],
    correct: 3,
  },
];


const questionElement = document.getElementById("questionText");
const answerButtons = document.getElementById("answersContainer");
const nextButton = document.getElementById("nextBtn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";

  showQuestion();
}


function showQuestion(){
  resetState(); 
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    answerButtons.appendChild(button);

    if(index === currentQuestion.correct){
      button.dataset.correct = "true"
    }
    button.addEventListener("click", selectAnswer);
  });
}



function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectdBtn = e.target;
  const isCorrect = selectdBtn.dataset.correct === "true";
  if(isCorrect){
    selectdBtn.classList.add("correct");
    score++;
  }else{
    selectdBtn.classList.add("incorrect")
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  }); 
  nextButton.style.display = "block";
}


function showScore(){
  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);

  window.location.href = "result.html";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", () => {
   handleNextButton();
});

startQuiz();