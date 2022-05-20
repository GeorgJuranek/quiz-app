import { getElements } from './getElements.js';

export function bookmarks() {
  const allBookmarkButtons = getElements('bookmarkClick');
  //document.querySelectorAll('[data-js="bookmarkClick"]');

  allBookmarkButtons.forEach(bookmarkElement => {
    const bookmarkImage = bookmarkElement.querySelector(':scope > img'); //getElement('bookmarkIcon');

    bookmarkElement.addEventListener('click', () => {
      bookmarkImage.classList.toggle('bookmark-button__image--marked');
    });
  });
}
