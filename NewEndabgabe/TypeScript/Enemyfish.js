var Endgame;
(function (Endgame) {
    class Enemyfish extends Endgame.MovingObject {
        constructor() {
            super();
            this.type = 1;
            this.x = 0;
            this.y = Math.random() * Endgame.canvas.height;
            this.r = 15;
            this.color = "black";
            this.dx = Math.random() * 3 - 3;
            this.dy = Math.random() * 3 - 3;
        }
        draw() {
            let upperHead = new Path2D();
            upperHead.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = this.color;
            Endgame.crc.fill(upperHead);
            let eyeballs = new Path2D();
            eyeballs.arc(this.x + 3, this.y - 2, 3, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(eyeballs);
            let iris = new Path2D();
            iris.arc(this.x + 3, this.y - 2, 1, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "black";
            Endgame.crc.fill(iris);
            let tail = new Path2D();
            tail.moveTo(this.x - this.r, this.y);
            tail.lineTo(this.x - 20, this.y - 20);
            tail.lineTo(this.x - 30, this.y + 10);
            tail.closePath();
            Endgame.crc.fillStyle = "black";
            Endgame.crc.fill(tail);
            let arms = new Path2D();
            arms.moveTo(this.x - 3, this.y + 3);
            arms.lineTo(this.x + 5, this.y + 6);
            arms.lineTo(this.x - 5, this.y + 10);
            arms.closePath();
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(arms);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 100 < 0) {
                this.x = 700;
                this.dx = Math.random() * 6 + 2;
                this.dy = Math.random() * 6 - 5;
            }
            if (this.x - 100 > 600) {
                this.x = -100;
                this.dx = Math.random() * 6 + 2;
                this.dy = Math.random() * 6 - 5;
            }
            if (this.y - 100 > 400) {
                this.y = -100;
                this.dx = Math.random() * 6 + 2;
                this.dy = Math.random() * 6 - 5;
            }
            if (this.y + 100 < 0) {
                this.y = 500;
                this.dx = Math.random() * 6 + 2;
                this.dy = Math.random() * 6 - 5;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Endgame.Enemyfish = Enemyfish;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Enemyfish.js.map