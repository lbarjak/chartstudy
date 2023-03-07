console.log(temps)

class Graph {
    constructor() {
        this.graph = document.getElementsByTagName('canvas')[0]
    }
    draw() {
        window.ctx = this.graph.getContext('2d')
        this.graph.width = window.innerWidth
        this.graph.height = window.innerHeight
        ctx.fillStyle = '#4d4d4d'
        ctx.fillRect(0, 0, this.graph.width, this.graph.height)
    }
}
var graph = new Graph()
graph.draw()

