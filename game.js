const matches = [
    { opponent: "Michael Hulme", result: "Loss", score: "1-6, 1-6" },
    { opponent: "Sergey Pankin", result: "Loss", score: "4-6, 3-6" },
    { opponent: "Karan Arora", result: "Loss", score: "6-4, 5-7, 1-6" },
    { opponent: "James Lyeons", result: "Win", score: "7-5, 6-3" },
];

let currentQuestion = 0;

function displayQuestion() {
    const question = matches[currentQuestion];
    document.getElementById("question").innerText = `Match against ${question.opponent}: What was the result?`;
    
    const options = document.getElementById("options");
    options.innerHTML = `
        <button onclick="checkAnswer('Win')">Win</button>
        <button onclick="checkAnswer('Loss')">Loss</button>
    `;
}

function checkAnswer(answer) {
    const question = matches[currentQuestion];
    const feedback = document.getElementById("feedback");
    
    if (answer === question.result) {
        feedback.innerText = `Correct! The score was ${question.score}.`;
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Wrong! The correct result was ${question.result} (${question.score}).`;
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    const feedback = document.getElementById("feedback");
    feedback.innerText = ""; // Clear feedback before showing the next question
    
    currentQuestion++;
    if (currentQuestion < matches.length) {
        displayQuestion();  // Display next question
    } else {
        document.getElementById("question").innerText = "Game Over! Thanks for playing!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").innerHTML += "<br><br><button onclick='restartGame()'>Play Again</button>"; // Restart button
        currentQuestion = 0; // Reset for next round if "Play Again" is clicked
    }
}

// Restart the game
function restartGame() {
    currentQuestion = 0;
    displayQuestion();
    document.getElementById("feedback").innerText = "";  // Reset feedback
}

// Initialize the first question
displayQuestion();
