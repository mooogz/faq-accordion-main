let answer = document.getElementById('accordion-answer-1');
let answer2 = document.getElementById('accordion-answer-2');
let answer3 = document.getElementById('accordion-answer-3');
let answer4 = document.getElementById('accordion-answer-4');
let answerButton = document.getElementById('answer-1');
let answerButton2 = document.getElementById('answer-2');
let answerButton3 = document.getElementById('answer-3');
let answerButton4 = document.getElementById('answer-4');

answerButton.addEventListener('click', function showAnswer() {
    if(answerButton.getAttribute('src') === 'assets/images/icon-plus.svg') {
        answerButton.setAttribute('src', 'assets/images/icon-minus.svg');
        answer.style.display = 'block';
    } else {
        answerButton.setAttribute('src', 'assets/images/icon-plus.svg')
        answer.style.display = 'none';
    }
})

answerButton2.addEventListener('click', function showAnswer() {
    if(answerButton2.getAttribute('src') === 'assets/images/icon-plus.svg') {
        answerButton2.setAttribute('src', 'assets/images/icon-minus.svg');
        answer2.style.display = 'block';
    } else {
        answerButton2.setAttribute('src', 'assets/images/icon-plus.svg')
        answer2.style.display = 'none';
    }
})

answerButton3.addEventListener('click', function showAnswer() {
    if(answerButton3.getAttribute('src') === 'assets/images/icon-plus.svg') {
        answerButton3.setAttribute('src', 'assets/images/icon-minus.svg');
        answer3.style.display = 'block';
    } else {
        answerButton3.setAttribute('src', 'assets/images/icon-plus.svg')
        answer3.style.display = 'none';
    }
})

answerButton4.addEventListener('click', function showAnswer() {
    if(answerButton4.getAttribute('src') === 'assets/images/icon-plus.svg') {
        answerButton4.setAttribute('src', 'assets/images/icon-minus.svg');
        answer4.style.display = 'block';
    } else {
        answerButton4.setAttribute('src', 'assets/images/icon-plus.svg')
        answer4.style.display = 'none';
    }
})