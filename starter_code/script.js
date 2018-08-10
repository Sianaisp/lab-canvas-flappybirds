var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
isGamestarted = false;
var img = new Image();
img.src = "images/bg.png";

var backgroundImage = {
    img: img,
    x: 0,
    speed: -1,

    move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
    },

    draw: function() {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
            ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
            ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
    }
};

//var myFlappy = new Flappy(2, 2, 0, 0, 0.1, 3);

function updateCanvas() {
    backgroundImage.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    //myFlappy.draw();
    requestAnimationFrame(updateCanvas);
}

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        if (!isGamestarted) {
            isGamestarted = true;
            startGame();
        }
    };

    function startGame() {
        img.onload = updateCanvas();
    }
};

function Flappy(width, height, speedX, speedY, gravity, gravitySpeed) {
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.gravity = gravity;
    this.gravitySpeed = gravitySpeed;

    this.img = new Image();
    img.src = "images/flappy.png";
    this.draw = function() {
        ctx.drawImage(this.img, 100, 100);
    };
}
