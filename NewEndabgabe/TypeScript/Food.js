var Endgame;
(function (Endgame) {
    class Food extends Endgame.MovingObject {
        constructor() {
            super();
            this.type = 2;
            this.r = 5;
            this.x = Math.floor((Math.random() * 500) + 100);
            this.y = 0;
            this.dy = Math.floor((Math.random() * 3) + 1);
        }
        draw() {
            let piece = new Path2D();
            piece.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "#844D39";
            Endgame.crc.fill(piece);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
        }
    }
    Endgame.Food = Food;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Food.js.map