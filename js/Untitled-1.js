// 获取Canvas元素
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置Canvas大小
canvas.width = 300;
canvas.height = 300;

// 绘制心形函数
function drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + size / 2, y - size / 2, x + size * 1.5, y - size / 2, x + size * 2, y);
    ctx.bezierCurveTo(x + size * 2.5, y + size / 2, x + size, y + size * 1.5, x, y + size * 2);
    ctx.bezierCurveTo(x - size, y + size * 1.5, x - size * 2.5, y + size / 2, x - size * 2, y);
    ctx.bezierCurveTo(x - size * 1.5, y - size / 2, x - size / 2, y - size / 2, x, y);
    ctx.fillStyle = 'red'; // 设置心形颜色
    ctx.fill();
    ctx.closePath();
}

// 绘制心形图案
drawHeart(ctx, 150, 150, 50);
