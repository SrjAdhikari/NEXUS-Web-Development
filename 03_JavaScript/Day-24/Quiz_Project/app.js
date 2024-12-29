//* ****************************************************
//* Method 1: Calculating Score When User Select All Options
//* ****************************************************


// Define the original answer
const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"];

// Get the form and result element
const form = document.querySelector('form');
const result = document.querySelector('.result');

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Create a FormData object from the form element to access the submitted data
    const data = new FormData(form);

    // Extract all values from the FormData object and convert them into an array
    const answer = Array.from(data.values());

    // Initialize a score variable to keep track of correct answers
    let score = 0;

    // Compare the user's answers with the correct answers stored in the `original_answer` array
    for (let i = 0; i < answer.length; i++) {
        // Check if the user's answer matches the correct answer, increment the score
        if (answer[i] === original_answer[i])
            score++;
    }

    // Dynamically display the user's score on the page
    result.innerHTML = `You scored ${score} out of 5.`;
});


//* ****************************************************
//* Method 2: Calculating Score When User Skip Some Options
//* ****************************************************

const correct_answer = {
    question1: "Sachin Tendulkar",
    question2: "West Indies",
    question3: "Sachin Tendulkar",
    question4: "264",
    question5: "Muttiah Muralitharan"
}

// Add an event listener to the form for the "submit" event
form.addEventListener("submit", (e) => {
    // Prevent the form's default submission behavior
    e.preventDefault();

    // Create a FormData object to capture form input data
    const data = new FormData(form);

    // Get the entries (key-value pairs) from the FormData object
    const dataEntries = data.entries();

    // Initialize the score counter
    let score = 0;

    // Loop through the submitted form data
    for (let [key, value] of dataEntries) {
        // Check if the submitted answer matches the correct answer, increment the score
        if (value === correct_answer[key])
            score++;
    }

    // Display the user's score dynamically in the result element
    result.innerHTML = `You scored ${score} out of 5.`;
});