// DEPENDENCIES===================================================
// Create the quiz array with objects: question, choices, answer
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
]

// STARTING DATA==================================================
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");


// USER INTERRACTIONS=============================================
// Create a timer attached to a button with a starting value of 75
var timer = document.querySelector("#startTime")
var timeLeft = 75

// When timer is pressed start a reverse countdown
// Write the remaining time to #currentTime
timer.addEventListener("click", function(){
    var timeInterval = setInterval(function() {
        currentTime.textContent = "Remaining Time: " + timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
        currentTime.textContent = "Time is Up!";
        // Stop the timer
        clearInterval(timeInterval);
        // Call the render function
    }
      }, 1000);
    render(questionIndex);
})

// FUNCTIONS======================================================

// When countdown starts, start quiz
// Render questions and choices to #questionsDiv 
function render(questionIndex) {
    // Clear existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < quiz.length; i++) {
        // Add question
        var userQuestion = quiz[questionIndex].question;
        var userChoices = quiz[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
        }
    // New list Item for each of multible choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        // 
        listItem.addEventListener("click", (check));
    })
}

//Compare user choices with answer
function check(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // When user selects the right answer
        // textcontent "It's Correct!"
        if (element.textContent == quiz[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct Answer!";
            // When user selects the wrong answer
            // textcontent "It's Wrong! 10 seconds subtracted from the clock"
        } else {
            // 10 seconds will be deducted from timeLeft for wrong answers
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "WRONG! 10 seconds penalty! The correct answer is: " + quiz[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= quiz.length) {
        createDiv.textContent = "End of quiz!";
        // Add an "The End" function for  user stats

    } else {
        render(questionIndex);
    }
    
    questionsDiv.appendChild(createDiv);

}

// Final score will keep track of correct answers
