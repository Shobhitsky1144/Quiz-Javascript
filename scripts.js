var AllQuestions = [
  {
    question: "Q1. What is the full form of HTML?",
    a: "Hyper Text Markup Language",
    b: "Hyper Transfer Markup Protocol",
    c: "Hypo Text Transfer Protocol",
    d: "Hello Text Transfer Protocol",
    answer: "ans1",
  },
  {
    question: "Q2. What is the full form of CSS?",
    a: "Cascading Style Sheet",
    b: "Cascader Styling Sheet",
    c: "Cascading Spread Sheet",
    d: "Cascade Style Sheet",
    answer: "ans1",
  },
  {
    question: "Q3. Who invented HTML?",
    a: "Mark Zuckerberg",
    b: "Bill Gates",
    c: "Tom Cruise",
    d: "Tim Berners-Lee",
    answer: "ans4",
  },
  {
    question: "Q4. Who invented CSS?",
    a: "Mark Zuckerberg",
    b: "Håkon Wium Lie",
    c: "Elon Musk",
    d: "Tim Berners-Lee",
    answer: "ans2",
  },
];

var mainDiv = document.querySelector(".mainDiv");
var container = document.querySelector(".container");
var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var submitBtn = document.querySelector(".submitBtn");
var ScoreDiv = document.querySelector(".score");
var answers = document.querySelectorAll(".answer");
var playAgain = document.querySelector(".playAgain");

var score = 0,
  questionNumber = 0;

const getAnswer = () => {
  var answer = -1;
  answers.forEach((ans) => {
    if (ans.checked) answer = ans.id;
  });
  return answer; //if user doesnt select any option
};
submitBtn.addEventListener("click", () => {
  var currentQuestion = AllQuestions[questionNumber];
  var markedAnswer = getAnswer();
  if (markedAnswer != -1) {
    if (markedAnswer === currentQuestion.answer) ++score;

    ++questionNumber;
    answers.forEach((ans) => (ans.checked = false));

    if (questionNumber < AllQuestions.length) loadQuestions();
    else {
      ScoreDiv.innerHTML = `Score: ${score}/${AllQuestions.length}`;
      playAgain.innerHTML = `<button onClick='location.reload()' class="playAgainBtn">Play Again</butoon>`;
    }
  }
});

const loadQuestions = () => {
  ScoreDiv.innerHTML = `Score: ${score}/${AllQuestions.length}`;
  var currentQuestion = AllQuestions[questionNumber];
  question.innerHTML = currentQuestion.question;
  option1.innerHTML = currentQuestion.a;
  option2.innerHTML = currentQuestion.b;
  option3.innerHTML = currentQuestion.c;
  option4.innerHTML = currentQuestion.d;
};
loadQuestions();
