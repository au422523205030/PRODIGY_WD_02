let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

function formatTime(ms) {
  let milliseconds = Math.floor((ms % 1000) / 10);
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor(ms / (1000 * 60 * 60));

  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    String(milliseconds).padStart(2, "0")
  );
}

function updateDisplay() {
  const now = Date.now();
  elapsedTime = now - startTime;
  display.textContent = formatTime(elapsedTime);
}

document.getElementById("startBtn").addEventListener("click", () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateDisplay, 10);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00.00";
  lapsContainer.innerHTML = "";
});

document.getElementById("lapBtn").addEventListener("click", () => {
  if (elapsedTime > 0) {
    const lapItem = document.createElement("li");
    lapItem.textContent = "Lap: " + formatTime(elapsedTime);
    lapsContainer.appendChild(lapItem);
  }
});
