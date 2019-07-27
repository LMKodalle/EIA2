var Endgame;
(function (Endgame) {
    class Fish extends Endgame.MovingObject {
        constructor(color) {
            super();
            this.x = Endgame.crc.canvas.width / 2;
            this.y = Endgame.crc.canvas.height / 2;
            this.r = 10;
            this.color = color;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            let upperHead = new Path2D();
            upperHead.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = this.color;
            Endgame.crc.fill(upperHead);
            let eyeballs = new Path2D();
            eyeballs.arc(this.x + this.r * 0.3, this.y - this.r * 0.2, this.r * 0.33, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(eyeballs);
            let iris = new Path2D();
            iris.arc(this.x + this.r * 0.3, this.y - this.r * 0.2, this.r * 0.1, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "black";
            Endgame.crc.fill(iris);
            let tail = new Path2D();
            tail.moveTo(this.x - this.r, this.y);
            tail.lineTo(this.x - 20 - this.r * 0.5, this.y - 20 - this.r * 0.5);
            tail.lineTo(this.x - 30 - this.r * 0.5, this.y + 10 + this.r * 0.5);
            tail.closePath();
            Endgame.crc.fillStyle = "red";
            Endgame.crc.fill(tail);
            let arms = new Path2D();
            arms.moveTo(this.x - this.r * 0.3, this.y + this.r * 0.3);
            arms.lineTo(this.x + this.r * 0.5, this.y + this.r * 0.6);
            arms.lineTo(this.x - this.r * 0.5, this.y + this.r);
            arms.closePath();
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(arms);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        update() {
            this.move();
            this.draw();
        }
        collisionEnemy(_collision) {
            let distanceX = this.x - _collision.x;
            let distanceY = this.y - _collision.y;
            let radiisum = this.r + _collision.r;
            let crash = true;
            if (distanceX * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
    }
    Endgame.Fish = Fish;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Fish.js.map