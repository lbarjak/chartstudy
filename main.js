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
let fontSize = 18
ctx.font = fontSize + "px sans"
ctx.textAlign = "end"

ctx.transform(0.9, 0, 0, -0.8, width * 0.07, height * 0.85)

drawLine(ctx, [0, 0], [width, 0])
drawLine(ctx, [0, 0], [0, height])

drawXText = (text, x) => {
    ctx.save()
    ctx.scale(1, -1)
    ctx.fillStyle = "gray"
    ctx.textAlign = "center"
    ctx.fillText(text, x, fontSize * 1.8)
    ctx.restore()
}

drawYText = (i, y) => {
    ctx.save()
    ctx.scale(1, -1)
    ctx.fillStyle = "gray";
    ctx.fillText(i, -fontSize, -y + fontSize / 3)
    ctx.restore()
}

xTicks = () => {
    let ticks = xStickDates.length - 1
    for (i = 0; i <= ticks; i++) {
        let x = width * i / ticks
        if (i % 4 == 0) {
            drawLine(ctx, [x, -10], [x, height], 'gray')
        } else {
            drawLine(ctx, [x, -10], [x, 0], 'gray')
        }
        drawXText(xStickDates[i][1], x)
    }
}

yTicks = () => {
    let yTickMin = Math.round(Math.min(...temps))
    let yTickMax = Math.round(Math.max(...temps))
    let ticks = yTickMax - yTickMin
    for (i = 0; i <= ticks; i++) {
        let y = height * i / ticks
        drawLine(ctx, [-10, y], [width, y], 'gray')
        drawYText(i + yTickMin, y)
    }
}

xTicks()
yTicks()

