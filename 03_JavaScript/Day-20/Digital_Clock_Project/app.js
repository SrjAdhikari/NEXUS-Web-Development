// Select the div element
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Create a timer function
const timer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");                 // Ensure double digits
    const minutes = String(date.getMinutes()).padStart(2, "0");             // Ensure double digits
    const seconds = String(date.getSeconds()).padStart(2, "0");             // Ensure double digits

    // Update the div element with the current time
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
};

// Call the timer function every second
setInterval(timer, 1000);

// Run the timer function once immediately when the page loads
timer();