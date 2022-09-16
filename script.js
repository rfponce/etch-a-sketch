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
  let totalNumberOfSquares = squaresPerSide * squaresPerSide;
  
  for (let i = 0; i < totalNumberOfSquares; i++) {
    generateSquare(squareSize);
  }

  for (let i = 0; i < squaresPerSide; i++) {
    canvas.style.gridTemplateColumns = `${canvas.style.gridTemplateColumns} auto`;
  }
}