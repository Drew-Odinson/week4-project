
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
];



var currentQuestionIndex = 0;
var wrongAnswers = 0;
var finalScore = 0;


var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var countdownElement = document.getElementById("countdown");
var scoreElement = document.getElementById("score");
var timerInterval;
var secondsLeft = 60; //may wanna increase time to 75 seconds but will start and see what 60 seconds looks like when done
var highScore = JSON.parse(localStorage.getItem("highScore")) || {user: "", score: 0};
var restartButton = document.getElementById("add");
restartButton.style.display = "none";

document.getElementById("topScoreInitials").textContent = "Initials: " + highScore.user;
document.getElementById('topScoreValue').textContent = "topScoreValue" + highScore.score;



//Display the questions and have it cycle to the next one
function displayQuestion(index) {
  if (index < questions.length) {
    questionElement.textContent = questions[index].question;

    optionsElement.innerHTML = '';

    questions[index].options.forEach((option, optionIndex) => {
      var button = document.createElement("button");
      button.textContent = option;
      //Not sure why CSS would not work to make the btton so added it here. 
      button.style.background = "red";
      button.style.fontSize = "20px";
      button.addEventListener("click", () => checkAnswer(optionIndex));
      optionsElement.appendChild(button);
      // console.log(optionIndex)
  
    });
  } else {
    // All questions answered and final score is figured here.
    clearInterval(timerInterval);
    finalScore = calculateScore(secondsLeft);
    scoreElement.textContent = "Final Score: " + finalScore;
    scoreElement.textContent += " | Seconds Left: " + secondsLeft;
    scoreElement.textContent += " | Wrong Answers: " + wrongAnswers;
    // May add in soem text showing that for every wrong answer the users loses 5 seconds for score
    // Need to figure how to add in a "Keep Top Score" feature in here.
    // If index is = to the last question show results
    var highScore = JSON.parse(localStorage.getItem("highScore")) || {user: "", score: 0};
          var initials = prompt("Enter your initials:");
          if (highScore.score < finalScore){
            highScore = {
              user:initials,score:finalScore
              
            }
          }
localStorage.setItem("highScore", JSON.stringify(highScore));
    document.getElementById("topScoreInitials").textContent = "Initials: " + highScore.user;
    document.getElementById('topScoreValue').textContent = "topScoreValue" + highScore.score;
    restartButton.style.display = "block";
  }

  }


// Check users input for correct answers
function checkAnswer(selectedOptionIndex) {
  var correctAnswerIndex = questions[currentQuestionIndex].answer;

  if (selectedOptionIndex !== correctAnswerIndex) {
    wrongAnswers++;
  }

  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

function calculateScore(timeLeft) {
  return timeLeft - (wrongAnswers * 5); //Final score = timeleft - how many wrong answers times 5 seconds
}


function setTime() {
 
  timerInterval = setInterval(function () {
    secondsLeft--;
    countdownElement.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0 || currentQuestionIndex >= questions.length) {
      clearInterval(timerInterval);

  
      finalScore = calculateScore(secondsLeft);
      scoreElement.textContent = "Final Score: " + finalScore;
      scoreElement.textContent += " | Seconds Left: " + secondsLeft;
      scoreElement.textContent += " | Wrong Answers: " + wrongAnswers;

      //Not workin the way I want it too...
//       var initials = prompt("Enter your initials:");
// document.getElementById("topScoreInitials").textContent = "Initials: " + initials;
// document.getElementById('topScoreValue').textContent = "topScoreValue" = finalScore;


    }
  }, 1000);
}
displayQuestion(currentQuestionIndex);
setTime();





// var initials = prompt("Enter your initials:");
// document.getElementById("topScoreInitials").textContent = "Initials: " + initials;

// function restartGame() {
//   currentQuestionIndex = 0;
//   wrongAnswers = 0;
//   finalScore = 0;
//   secondsLeft = 60; // Reset the timer to the initial value
  
//   // Clear the top score and initials
//   document.getElementById("topScoreValue").textContent = "0";
//   document.getElementById("topScoreInitials").textContent = "";

//   // Hide the restart button and show the next button
//   document.getElementById("restart").style.display = "none";
//   document.getElementById("next").style.display = "block";

//   // Restart the quiz
//   displayQuestion(currentQuestionIndex);
//   setTime();
// }
// function displayQuestion(index) {
//   if (index < questions.length) {
//     // Existing code to display questions
    
//     // Show the "next" button and hide the "restart" button
//     document.getElementById("next").style.display = "block";
//     document.getElementById("restart").style.display = "none";
//   } else {
//     // Existing code to calculate final score
    
//     // Show the "restart" button and hide the "next" button
//     document.getElementById("restart").style.display = "block";
//     document.getElementById("next").style.display = "none";
//   }
// }

// Create a new var for tops
//set local storage for top scores, a different function for this at the end of the game
//insdie this function I will have to be able add current score to topscores array
//then sort top scores to plave the highest score at the top of the list.. Google sort JS
//Creat a var that stores the top three topscores. 
//Set the local storage, call it top score to hold these top three, then render top scores.

//get top scores

// // Check this code to keep highscores
// function renderTopScores() {
//   var topScores //get parsed top scores from local storage 
//   // link this new top scores to HTML

//   todoCountSpan.textContent = todos.length;
  
//   // Loop through the top scores array and for each one create a list item for the top scores and uses intis
//   //Give the user a box to enter their personal info at the end of the game
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }
