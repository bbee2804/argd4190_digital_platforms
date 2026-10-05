document.addEventListener("DOMContentLoaded", function () {

  let dog = document.getElementById("dog");
  let rotate = document.getElementById("rotate");
  let skewX = document.getElementById("skewX");
  let skewY = document.getElementById("skewY");
  let scale = document.getElementById("scale");

  if (dog && rotate && skewX && skewY && scale) {
    function updateDog() {
      let r = rotate.value;
      let x = skewX.value;
      let y = skewY.value;
      let s = scale.value;
      dog.style.transform = "rotate(" + r + "deg) skewX(" + x + "deg) skewY(" + y + "deg) scale(" + s + ")";
    }

    rotate.addEventListener("input", updateDog);
    skewX.addEventListener("input", updateDog);
    skewY.addEventListener("input", updateDog);
    scale.addEventListener("input", updateDog);
    updateDog();
  }

  let overlayText = document.getElementById("overlay-text");
  let textInput = document.getElementById("textInput");
  let textColor = document.getElementById("textColor");
  let textX = document.getElementById("textX");
  let textY = document.getElementById("textY");

  if (overlayText && textInput && textColor && textX && textY) {
    function updateText() {
      overlayText.textContent = textInput.value;
      overlayText.style.color = textColor.value;
      overlayText.style.left = textX.value + "px";
      overlayText.style.top = textY.value + "px";
    }

    textInput.addEventListener("input", updateText);
    textColor.addEventListener("input", updateText);
    textX.addEventListener("input", updateText);
    textY.addEventListener("input", updateText);
    updateText();
  }

  let dahlia = document.getElementById("dahlia");
  let dahliaX = document.getElementById("dahliaX");
  let dahliaY = document.getElementById("dahliaY");

  if (dahlia && dahliaX && dahliaY) {
    function updateDahlia() {
      dahlia.style.left = dahliaX.value + "px";
      dahlia.style.top = dahliaY.value + "px";
    }
    dahliaX.addEventListener("input", updateDahlia);
    dahliaY.addEventListener("input", updateDahlia);
    updateDahlia();
  }

  let circle = document.getElementById("circle");
  let circleX = document.getElementById("circleX");
  let circleY = document.getElementById("circleY");

  if (circle && circleX && circleY) {
    function updateCircle() {
      circle.style.left = circleX.value + "px";
      circle.style.top = circleY.value + "px";
    }
    circleX.addEventListener("input", updateCircle);
    circleY.addEventListener("input", updateCircle);
    updateCircle();
  }

  let pink = document.getElementById("pink");
  let pinkX = document.getElementById("pinkX");
  let pinkY = document.getElementById("pinkY");

  if (pink && pinkX && pinkY) {
    function updatePink() {
      pink.style.left = pinkX.value + "px";
      pink.style.top = pinkY.value + "px";
    }
    pinkX.addEventListener("input", updatePink);
    pinkY.addEventListener("input", updatePink);
    updatePink();
  }

  initLibrary();
});

let allBooks = [];

function initLibrary() {
  let bookGrid = document.getElementById("bookGrid");
  let genreSelect = document.getElementById("genreSelect");

  if (!bookGrid) return;

  fetch("library.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not fetch library.json");
      }
      return response.json();
    })
    .then(function (data) {
      allBooks = data;

      if (genreSelect) {
        genreSelect.innerHTML = '<option value="all">All Genres</option>';
        let genres = [];

        for (let i = 0; i < allBooks.length; i++) {
          if (allBooks[i].genre) {
            let genre = allBooks[i].genre.trim();
            if (!genres.includes(genre)) {
              genres.push(genre);
              let option = document.createElement("option");
              option.value = genre;
              option.textContent = genre;
              genreSelect.appendChild(option);
            }
          }
        }

        genreSelect.addEventListener("change", function () {
          let selectedGenre = genreSelect.value;
          if (selectedGenre === "all") {
            displayBooks(allBooks);
          } else {
            let filtered = [];
            for (let i = 0; i < allBooks.length; i++) {
              if (allBooks[i].genre && allBooks[i].genre.trim() === selectedGenre) {
                filtered.push(allBooks[i]);
              }
            }
            displayBooks(filtered);
          }
        });
      }

      displayBooks(allBooks);
    })
    .catch(function (error) {
      console.error("Error loading library:", error);
      bookGrid.innerHTML = "<p>Could not load library.json. Make sure you are using Live Server!</p>";
    });
}

function displayBooks(books) {
  let bookGrid = document.getElementById("bookGrid");
  if (!bookGrid) return;

  bookGrid.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    let card = document.createElement("div");
    card.className = "card";

    let altText = book.alttext ? book.alttext : book.title;

    card.innerHTML = 
      '<div class="card-title">' + book.title + '</div>' +
      '<div class="card-author">' + book.author + '</div>' +
      '<img class="card-image" src="' + book.local_image + '" alt="' + altText + '">' +
      '<div class="card-genre">' + book.genre + '</div>';

    bookGrid.appendChild(card);
  }
}