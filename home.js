let timerInterval;
let totalTime;
let isTimerSet = false; // Add this variable to track if the timer is set

function enableTypingArea() {
    document.querySelector(".textarae").disabled = false;
}

function disableTypingArea() {
    document.querySelector(".textarae").disabled = true;
}

function startTimer() {
    let minutesInput = document.getElementById("MM");
    let secondsInput = document.getElementById("SS");

    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Invalid input. Please enter valid minutes and seconds.");
        return;
    }

    totalTime = (minutes * 60 + seconds) * 1000;

    timerInterval = setInterval(updateTimer, 1000);

    minutesInput.disabled = true;
    secondsInput.disabled = true;
    isTimerSet = true; // Set the timer flag

    // Enable the typing area
    enableTypingArea();
}

function updateTimer() {
    let remainingMinutes = Math.floor(totalTime / 60000);
    let remainingSeconds = Math.floor((totalTime % 60000) / 1000);

    document.getElementById("timer").textContent = `${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    totalTime -= 1000;

    if (totalTime < -1) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00:00";
        alert("Time's up!");
        // Disable the typing area on timer expiry
        disableTypingArea();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("MM").value = "";
    document.getElementById("SS").value = "";
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById("MM").disabled = false;
    document.getElementById("SS").disabled = false;
    wordsTextArea.value = "";
    document.querySelector(".count").innerHTML = "0";

    // Disable the typing area on timer reset
    disableTypingArea();

    isTimerSet = false; // Reset the timer flag
}

const wordsTextArea = document.querySelector(".textarae");
const countBtn = document.querySelector(".submit");
const wordCount = document.querySelector(".count");

const countWords = () => {
    clearInterval(timerInterval);
    document.getElementById("MM").value = "";
    document.getElementById("SS").value = "";
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById("MM").disabled = false;
    document.getElementById("SS").disabled = false;
    let words = wordsTextArea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWords = wordsTrimmed.split(" ");
    let numberOfWords = splitWords.length;
    if (splitWords[0] === "") {
        numberOfWords = 0;
    }
    wordCount.innerHTML = numberOfWords;

    // Disable the typing area on submit
    disableTypingArea();
};

document.addEventListener("DOMContentLoaded", function () {
    countBtn.addEventListener("click", countWords);
    
    // Disable the typing area initially
    disableTypingArea();
});
function index()
{
    location.href="./index.html";
}
function  exit()
{
    location.href = "https://www.google.com";
}