console.log("Jarvis Activated");

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
let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Pheonix",
        option2: "Flagstaff",
        option3: "Tucson",
        option4: "Nogales",
        answer: "Pheonix"
    },
    {
        question: "Who was the first United States president?",
        option1: "Abraham Lincoln",
        option2: "Theodore Roosevelt",
        option3: "George Washington",
        option4: "Gearge Bush",
        answer: "George Washington"
    }
];
console.log(questions);
// TODO: Declare an empty array that will hold the user's answers
let userAnswer = [];
// TODO: Declare a variable to keep track of which question (index) we are on
let questionNum = 0; 
function showNextQuestion() {
    // Check if this is the end of the quiz
    if (questionNum >= questions.length){
        checkAnswers();
        return;
    }
    // TODO: Get the current question
    let currQues = questions[questionNum];
    
    // TODO: Set the text of the question element
    let question = document.getElementById("question");
    question.innerText = currQues.question;

    // TODO: Set the text of each option element
    let option1 = document.getElementById("option1text")
    option1.innerText = currQues.option1;

    let option2 = document.getElementById("option2text")
    option2.innerText = currQues.option2;

    let option3 = document.getElementById("option3text")
    option3.innerText = currQues.option3;

    let option4 = document.getElementById("option4text")
    option4 .innerText = currQues.option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();
    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let currQues = questions[questionNum];

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked){
        // add option to user answer array
        userAnswer.push(currQues.option1);
        option1.checked = false;
    }
    else if (option2.checked){
        userAnswer.push(currQues.option2);
        option2.checked = false;

    }
    else if (option3.checked){
        userAnswer.push(currQues.option3);
        option3.checked = false;
    }
    else if (option4.checked){
        userAnswer.push(currQues.option4);
        option4.checked = false;
    }
    else {
        alert ("Answer Is required to continue")
    }
    console.log(userAnswer);

    // TODO: Add one to the question index
    questionNum++;
    // TODO: Load the next question
    showNextQuestion();
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct
    let numCorrect = 0;
    for(let i = 0; i < userAnswer.length; i++) {
        let userAnswer = userAnswers[i];
        let question = questions[i];
        if (userAnswer == question.answer) {
            numCorrect++;
        }
    }
   
    // TODO: Show an alert to the user with how many they got right out of the total
    alert("Good job you got " + numCorrect + " out of " + questions.length); 

    // TODO: Reset and start over
}