var Endgame;
(function (Endgame) {
    class Bubble extends Endgame.MovingObject {
        constructor() {
            super();
            this.x = Math.random() * 550 + 100;
            this.y = 450;
            this.dy = Math.random() * -2 - 1;
            this.r = 10;
            this.type = 3;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(bubble);
            let bubblebubble = new Path2D();
            bubblebubble.arc(this.x, this.y - 5, 2, 0, 2 * Math.PI);
            Endgame.crc.stroke(bubblebubble);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 20 < 0) {
                this.y = 450;
                this.x = Math.random() * 550 + 100;
            }
        }
    }
    Endgame.Bubble = Bubble;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Bubble.js.map