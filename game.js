let correctFood = getRandomFood();
let timer;
let timeRemaining = 10;
let score = 0;

function checkFood(food) {
    if (food === correctFood) {
        alert('¡FELICIDADES! ¡Obtienes 1 punto!');
        score += 1; 
        updateScoreDisplay();
        resetGame();
    } else {
        alert('Vaya! Prueba de nuevo.');
    }
}

function resetGame() {
    // Reset the timer
    clearTimeout(timer);
    timeRemaining = 10;

    // Update the timer display
    updateTimerDisplay();

    // Show a message and reset after a delay
    setTimeout(() => {
        // Change the correct food for the next round
        correctFood = getRandomFood();

        // Update the timer display
        updateTimerDisplay();

        alert('¡Prepárate para la siguiente ronda!');
        startTimer();
    }, 500);

    // You can add more complexity to the reset logic if needed.
}

function getRandomFood() {
    const foods = ['Apple', 'Banana','Pera', 'Naranja','Sandía'];
    return foods[Math.floor(Math.random() * foods.length)];
}

function startTimer() {
    // Set a timer for 1 second intervals
    timer = setInterval(() => {
        timeRemaining--;

        // Update the timer display
        updateTimerDisplay();

        if (timeRemaining === 0) {
            alert('¡Se acabó el juego! Inténtalo de nuevo.');
            resetGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    // Update the time display element
    document.getElementById('time-display').innerText = timeRemaining;
}

function updateScoreDisplay() {
    // Update the score display element
    document.getElementById('score-display').innerText = score;
}


// Initial message
alert('Bienvenido al juego de la fruta! Selecciona la fruta correcta para ganar.');
startTimer(); // Start the initial timer




