var Endgame;
(function (Endgame) {
    class Fish extends Endgame.MovingObject {
        constructor(color, sizemodifier) {
            super();
            this.x = Endgame.crc.canvas.width / 2;
            this.y = Endgame.crc.canvas.height / 2;
            this.r = 10;
            this.color = color;
            this.sizemodifier = sizemodifier;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            let upperHead = new Path2D();
            upperHead.arc(this.x, this.y, this.r + this.sizemodifier, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = this.color;
            Endgame.crc.fill(upperHead);
            let eyeballs = new Path2D();
            eyeballs.arc(this.x + 2, this.y - 1, 3, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "white";
            Endgame.crc.fill(eyeballs);
            let iris = new Path2D();
            iris.arc(this.x + 2, this.y - 1, 1, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "black";
            Endgame.crc.fill(iris);
            let tail = new Path2D();
            tail.moveTo(this.x - this.r, this.y);
            tail.lineTo(this.x - 20, this.y - 20);
            tail.lineTo(this.x - 30, this.y + 10);
            tail.closePath();
            Endgame.crc.fillStyle = "red";
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
        }
        update() {
            this.move();
            this.draw();
        }
        collisionEnemy(_enemy) {
            let distanceX = this.x - _enemy.x;
            let distanceY = this.y - _enemy.y;
            let radiisum = (this.r + this.sizemodifier + 1) + (_enemy.r + 1);
            let crash = true;
            if (distanceX * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
        collisionFood(_food) {
            let distanceX = this.x - _food.x;
            let distanceY = this.y - _food.y;
            let radiisum = (this.r + this.sizemodifier + 1) + (_food.r + 1);
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