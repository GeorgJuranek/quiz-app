const homeButton = document.querySelector('[data-js="homeButton"]');
const bookmarksButton = document.querySelector('[data-js="bookmarksButton"]');
const createButton = document.querySelector('[data-js="createButton"]');
const profileButton = document.querySelector('[data-js="profileButton"]');

const mainIndex = document.querySelector('[data-js="mainIndex"]');
const mainBookmarks = document.querySelector('[data-js="mainBookmarks"]');
const mainCreate = document.querySelector('[data-js="mainCreate"]');
const mainProfile = document.querySelector('[data-js="mainProfile"]');

console.log("Hello");

/*function changeMain(main) {
  
    console.log("main:" + main.type);

  mainIndex.classList.remove("active");
  mainIndex.classList.add("hide-it");

  mainBookmarks.classList.remove("active");
  mainBookmarks.classList.add("hide-it");

  mainCreate.classList.remove("active");
  mainCreate.classList.add("hide-it");

  mainProfile.classList.remove("active");
  mainProfile.classList.add("hide-it");


  main.classList.remove("hide-it");
  main.classList.add("active");
}


home.addEventListener("click", changeMain(mainIndex));
bookmarks.addEventListener("click", changeMain(mainBookmarks));
create.addEventListener("click", changeMain(mainCreate));
profile.addEventListener("click", changeMain(mainProfile));
*/

function toggleDisplay() {
  mainBookmarks.classList.toggle("hide-it");
}
bookmarksButton.addEventListener("click", toggleDisplay);

function toggleDisplay() {
  mainCreate.classList.toggle("hide-it");
}
createButton.addEventListener("click", toggleDisplay);

//homeButton.addEventListener("click",);

//createButton.addEventListener("click", toggleDisplay(mainCreate));

//createButton.addEventListener("click",);

//profileButton.addEventListener("click",);
