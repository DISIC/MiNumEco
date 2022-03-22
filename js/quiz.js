const quizForm = document.querySelector('[data-quiz-json]');
const jsonUrl = quizForm.attributes['data-quiz-json'].value;

readJsonFile(jsonUrl, runQuiz);

let jsonData = {};
let quizStep = 0;
let score = 0;

function runQuiz(text) {
    jsonData = JSON.parse(text);
    renderStep();
    quizForm.onsubmit = submitQuiz;
}

function renderStep() {
    const question = jsonData.questions[quizStep];

    if (!question) {
        score = 0;
        quizStep = 0;
        renderStep();
        return;
    }

    let answersHtml = '';
    for (const index in question.answers) {
        answersHtml += `<div class="fr-radio-group fr-radio-rich">
            <input type="radio" id="quiz-radio-rich-${index}" name="answer" value="${question.answers[index].title}" required>
            <label class="fr-label" for="quiz-radio-rich-${index}">${question.answers[index].title}</label>
        </div>`;
    }

    quizForm.innerHTML = `<fieldset class="fr-fieldset " aria-labelledby="quiz-radio-rich-legend" role="group">
        <legend class="fr-fieldset__legend" id='quiz-radio-rich-legend'>
            ${(quizStep+1)}. ${question.question}
        </legend>
        <div class="fr-fieldset__content">
            ${answersHtml}
        </div>
    </fieldset>
    <div class="fr-form-group">
        <button type="submit" class="fr-btn">Valider ma réponse</button>
    </div>`;
}

function checkAnswer(userAnswer) {
    const question = jsonData.questions[quizStep];

    let rightAnswer = null;
    for (const index in question.answers) {
        if (question.answers[index].isRight) {
            rightAnswer = question.answers[index].title;
            break;
        }
    }

    if (userAnswer === rightAnswer) {
        ++score;
    }

    quizForm.innerHTML = `<p><b>${(quizStep+1)}. ${question.question}</b></p>`
    + (userAnswer === rightAnswer
        ? `<div class="fr-alert fr-alert--success fr-mb-1w">
            <p class="fr-alert__title">Bien joué !</p>
            <p>La bonne réponse est bien : « ${rightAnswer} »</p>
            <p>${question.answerInformation ? question.answerInformation : ''}</p>
        </div>`
        : `<div class="fr-alert fr-alert--error fr-mb-1w">
            <p class="fr-alert__title">Mauvaise réponse.</p>
            <p>La bonne réponse est : « ${rightAnswer} »</p>
            <p>${question.answerInformation ? question.answerInformation : ''}</p>
        </div>`
    )
    + (jsonData.questions[quizStep+1]
        ? `<div class="fr-form-group">
            <button type="submit" class="fr-btn">Question suivante</button>
        </div>`
        : `<div class="fr-alert fr-alert--info">
            <p class="fr-alert__title">C'est fini !</p>
            <p>Votre score : ${score} / ${quizStep+1}</p>
            <p><button type="submit" class="fr-btn fr-btn--secondary">Refaire le questionnaire</button></p>
        </div>`
    );
}

function submitQuiz(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const userAnswer = data.get('answer');
    
    if (null === userAnswer) {
        ++quizStep;
        renderStep();
        return;
    }

    checkAnswer(userAnswer);
}

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}