const questionBank = [
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], answer: "William Shakespeare" },
    { question: "What is the capital of France?", options: ["Rome", "Berlin", "Madrid", "Paris"], answer: "Paris" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"], answer: "Leonardo da Vinci" },
    { question: "What is the largest planet in our solar system?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Louis Pasteur"], answer: "Alexander Fleming" },
    { question: "What is the boiling point of water in Celsius?", options: ["50°C", "100°C", "150°C", "200°C"], answer: "100°C" },
    { question: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Ada Lovelace"], answer: "Charles Babbage" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
    { question: "Who is the author of 'Harry Potter'?", options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Suzanne Collins"], answer: "J.K. Rowling" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "Vietnam"], answer: "Japan" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { question: "Which ocean is the largest?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], answer: "George Washington" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is the capital of Italy?", options: ["Paris", "Rome", "Madrid", "Berlin"], answer: "Rome" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], answer: "Albert Einstein" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Oganesson", "Oxonium"], answer: "Oxygen" },
    { question: "What is the currency of Japan?", options: ["Dollar", "Yen", "Euro", "Won"], answer: "Yen" },
    { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], answer: "Michael Jackson" },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], answer: "Mount Everest" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Japan", "Russia"], answer: "Brazil" },
    { question: "Who is the current CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Sundar Pichai"], answer: "Elon Musk" },
    { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Leopard"], answer: "Cheetah" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"], answer: "Tim Berners-Lee" },
    { question: "Which is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River" },
    { question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "Germany", "Spain"], answer: "France" }
];


//* ****************************************************
//* Method 1: Generate Random Questions
//* ****************************************************

// Function to generate 5 random questions from the question bank
function generateQuestions() {
    // Create an empty array to store the random questions
    const randomQuestions = [];

    // Loop to generate 5 random questions
    while(randomQuestions.length < 5) {
        // Generate a random index from 0 to the length of the question bank
        const randomIndex = Math.floor(Math.random() * questionBank.length);

        // Get the question at the random index
        const question = questionBank[randomIndex];

        // Check if the question is already present in the array
        // If it is not present, add it to the array
        if(!randomQuestions.includes(question))
            randomQuestions.push(question);
    }
    return randomQuestions;
};


//* ****************************************************
//* Method 2: Generate Random Questions
//* ****************************************************

// Function to generate 5 random questions from the question bank
function generateQuestions()  {
    // Shuffle the questionBank array to randomize the order of questions
    questionBank.sort(() => Math.random() - 0.5);

    // Select the first 5 questions from the shuffled array using the slice method
    return questionBank.slice(0, 5);
};


//* ****************************************************
//* Method 3: Optimized Method To Generate Random Questions
//* ****************************************************

// Create an empty array to store the random questions
const randomQuestionsArray = [];

// Get the length of the question bank
let length = questionBank.length;

// Function to generate 5 random questions from the question bank
function generateQuestions()  {
    // Loop to generate 5 random questions
    for(let i = 0; i < 5; i++) {
        // Generate a random index from 0 to the length of the question bank
        const randomIndex = Math.floor(Math.random() * length);

        // Get the question at the random index
        randomQuestionsArray.push(questionBank[randomIndex]);

        // Swap the selected question with the last question in the array
        // This ensures that the same question is not selected again
        let temp = questionBank[length - 1];
        questionBank[length - 1] = questionBank[randomIndex];
        questionBank[randomIndex] = temp;

        // Reduce the length of the question bank, to remove the selected question
        length--;
    }

    // Return the array of random questions
    return randomQuestionsArray;
}


// Get the form and result elements
const form = document.querySelector('form');
const result = document.querySelector('.result');

// Create an empty object to store the correct answers
const correct_answer = {};

// Call the generateQuestions function to get 5 random questions
const randomQuestions = generateQuestions();
console.log(randomQuestions);


// Iterate over the random questions and add them to the form
randomQuestions.forEach((queObj, index) => {
    // Create a "div" element to display the questions
    const div = document.createElement("div");
    div.className = "question";

    // Store the correct answer in the correct_answer object as key-value pair
    correct_answer[`question${index+1}`] = queObj["answer"];
    
    // Create a "p" element and add the question to it
    const paragraph = document.createElement("p");
    paragraph.textContent = `${index+1}. ${queObj["question"]}`;
    div.appendChild(paragraph);

    // Iterate over the options and create a "label" element for each option
    queObj["options"].forEach((option) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index+1}`;
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });

    // Append the "div" element to the form
    form.appendChild(div);
});


// Create and add a "Submit" button to the form
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.className = "submit-btn";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);


// Check the submitted answers and calculate the score
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