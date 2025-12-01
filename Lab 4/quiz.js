// Simple Quiz Game (Web Dev I - Lab 4)

// Array of questions:
// Each item has a question and the correct answer.
const quizQuestions = [
  { question: "What is the name of India's Prime Minister", answer: "Mr. Narender Modi" },
  { question: "Which language is used for styling any HTML file?", answer: "CSS" },
  { question: "What does JS stand for (short)?", answer: "javascript" },
  { question: "Which tag is used to create headings in HTML?", answer: "h1,h2,h3,h4,h5,h6" },
  { question: "Which symbol starts a single-line comment in JavaScript?", answer: "//" }
];

// Function to run the quiz:
function runQuiz() {
  let score = 0; // initialize score

  // Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input
    const userInput = prompt(quizQuestions[i].question); // ask question

    // Check answer (case-insensitive and trimmed)
    if (userInput && userInput.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong. Correct answer: ${quizQuestions[i].answer}`);
    }
  }

  // Show final score
  alert(`Quiz over! Your score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();