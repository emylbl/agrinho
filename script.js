const questions = [
    {
        question: "Quem é o protagonista principal de 'O Guarani'?",
        answers: [
            { text: "Peri", correct: true },
            { text: "D. Maria", correct: false },
            { text: "Lusiana", correct: false },
            { text: "Cecília", correct: false }
        ]
    },
    {
        question: "Onde se passa a maior parte da história de 'O Guarani'?",
        answers: [
            { text: "No sertão nordestino", correct: false },
            { text: "Em São Paulo", correct: false },
            { text: "Na floresta", correct: true },
            { text: "No Rio de Janeiro", correct: false }
        ]
    },
    {
        question: "Qual é o nome da índia que Peri ama em 'O Guarani'?",
        answers: [
            { text: "Cecília", correct: false },
            { text: "Marta", correct: false },
            { text: "Isabel", correct: false },
            { text: "Lusiana", correct: true }
        ]
    },
    {
        question: "Quem é o vilão que tenta sequestrar Isabel em 'O Guarani'?",
        answers: [
            { text: "Cacique Aimberê", correct: false },
            { text: "Cecília", correct: false },
            { text: "Fernão", correct: true },
            { text: "Domingos", correct: false }
        ]
    },
    {
        question: "Qual é o tema principal de 'O Guarani'?",
        answers: [
            { text: "A vida nas cidades", correct: false },
            { text: "O conflito entre os povos indígenas e os colonizadores", correct: true },
            { text: "O amor não correspondido", correct: false },
            { text: "A luta pela independência", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score-text");
const resultContainer = document.getElementById("result-container");
const restartButton = document.getElementById("restart-button");

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener("click", restartGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.classList.remove("hide");
}

function showResult() {
    questionText.textContent = "Você completou o quiz!";
    scoreText.textContent = `Sua pontuação: ${score} de ${questions.length}`;
    nextButton.classList.add("hide");
    resultContainer.classList.remove("hide");
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.classList.add("hide");
    showQuestion();
}

startGame();
