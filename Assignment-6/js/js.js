// Get the timer element
const timer = document.getElementById("timer");

// Set initial time
let seconds = 0;
let minutes = 0;
let hours = 0;

// Set interval variable
let interval;

// Add event listeners to buttons
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
  // Set interval to update timer every second
  interval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
  // Increment seconds
  seconds++;
  // If seconds is 60, reset to 0 and increment minutes
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  // If minutes is 60, reset to 0 and increment hours
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  // Format time string with leading zeros
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // Set the value of the timer element
  //timer.value = timeString;
}

// Function to stop the timer
function stopTimer() {
  clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
  // Stop the timer
  clearInterval(interval);
  // Reset time variables
  seconds = 0;
  minutes = 0;
  hours = 0;
  // Set the value of the timer element to 00:00:00
  timer.value = "00:00:00";
}
