const squaresButton = document.getElementById('squares-per-side');

// Create a div and show it to canvas
function generateSquare(sizeInPx=60) {
  const canvas = document.getElementById('canvas');
  let square = document.createElement('div');

  square.classList.add('canvasSquare');
  square.style.width = `${sizeInPx}px`;
  square.style.height = `${sizeInPx}px`;
  square.style.border = "1px solid black";
  canvas.appendChild(square);
}

function fillCanvas(squaresPerSide=16) {
  const canvas = document.getElementById('canvas');
  let squareSize = Math.floor(canvas.offsetWidth / squaresPerSide);
  // Calculates the total number of squares that fit into canvas, and generate them
  let totalNumberOfSquares = squaresPerSide * squaresPerSide;
  
  for (let i = 0; i < totalNumberOfSquares; i++) {
    generateSquare(squareSize);
  }

  // Fill the "grid template columns" CSS property with the same number of "auto"s as the columns needed
  for (let i = 0; i < squaresPerSide; i++) {
    canvas.style.gridTemplateColumns = `${canvas.style.gridTemplateColumns} auto`;
  }
}

function askForSquares() {
  let squaresPerSide = prompt("Enter the desired number of squares per side. It must be a number between 1 and 100");

  if (isNaN(squaresPerSide) === true) {
    return alert("Only numbers are valid");
  }
  else if ((squaresPerSide < 1) || (squaresPerSide > 100)) {
    return alert("The number must be between 1 and 100");
  }

  fillCanvas(squaresPerSide);
}

squaresButton.addEventListener('click', askForSquares);