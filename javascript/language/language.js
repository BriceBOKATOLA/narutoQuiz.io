// Start Quiz;
const startQuizFront = document.querySelector('.start-quiz .front');

// Info box;
const infoBoxTitle = document.querySelector('.info-box-title h3');

const ruleOne = document.querySelector('.info-box li:nth-child(1)');
const ruleTwo = document.querySelector('.info-box li:nth-child(2)');
const ruleThree = document.querySelector('.info-box li:nth-child(3)');
const ruleFour = document.querySelector('.info-box li:nth-child(4)');
const ruleFive = document.querySelector('.info-box li:nth-child(5)');

// Quiz Box;
const quizTimer = document.querySelector('.timer-text');
const totalQuestions = document.querySelector('.total-questions');

// Result Box;
const ResultMessage = document.querySelector('.result-box-text');

// Changing the language of the page;
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

if (window.location.hash) {
    if (window.location.hash === '#ptBr') {
        // Start Quiz;
        startQuizFront.innerHTML = "Start Quiz !";

        // Info Box; regle
        infoBoxTitle.textContent = "Some quiz rules *";
        ruleOne.innerHTML = "1. You will only have <span>15 segundos</span> to answer each question.";
        ruleTwo.innerHTML = "2. Once the answer has been selected, it cannot be undone.";
        ruleThree.innerHTML = "3. You won't be able to select any options once the time is up.";
        ruleFour.innerHTML = "4. You won't be able to leave the Quiz while you're playing.";
        ruleFive.innerHTML = "5. You will receive points according to your successes.";

        exitBtn.innerHTML = "Exit";
        continueBtn.innerHTML = "Continue";

        // Quiz Box;
        questions[0].question = "What is the name of Nine Tails ?";
        questions[1].question = "What was Obito/Madara's final plan called ?";
        questions[2].question = "What is the name of Zabuza's sword ?";
        questions[3].question = "How many times did Naruto fail his graduation test at the academy ?";
        questions[3].options = [
            "Once",
            "Four times",
            "Twice",
            "Three times"
        ];
        questions[3].answer = "Three times";
        questions[4].question = "What name was given to the leader of the Water Village (kirigakure) ?"
        questions[5].question = "Who below has Kekkei Tōta ?";
        questions[6].question = "What is the name of the protagonist in the first book of Jiraiya - The Tale of a Fearless Ninja ?";
        questions[7].question = "What was Kakashi's father called ?";
        questions[7].options = [
            "White dog",
            "White Canine",
            "White Lion",
            "White Bird",
        ];
        questions[7].answer = "White Canine";
        questions[8].question = "Who told Naruto that if he stole the Forbidden Scroll, he would pass the exam ?";
        questions[9].question = "What was the name of Itachi's first partner in Akatsuki ?";

        quizText.innerHTML = "Time";

        nextBtn.innerHTML = "Next Question";

        // Result Box;
        ResultMessage.innerHTML = "You've completed the Quiz! And...";
        quitQuiz.innerHTML = "Quit the Quiz";
        restartQuiz.innerHTML = "Restart Quiz";
    }
}

// Language Menu;
const languageMenu = document.querySelector('.language-menu');
const languages = document.querySelector('.language-list');

languageMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Two handle clickers at the same time — this one and the window one. Here's a bug because it can't handle two at once. So we need to stop one for the another occur;
    languages.classList.add('show');
});

// If user clicks anywhere on the page, closes language menu;
window.addEventListener('click', (e) => {
    if (e.target !== languageMenu) {
        languages.classList.remove('show')
    }
})