document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    function drawHeart() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(200, 300);
        ctx.bezierCurveTo(200, 100, 50, 100, 50, 250);
        ctx.bezierCurveTo(50, 350, 200, 400, 200, 300);
        ctx.bezierCurveTo(200, 400, 350, 350, 350, 250);
        ctx.bezierCurveTo(350, 100, 200, 100, 200, 300);
        ctx.fill();
    }

    drawHeart();
});
