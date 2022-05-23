import { getElements } from './getElements.js';

export function bookmarks() {
  const allBookmarkButtons = getElements('bookmarkClick');
  //document.querySelectorAll('[data-js="bookmarkClick"]');

  allBookmarkButtons.forEach(bookmarkElement => {
    const bookmarkImage = bookmarkElement.querySelector(':scope > img'); //getElement('bookmarkIcon');

    bookmarkElement.addEventListener('click', () => {
      bookmarkImage.classList.toggle('bookmark-button__image--marked');

      /* SPECIAL CASE: Bookmarks in mainBookmark SPECIAL CASE
      In the mainBookmarks=active toggle-off the bookmarks 
      let bookmarked-sections disappear*/
      const mainBookmarks = document.querySelector('[data-js="mainBookmarks"]');
      if (
        mainBookmarks.contains(bookmarkElement) &&
        !bookmarkElement.classList.contains('bookmark-button__image--marked')
      ) {
        bookmarkElement.parentNode.classList.add('hide-it');
      }
    });
  });
}
