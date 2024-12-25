// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal. It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock, do what it does. Keep going. - Sam Levenson",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "The secret to getting ahead is getting started. - Mark Twain",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don't limit your challenges, challenge your limits. - Unknown",
    "Everything you can imagine is real. - Pablo Picasso",
    "The key to success is to focus on goals, not obstacles. - Unknown"
];

// Get paragraph and button elements
const quote = document.getElementById("quote");
const button = document.getElementById("btn");

// Function to generate a random quote and background color
function generateQuote() {
    // Generate a random index and select a quote from the quotes array
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];

    // Generate a random background color and Change the background color to a random gradient
    const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.background = `linear-gradient(60deg, ${randomColor1}, ${randomColor2})`;
}

// Event listener for button click
// Whenever the button is clicked, random quote and background is generated
button.addEventListener("click", generateQuote);