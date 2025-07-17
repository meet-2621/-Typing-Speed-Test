const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a skill that improves with practice.",
  "JavaScript is a versatile language for the web.",
  "Success is the sum of small efforts repeated daily."];
const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
let currentQuote = "";let startTime;let timerInterval;function startTest(){
  inputEl.value = ""; inputEl.disabled = false;
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;startTime = new Date();
  timerEl.textContent = "0"; wpmEl.textContent = "0";
  accuracyEl.textContent = "100";clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);}
function updateTimer() {const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  timerEl.textContent = elapsedTime;calculateWPM();calculateAccuracy();}
function calculateWPM() {
  const typedText = inputEl.value.trim();
  const wordsTyped = typedText.split(" ").filter(word => word !== "").length;
  const elapsedMinutes = parseInt(timerEl.textContent) / 60;
  const wpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
  wpmEl.textContent = wpm;}
function calculateAccuracy() {
  const typed = inputEl.value;let correct = 0;
  for (let i = 0; i < typed.length && i < currentQuote.length; i++) {
if (typed[i] === currentQuote[i]) correct++;}
const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;
accuracyEl.textContent = accuracy;}startBtn.addEventListener("click", startTest);
inputEl.addEventListener("input", () => {calculateWPM(); calculateAccuracy();});
