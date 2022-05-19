const toggleAnswer = document.querySelector('[data-js="toggleAnswer"]');

const showAnswer = document.querySelector('[data-js="showAnswerTxt"]');
const correctAnswer = document.querySelector('[data-js="correctAnswerTxt"]');

function switchToAnswer() {
  showAnswer.classList.toggle('hide-it');
  correctAnswer.classList.toggle('hide-it');
}

toggleAnswer.addEventListener('click', switchToAnswer);
