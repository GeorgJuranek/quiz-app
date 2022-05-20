//import { getElements } from './getElements.js';

console.clear();

import { get1Element } from './get1Element.js';

export function mainManager() {
  /*
  const homeButton = get1Element('homeButton');
  const bookmarksButton = get1Element('bookmarksButton');
  const createButton = get1Element('createButton');
  const profileButton = get1Element('profileButton');

  const mainIndex = get1Element('mainIndex');
  const mainBookmarks = get1Element('mainBookmarks');
  const mainCreate = get1Element('mainCreate');
  const mainProfile = get1Element('mainProfile');

  //console.log('Hello');

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
  });*/

  /////Variables

  //Buttons
  const homeButton = get1Element('homeButton');
  const bookmarksButton = get1Element('bookmarksButton');
  const createButton = get1Element('createButton');
  const profileButton = get1Element('profileButton');

  //Mains
  const mainIndex = get1Element('mainIndex');
  const mainBookmarks = get1Element('mainBookmarks');
  const mainCreate = get1Element('mainCreate');
  const mainProfile = get1Element('mainProfile');

  const allMains = document.querySelectorAll('[data-main="entity"]');
  //const allMains = [mainIndex, mainBookmarks, mainCreate, mainProfile];

  ////EventListeneners
  homeButton.addEventListener('click', () => mainChanger(mainIndex));
  bookmarksButton.addEventListener('click', () => mainChanger(mainBookmarks));
  createButton.addEventListener('click', () => mainChanger(mainCreate));
  profileButton.addEventListener('click', () => mainChanger(mainProfile));
  /*NOTIZ: hier müssen Pfeil-funktionen benutzt werden, 
  sonst wird die Funktion ohne click-event einfach ausgeführt
  weil es sich um callback-funktionen handelt, denen anders 
  kein Parameter übergeben werden kann!*/

  ////Functions
  function mainChanger(newMain) {
    //
    //Compare "newMain" with content of "allMains" in forEach-loop
    allMains.forEach(loopingMains => {
      if (
        newMain == loopingMains &&
        loopingMains.classList.contains('hide-it')
      ) {
        // if the "newMain" was found in "allMains" and check if "hide-it" is true
        loopingMains.classList.remove('hide-it');
      } else {
        // if the single content of "allMains"!="newMain" check if "hide-it" is already equiped
        if (!loopingMains.classList.contains('hide-it')) {
          loopingMains.classList.add('hide-it');
        }
      }
    });
  }
}
