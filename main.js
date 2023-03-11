console.log(temps)

let graph = document.getElementsByTagName('canvas')[0]

function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}

window.ctx = graph.getContext('2d')
let ratio = window.innerHeight / window.innerWidth
graph.height = window.innerHeight
graph.width = window.innerWidth
let width = graph.width
let height = graph.height

ctx.fillStyle = 'lightgray'
ctx.fillRect(0, 0, width, height)
ctx.font = "24px serif";
ctx.textAlign = "end"

ctx.transform(0.9, 0, 0, -0.8, width * 0.07, height * 0.85)

drawLine(ctx, [0, 0], [width, 0])
drawLine(ctx, [0, 0], [0, height])

xTicks = () => {
    let ticks = 26
    for (i = 1; i <= ticks; i++) {
        let x = width * i / ticks
        //if (i % 2 - 1) {
        drawLine(ctx, [x, -10], [x, height], 'gray')
        //}
    }
}

yTicks = () => {
    let ticks = 30
    for (i = 0; i <= ticks; i++) {
        let y = height * i / ticks
        drawLine(ctx, [-10, y], [width, y], 'gray')
        ctx.save()
        ctx.scale(1, -1)
        ctx.strokeText(i - 5, -15, -(y + 8) + 15);
        ctx.restore()
    }
}

xTicks()
yTicks()



