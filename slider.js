document.addEventListener('DOMContentLoaded', () => {
  const dog = document.getElementById('dog');
  const overlayText = document.getElementById('overlay-text');
  const dahlia = document.getElementById('dahlia');
  const circle = document.getElementById('circle');
  const pink = document.getElementById('pink');

  const rotateInput = document.getElementById('rotate');
  const skewXInput = document.getElementById('skewX');
  const skewYInput = document.getElementById('skewY');
  const scaleInput = document.getElementById('scale');

  const textInput = document.getElementById('textInput');
  const textColorInput = document.getElementById('textColor');
  const textXInput = document.getElementById('textX');
  const textYInput = document.getElementById('textY');

  const dahliaXInput = document.getElementById('dahliaX');
  const dahliaYInput = document.getElementById('dahliaY');

  const circleXInput = document.getElementById('circleX');
  const circleYInput = document.getElementById('circleY');

  const pinkXInput = document.getElementById('pinkX');
  const pinkYInput = document.getElementById('pinkY');

  function updateDogTransform() {
    dog.style.transform = `rotate(${rotateInput.value}deg) skewX(${skewXInput.value}deg) skewY(${skewYInput.value}deg) scale(${scaleInput.value})`;
  }

  rotateInput.addEventListener('input', updateDogTransform);
  skewXInput.addEventListener('input', updateDogTransform);
  skewYInput.addEventListener('input', updateDogTransform);
  scaleInput.addEventListener('input', updateDogTransform);

  textInput.addEventListener('input', (e) => {
    overlayText.textContent = e.target.value;
  });

  textColorInput.addEventListener('input', (e) => {
    overlayText.style.color = e.target.value;
  });

  textXInput.addEventListener('input', (e) => {
    overlayText.style.left = `${e.target.value}px`;
  });

  textYInput.addEventListener('input', (e) => {
    overlayText.style.top = `${e.target.value}px`;
  });

  dahliaXInput.addEventListener('input', (e) => {
    dahlia.style.left = `${e.target.value}px`;
  });

  dahliaYInput.addEventListener('input', (e) => {
    dahlia.style.top = `${e.target.value}px`;
  });

  circleXInput.addEventListener('input', (e) => {
    circle.style.left = `${e.target.value}px`;
  });

  circleYInput.addEventListener('input', (e) => {
    circle.style.top = `${e.target.value}px`;
  });

  pinkXInput.addEventListener('input', (e) => {
    pink.style.left = `${e.target.value}px`;
  });

  pinkYInput.addEventListener('input', (e) => {
    pink.style.top = `${e.target.value}px`;
  });

  function initPositions() {
    overlayText.style.left = `${textXInput.value}px`;
    overlayText.style.top = `${textYInput.value}px`;
    overlayText.style.color = textColorInput.value;

    dahlia.style.left = `${dahliaXInput.value}px`;
    dahlia.style.top = `${dahliaYInput.value}px`;

    circle.style.left = `${circleXInput.value}px`;
    circle.style.top = `${circleYInput.value}px`;

    pink.style.left = `${pinkXInput.value}px`;
    pink.style.top = `${pinkYInput.value}px`;

    updateDogTransform();
  }

  initPositions();
});