const homeButton = document.querySelector('[data-js="homeButton"]');
const bookmarksButton = document.querySelector('[data-js="bookmarksButton"]');
const createButton = document.querySelector('[data-js="createButton"]');
const profileButton = document.querySelector('[data-js="profileButton"]');

const mainIndex = document.querySelector('[data-js="mainIndex"]');
const mainBookmarks = document.querySelector('[data-js="mainBookmarks"]');
const mainCreate = document.querySelector('[data-js="mainCreate"]');
const mainProfile = document.querySelector('[data-js="mainProfile"]');

console.log('Hello');

homeButton.addEventListener('click', () => {
  mainIndex.classList.remove('hide-it');
  mainBookmarks.classList.add('hide-it');
  mainCreate.classList.add('hide-it');
  mainProfile.classList.add('hide-it');
});

bookmarksButton.addEventListener('click', () => {
  mainIndex.classList.add('hide-it');
  mainBookmarks.classList.remove('hide-it');
  mainCreate.classList.add('hide-it');
  mainProfile.classList.add('hide-it');
});

createButton.addEventListener('click', () => {
  mainIndex.classList.add('hide-it');
  mainBookmarks.classList.add('hide-it');
  mainCreate.classList.remove('hide-it');
  mainProfile.classList.add('hide-it');
});

profileButton.addEventListener('click', () => {
  mainIndex.classList.add('hide-it');
  mainBookmarks.classList.add('hide-it');
  mainCreate.classList.add('hide-it');
  mainProfile.classList.remove('hide-it');
});
