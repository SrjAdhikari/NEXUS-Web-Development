// Select the elements to display the countdown
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Function to update the countdown
const updateCountdown = () => {
    // Get the current date and time
    const now = new Date();
    
    // Set the target date for the 2028 Summer Olympics (July 14, 2028)
    const olympicsDate = new Date("2028-07-21T00:00:00");

    // Calculate the time difference in milliseconds
    const timeDiff = olympicsDate - now;

    // If the event has passed, stop the countdown
    if (timeDiff <= 0) {
        clearInterval(timerInterval);
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    // Calculate the remaining time
    const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));                 // Converting milliseconds to days
    const remainingHours = Math.floor(timeDiff / (1000 * 60 * 60) % 24);                // Converting milliseconds to hours
    const remainingMinutes = Math.floor(timeDiff / (1000 * 60) % 60);                   // Converting milliseconds to minutes
    const remainingSeconds = Math.floor(timeDiff / 1000) % 60;                          // Converting milliseconds to seconds

    // Update the DOM with the remaining time, formatting to 2 digits
    daysElement.textContent = String(remainingDays).padStart(2, '0');
    hoursElement.textContent = String(remainingHours).padStart(2, '0');
    minutesElement.textContent = String(remainingMinutes).padStart(2, '0');
    secondsElement.textContent = String(remainingSeconds).padStart(2, '0');
};

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);

// Run the countdown once immediately when the page loads
updateCountdown();
