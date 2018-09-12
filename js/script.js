let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let img = new Image()
img.src = './sprites/enemy.png'

ctx.drawImage(img, 20, 20, 20, 20)