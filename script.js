// Create a div and show it to canvas
function generateSquare(sizeInPx) {
  const canvas = document.getElementById('canvas');
  let square = document.createElement('div');

  square.classList.add('canvasSquare');
  square.style.width = `${sizeInPx}px`;
  square.style.height = `${sizeInPx}px`;
  square.style.border = "1px solid black";
  canvas.appendChild(square);
}