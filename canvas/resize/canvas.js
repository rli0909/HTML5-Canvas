// console.log('r/place');

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context =  canvas.getContext('2d');

context.fillStyle = "#FF3855";
context.fillRect(100, 100, 100, 100);
context.fillStyle = "#FFF700";
context.fillRect(400, 100, 100, 100);
context.fillStyle = "#50BFE6";
context.fillRect(700, 100, 100, 100);

console.log(canvas);

// Line
context.beginPath();
context.moveTo(200, 200);
context.lineTo(300, 300);
context.lineTo(400, 200);
context.strokeStyle = "#FF5470";
context.stroke();


