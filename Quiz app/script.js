const quizData = [
    {
        question: 'What does HTML stand for?',
        choices: ['Hypertext Markup Language', 'Hyperlink Text Markup Language', 'Hyper Tool Markup Language'],
        correct: 'Hypertext Markup Language'
    },
    {
        question: 'What does CSS stand for?',
        choices: ['Cascading Style Sheets', 'Cascading Simple Sheets', 'Colorful Style Sheets'],
        correct: 'Cascading Style Sheets'
    },
    {
        question: 'What does JS stand for?',
        choices: ['JavaScript', 'JavaSource', 'JavaStyle'],
        correct: 'JavaScript'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = quizData[currentQuestionIndex].question;
    choicesElement.innerHTML = '';

    quizData[currentQuestionIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectChoice(choice);
        choicesElement.appendChild(button);
    });
}

function selectChoice(choice) {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    if (choice === correctAnswer) {
        score++;
    }
    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById('next').disabled = true;
    } else {
        showScore();
    }
}

function showScore() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = `<h1>Quiz Completed</h1>
                                 <p>Your score: ${score} out of ${quizData.length}</p>`;
}

document.getElementById('next').disabled = true;
loadQuestion();
