console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer

// TODO: Declare an empty array that will hold the user's answers

// TODO: Declare a variable to keep track of which question (index) we are on

function showNextQuestion() {
    // TODO: Get the current question
    
    // TODO: Set the text of the question element

    // TODO: Set the text of each option element
}

// TODO: Call showNextQuestion to load the first question when the page loads

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page

    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array

    // TODO: Add one to the question index

    // TODO: Load the next question
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct

    // TODO: Show an alert to the user with how many they got right out of the total

    // TODO: Reset and start over
}