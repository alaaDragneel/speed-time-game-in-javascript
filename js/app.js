// Start The Game On Window Load
window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
};

// To Change Level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize Game
function init() {
    // SHow Numbers Of Seconds In UI
    seconds.innerHTML = currentLevel;

    // Load Word From Array    
    showWord(words);

    // Start Matching On Input Word
    wordInput.addEventListener('input', startMatch);

    // Call Countdown Every Second
    setInterval(countdown, 1000);

    // Check Game Status
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If Score Is -1 Display  0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match The Current Word To The Word Input
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
} 

// Pick & Show Random Word
function showWord(words) {
    // generate a random array index
    const randIndex = Math.floor(Math.random() * words.length);
    
    // Output Random Word
    currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
    // Make Sure TIme Is Not Run Out
    if (time > 0) {
        // Decrement The Time
        time--;
    } else if(time === 0) {
        // Game Is Over
        isPlaying = false;
    }

    // Show Time
    timeDisplay.innerHTML = time;
}

// Check Game Status
function checkStatus() {
    if (! isPlaying && time == 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}