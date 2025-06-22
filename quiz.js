function checkAnswer() {
  const correctAnswer = "4"

  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const feedbackELement = document.getElementById("feedback")

    if (userAnswer === correctAnswer) {
      feedbackELement.textContent = "Correct! Well done."
    } else {
      feedbackELement.textContent = "That's incorrect. Try again!"
    }
  } else {
    document.getElementById("feedback").textContent = "Please select an answer before submitting";
  }

};

document.getElementById("submit-answer").addEventListener("click", checkAnswer);