// Get the elements you want to update with the timer
const timerDisplay = document.querySelector("h1");
const timeSinceLastContractions = document.querySelector("strong");
const startButton = document.querySelector(".diff-btn");

let timerInterval;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    const timeSinceLast = `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;
    timeSinceLastContractions.textContent = timeSinceLast;
  }, 1000);
}

startButton.addEventListener("click", startTimer);
