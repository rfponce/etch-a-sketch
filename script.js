// Create a div and show it to canvas
function generateSquare(sizeInPx) {
  const canvas = document.getElementById('canvas');
  let square = document.createElement('div');

  square.classList.add('canvasSquare');
  square.style.width = sizeInPx;
  square.style.height = sizeInPx;
  square.style.border = "1px solid black";
  canvas.appendChild(square);
}