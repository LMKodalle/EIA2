var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObject {
        constructor() {
            super();
            this.dy = Math.random() * -2 - 1;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x - 3, this.y - 50, 10, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "white";
            Aufgabe11.crc.fill(bubble);
            Aufgabe11.crc.stroke(bubble);
            let bubblebubble = new Path2D();
            bubblebubble.arc(this.x, this.y - 53, 2, 0, 2 * Math.PI);
            Aufgabe11.crc.stroke(bubblebubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 20 < 0) {
                this.y = 400;
            }
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubble.js.map