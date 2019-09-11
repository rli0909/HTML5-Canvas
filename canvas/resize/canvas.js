// console.log('r/place');

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context =  canvas.getContext('2d');

// context.fillStyle = "#FF3855";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "#FFF700";
// context.fillRect(400, 100, 100, 100);
// context.fillStyle = "#50BFE6";
// context.fillRect(700, 100, 100, 100);

// console.log(canvas);

// // Line
// context.beginPath();
// context.moveTo(200, 200);
// context.lineTo(300, 300);
// context.lineTo(400, 200);
// context.strokeStyle = "#FF5470";
// context.stroke();

// context.beginPath();
// context.moveTo(500, 200);
// context.lineTo(600, 300);
// context.lineTo(700, 200);
// context.strokeStyle = "#FFF700";
// context.stroke();

// Arc | Circle
// context.beginPath();
// context.strokeStyle = "#FFF700";
// context.arc(150, 150, 30, Math.PI * 2, false);
// context.stroke();

// context.beginPath();
// context.strokeStyle = "#50BFE6";
// context.arc(450, 150, 30, Math.PI * 2, false);
// context.stroke();

// context.beginPath();
// context.strokeStyle = "#FF3855";
// context.arc(750, 150, 30, Math.PI * 2, false);
// context.stroke();

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     context.beginPath();
//     // var r = Math.getRandomInt(0, 255);
//     // var g = Math.getRandomInt(0, 255);
//     // var b = Math.getRandomInt(0, 255);
//     context.strokeStyle = `rgb(${Math.getRandomInt(0, 255)},${Math.getRandomInt(0, 255)},${Math.getRandomInt(0, 255)})`;
    
//     context.arc(x, y, 30, Math.PI * 2, false);
//     context.stroke();
// }

// context.beginPath();
// context.strokeStyle = "#50BFE6";
// context.arc(450, 150, 30, Math.PI * 2, false);
// context.stroke();

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 4;

var colorArray = [
    '#00A8A5',
    '#EEA900',
    '#FFEEB0',
    '#DF0045',
    '#1B245C'
];

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize', function(event){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})



// object circle
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dy;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    // anonymous function
    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius,0, Math.PI * 2, false);
        context.strokeStyle = "#50BFE6";
        //context.stroke();
        context.fillStyle = this.color;
        context.fill();
    };

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.y += this.dy;


        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < maxRadius){
                this.radius += 2;
            }
            
        }else if(this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    };
}

var circleArray = [];

function init(){
    // clean circleArray before init
    circleArray = [];
    for(var i = 0; i < 1000; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * innerWidth - (radius * 2) + radius;
        var y = Math.random() * innerHeight - (radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

init();
animate();