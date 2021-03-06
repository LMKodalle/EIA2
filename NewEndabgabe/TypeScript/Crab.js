var Endgame;
(function (Endgame) {
    class Crab extends Endgame.MovingObject {
        constructor() {
            super();
            this.dx = Math.random() * 10 - 5;
        }
        draw() {
            let color = ["pink", "white", "red", "blue"];
            let crab = new Path2D();
            crab.ellipse(this.x, 300, 20, 30, 1.5 * Math.PI, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            Endgame.crc.fill(crab);
            Endgame.crc.stroke(crab);
            let claws = new Path2D();
            claws.moveTo(this.x + 30, 300);
            claws.bezierCurveTo(this.x + 30, 300, this.x + 50, 250, this.x + 80, 320);
            claws.bezierCurveTo(this.x + 50, 320, this.x + 50, 260, this.x + 50, 320);
            claws.bezierCurveTo(this.x + 50, 370, this.x + 30, 280, this.x + 30, 300);
            claws.moveTo(this.x - 30, 300);
            claws.bezierCurveTo(this.x - 30, 300, this.x - 50, 250, this.x - 80, 320);
            claws.bezierCurveTo(this.x - 50, 320, this.x - 50, 260, this.x - 50, 320);
            claws.bezierCurveTo(this.x - 50, 370, this.x - 30, 280, this.x - 30, 300);
            Endgame.crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            Endgame.crc.fill(claws);
            Endgame.crc.stroke(claws);
            let eyeballs = new Path2D();
            eyeballs.arc(this.x + 28, 280, 8, 0, 2 * Math.PI);
            eyeballs.moveTo(this.x - 20, 280);
            eyeballs.arc(this.x - 28, 280, 8, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            Endgame.crc.fill(eyeballs);
            Endgame.crc.stroke(eyeballs);
            let iris = new Path2D();
            iris.arc(this.x + 28, 280, 2, 0, 2 * Math.PI);
            iris.moveTo(this.x - 30, 280);
            iris.arc(this.x - 28, 280, 2, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            Endgame.crc.fill(iris);
            Endgame.crc.stroke(iris);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x - 80 > 600) {
                this.x = -80;
            }
            if (this.x + 80 < 0) {
                this.x = 680;
            }
        }
    }
    Endgame.Crab = Crab;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Crab.js.map