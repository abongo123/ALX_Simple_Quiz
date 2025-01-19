function checkAnswer() {
    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        alert("Please select an answer before submitting, Thanks!");
        return;
    }

    const userAnswer = selectedOption.value;

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
