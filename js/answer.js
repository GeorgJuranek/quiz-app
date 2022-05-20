import { getElements } from './getElements.js';

export function toggleAnswer() {
  const toggleAnswerButtons = getElements('toggleAnswerButton');
  //document.querySelectorAll('[data-js="toggleAnswerButton"]');

  toggleAnswerButtons.forEach(answerBlock => {
    const showAnswerText = answerBlock.querySelector(':scope > span');
    const answerSection = answerBlock.querySelector(':scope > section');

    answerBlock.addEventListener('click', () => {
      showAnswerText.classList.toggle('hide-it');
      answerSection.classList.toggle('hide-it');
    });
  });
}
