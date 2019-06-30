var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObject {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
            this.dy = +2;
        }
        draw() {
            let piece = new Path2D();
            piece.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "brown";
            Aufgabe11.crc.fill(piece);
            Aufgabe11.crc.stroke(piece);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y == 300) {
                this.dy = 0;
            }
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map