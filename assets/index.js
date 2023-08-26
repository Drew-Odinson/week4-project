
const questions = [
  {
    question: "Question 1: What is var?",
    options: ["An element", "a variable", "a function", "placemarker"],
    answer: 1
  },
  {
    question: "Question 2: What is an array?",
    options: ["An event", "data-point", "a function", "data-storage"],
    answer: 3
  },
  {
    question: "Question 3: What is DOM?",
    options: ["Family", "movie character", "Document Object Model", "None of the above"],
    answer: 2
  },
  {
    question: "Question 4: What does .stopPropagation do?",
    options: ["Stops bubbling event", "Stops a search", "It is an end statment", "I don't know I just got here"],
    answer: 0
  },
  {
    question: "Question 5: What does .getItem do?",
    options: ["It gets an element", "It returns a certain item", "It gets what you got", "Its a function that gets differet color arrays"],
    answer: 1
  },
  {
    question: "Question 6: Which is a JavaScript data type?",
    options: ["Number", "Undefined", "Object", "All the above"],
    answer: 3
  },
  {
    question: "Question 7: What allows you to ask for user input?)",
    options: [".input", ".prompt", ".askUser", ".heySiri"],
    answer: 1
  },
  {
    question: "Question 8: What does >= meant?",
    options: ["Greater then or equal to", "Equals the sum", "Less then or equal to", "square route of pie"],
    answer: 0
  },
  {
    question: "Question 9: How can generic objects be created?",
    options: ["var i =", "create.object =", "add.object =", "none of the above"],
    answer: 0
  },
  {
    question: "Question 10: How do you delete variable object?)",
    options: [".stopElementRun", "delete object", "erase object", ".thanosSnap.object"],
    answer: 1
  },
],

var currentQuestionIndex = 0;
var score = 0;
var timer= 0;


var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 60; 

var countdownEl = document.getElementById("countdown");

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countdownEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }
  }, 1000);
}


setTime();