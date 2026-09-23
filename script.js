document.addEventListener("DOMContentLoaded", function () {
  let dog = document.getElementById("dog");
  let dahlia = document.getElementById("dahlia");
  let circle = document.getElementById("circle");
  let pink = document.getElementById("pink");
  let overlayText = document.getElementById("overlay-text");

 let rotate = document.getElementById("rotate");
  let skewX = document.getElementById("skewX");
  let skewY = document.getElementById("skewY");
  let scale = document.getElementById("scale");

  let textInput = document.getElementById("textInput");
  let textColor = document.getElementById("textColor");
  let textX = document.getElementById("textX");
  let textY = document.getElementById("textY");

  let dahliaX = document.getElementById("dahliaX");
  let dahliaY = document.getElementById("dahliaY");

  let circleX = document.getElementById("circleX");
  let circleY = document.getElementById("circleY");

  let pinkX = document.getElementById("pinkX");
  let pinkY = document.getElementById("pinkY");

  function updateDog() {
    let r = rotate.value;
    let x = skewX.value;
    let y = skewY.value;
    let s = scale.value;

    dog.style.transform = "rotate(" + r + "deg) skewX(" + x + "deg) skewY(" + y + "deg) scale(" + s + ")";
  }

  function updateText() {
    overlayText.textContent = textInput.value;
    overlayText.style.color = textColor.value;
    overlayText.style.left = textX.value + "px";
    overlayText.style.top = textY.value + "px";
  }

  function updateDahlia() {
    dahlia.style.left = dahliaX.value + "px";
    dahlia.style.top = dahliaY.value + "px";
  }

  function updateCircle() {
    circle.style.left = circleX.value + "px";
    circle.style.top = circleY.value + "px";
  }

  function updatePink() {
    pink.style.left = pinkX.value + "px";
    pink.style.top = pinkY.value + "px";
  }

  rotate.addEventListener("input", updateDog);
  skewX.addEventListener("input", updateDog);
  skewY.addEventListener("input", updateDog);
  scale.addEventListener("input", updateDog);

  textInput.addEventListener("input", updateText);
  textColor.addEventListener("input", updateText);
  textX.addEventListener("input", updateText);
  textY.addEventListener("input", updateText);

  dahliaX.addEventListener("input", updateDahlia);
  dahliaY.addEventListener("input", updateDahlia);

  circleX.addEventListener("input", updateCircle);
  circleY.addEventListener("input", updateCircle);

  pinkX.addEventListener("input", updatePink);
  pinkY.addEventListener("input", updatePink);

  updateDog();
  updateText();
  updateDahlia();
  updateCircle();
  updatePink();
});