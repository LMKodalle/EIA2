var Endgame;
(function (Endgame) {
    class Bubble extends Endgame.MovingObject {
        constructor() {
            super();
            this.dy = Math.random() * -2 - 1;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x - 3, this.y - 50, 10, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(bubble);
            Endgame.crc.stroke(bubble);
            let bubblebubble = new Path2D();
            bubblebubble.arc(this.x, this.y - 53, 2, 0, 2 * Math.PI);
            Endgame.crc.stroke(bubblebubble);
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
    Endgame.Bubble = Bubble;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Bubble.js.map