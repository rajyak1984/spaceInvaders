let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let img = new Image();
let img2 = new Image();

let x = 1;
let y = 10;

let dx = 10;
let dy = 50;

let spriteRadius = 25;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy();

    x += dx;

    if(x + dx >= 150 || x + dx < 10) {
        dx = -dx;
        y += 5
    }
}

function drawEnemy() {
    img.onload = function () {
        let enemy1 = ctx.drawImage(img, x, y); // source , left/right, up/down, width, height 
        
        let i = x + 30
        let enemy2 = ctx.drawImage(img, i, y); // source , left/right, up/down, width, height 

        let u = x + 60
        let enemy3 = ctx.drawImage(img, u, y); // source , left/right, up/down, width, height 

        let o = x + 90
        let enemy4 = ctx.drawImage(img, o, y); // source , left/right, up/down, width, height
        
        let q = x + 120
        let enemy5 = ctx.drawImage(img, q, y); // source , left/right, up/down, width, height
        
        if (y == 30) {
            enemy5 = ctx.Image(img, 500, 500);
        }
    }

    img.src = '../sprites/enemy.png';
}


setInterval(draw, 170);
drawBlocks()