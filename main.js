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
ctx.font = fontSize + "px 'Inconsolata'"
ctx.fontStretch = "condensed";
ctx.textAlign = "end"

ctx.transform(0.9, 0, 0, -0.8, width * 0.07, height * 0.85)

drawLine(ctx, [0, 0], [width, 0])
drawLine(ctx, [0, 0], [0, height])

drawXText = (text, x, y = 0) => {
    ctx.save()
    ctx.scale(1, -1)
    ctx.fillStyle = "gray"
    ctx.textAlign = "center"
    ctx.fillText(text, x, y + fontSize * 1.8)
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
    let xTicks = xStickDates.length - 1
    for (i = 0; i <= xTicks; i++) {
        let x = width * i / xTicks
        if (i % 4 == 0) {
            drawLine(ctx, [x, -10], [x, height], 'black')
        } else {
            drawLine(ctx, [x, -10], [x, height], 'gray')
        }
        drawXText(xStickDates[i][1], x)
        if (i % 4 == 2) {
            drawXText(xStickDates[i][2], x, fontSize)
            drawXText(xStickDates[i][0], x, 2 * fontSize)
        }
    }
}

let yTickMin = Math.round(Math.min(...temps.filter(x => x)))
let yTickMax = Math.round(Math.max(...temps))
let yTicks
yTicks = () => {
    yTicks = yTickMax - yTickMin
    for (i = 0; i <= yTicks; i++) {
        let y = height * i / yTicks
        drawLine(ctx, [-10, y], [width, y], 'gray')
        drawYText(i + yTickMin, y)
    }
}

graph = () => {
    ctx.save()
    ctx.fillStyle = "blue"
    for (i = 0; i < temps.length; i++) {
        if (i > temps.length / 2) {
            ctx.fillStyle = "red"
        }
        ctx.beginPath();
        ctx.arc(i, (height / yTicks) * (temps[i] - yTickMin), 2, 0, 2 * Math.PI, true);
        ctx.fill();
    }
    ctx.restore()
}

xTicks()
yTicks()
graph()

