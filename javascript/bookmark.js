const bookmark = document.querySelector('[data-js="bookmarkClick"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkIcon"]');

console.log(bookmark); //????WO WIRD DAS ANGEZEIGT???

function onClickBookmark() {
  bookmarkImage.classList.toggle('bookmark-button__image--marked');
}

bookmark.addEventListener('click', onClickBookmark);
