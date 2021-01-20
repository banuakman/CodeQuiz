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
var currentTime = document.querySelector("#currentTime");


// FUNCTIONS======================================================

// USER INTERRACTIONS=============================================
// Create a timer attached to a button with a starting value of 75
var timer = document.querySelector("#startTime")

var timeLeft = 75

// When timer is pressed start a reverse countdown
// Write the remaining time to #currentTime
timer.addEventListener("click", function(){
    var timeInterval = setInterval(function() {
        currentTime.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        if (timeLeft === 0) {
        currentTime.textContent = "Time is Up!";
        clearInterval(timeInterval);
        }    
      }, 1000);
})

// When countdown starts, start quiz



// When user selects the right answer, textcontent "It's Correct!"
// When user selects the wrong answer, textcontent "It's Wrong! 10 seconds subtracted from the clock"
// When user selects the wrong answer, 10 seconds will be deducted from the countdown

// Final score will keep track of correct answers