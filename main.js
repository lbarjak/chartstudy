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
graph.width = window.innerWidth * 0.95
graph.height = window.innerHeight * 0.9
let width = graph.width
let height = graph.height
let xMargin = width * 0.01
let yMargin = height * 0.01
ctx.fillStyle = 'lightgray'
ctx.fillRect(0, 0, width, height)
ctx.transform(1, 0, 0, -1, 0, height)
ctx.translate(width * 0.002, height * 0.005)
drawLine(ctx, [xMargin, yMargin], [width * 0.995 - xMargin, yMargin])
drawLine(ctx, [xMargin, yMargin], [xMargin, height * 0.99 - yMargin])

xTicks = () => {
    let ticks = 13
    for (i = 1; i <= ticks; i++) {
        let x = xMargin + 0.95 * width * i / ticks
        drawLine(ctx, [x, 0], [x, height], 'gray')
    }
}

xTicks()

yTicks = () => {
    let ticks = 25
    for (i = 1; i <= ticks; i++) {
        let y = yMargin + 0.93 * width * i / ticks
        drawLine(ctx, [0, y], [width, y], 'gray')
    }
}

yTicks()



