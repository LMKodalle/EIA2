var Aufgabe11;
(function (Aufgabe11) {
    class Fish {
        draw() {
            let color = ["#B70B2F", "#A8BDFE", "#F76D1E", "#17C445", "#841337", "#4F82CE", "#E0DEBD", "#82E2FA"];
            let head = new Path2D();
            head.ellipse(this.x, this.y - 80, 30, 50, 20, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            Aufgabe11.crc.fill(head);
            Aufgabe11.crc.stroke(head);
            let eyeballs = new Path2D();
            eyeballs.arc(this.x + 30, this.y - 95, 8, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "white";
            Aufgabe11.crc.fill(eyeballs);
            Aufgabe11.crc.stroke(eyeballs);
            let iris = new Path2D();
            iris.arc(this.x + 30, this.y - 95, 2, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "black";
            Aufgabe11.crc.fill(iris);
            Aufgabe11.crc.stroke(iris);
            let tail = new Path2D();
            tail.moveTo(this.x - 100, this.y - 50);
            tail.lineTo(this.x - 80, this.y - 20);
            tail.lineTo(this.x - 46, this.y - 60);
            tail.closePath();
            Aufgabe11.crc.stroke(tail);
            Aufgabe11.crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            Aufgabe11.crc.fill(tail);
            Aufgabe11.crc.stroke(tail);
            let arms = new Path2D();
            arms.moveTo(this.x, this.y - 80);
            arms.lineTo(this.x + 5, this.y - 60);
            arms.lineTo(this.x - 10, this.y - 70);
            arms.closePath();
            Aufgabe11.crc.stroke(arms);
            Aufgabe11.crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            Aufgabe11.crc.fill(arms);
            Aufgabe11.crc.stroke(arms);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 100 < 0) {
                this.x = 700;
            }
            if (this.x - 100 > 600) {
                this.x = -100;
            }
            if (this.y - 100 > 400) {
                this.y = -100;
            }
            if (this.y + 100 < 0) {
                this.y = 500;
            }
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fish.js.map