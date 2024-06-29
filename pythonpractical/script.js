const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    
    questionElement.innerHTML = quizData[currentQuestion].question;
    choicesElement.innerHTML = "";
    
    quizData[currentQuestion].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerHTML = choice;
        button.onclick = () => selectAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choice) {
    if (choice === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');
    
    quizElement.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
    resultElement.innerHTML = `You have completed the quiz!`;
}

function submitAnswer() {
    const selectedButton = document.querySelector('#choices button[selected]');
    if (selectedButton) {
        selectAnswer(selectedButton.innerHTML);
    }
}

loadQuestion();
