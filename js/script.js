let canvas = document.getElementById("gameCanvas");
let ctx;

let drawImage = () => {
        ctx = $("canvas")[0].getContext("2d"),
        img = new Image();

    img.onload = function () {
        ctx.drawImage(img, 30, 30, 50, 50);
    };
    img.src = "http://www.pngmart.com/files/4/Space-Invaders-PNG-HD.png";
}

document.getElementById("button").addEventListener('click', (drawImage));