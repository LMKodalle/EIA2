namespace Aufgabe11 {

    export class Fish {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let color: string[] = ["#B70B2F", "#A8BDFE", "#F76D1E", "#17C445", "#841337", "#4F82CE", "#E0DEBD", "#82E2FA"];
            let head: Path2D = new Path2D();
            head.ellipse(this.x, this.y - 80, 30, 50, 20, 0, 2 * Math.PI);
            crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            crc.fill(head);
            crc.stroke(head);

            let eyeballs: Path2D = new Path2D();
            eyeballs.arc(this.x + 30, this.y - 95, 8, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(eyeballs);
            crc.stroke(eyeballs);

            let iris: Path2D = new Path2D();
            iris.arc(this.x + 30, this.y - 95, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);
            crc.stroke(iris);

            let tail: Path2D = new Path2D();
            tail.moveTo(this.x - 100, this.y - 50);
            tail.lineTo(this.x - 80, this.y - 20);
            tail.lineTo(this.x - 46, this.y - 60);
            tail.closePath();
            crc.stroke(tail);
            crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            crc.fill(tail);
            crc.stroke(tail);

            let arms: Path2D = new Path2D();
            arms.moveTo(this.x, this.y - 80);
            arms.lineTo(this.x + 5, this.y - 60);
            arms.lineTo(this.x - 10, this.y - 70);
            arms.closePath();
            crc.stroke(arms);
            crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            crc.fill(arms);
            crc.stroke(arms);
        }
        update(): void {
			this.move();
			this.draw();
		}

		move(): void {
            this.x += this.dx 
            this.y += this.dy
            if(this.x + 100 < 0) {
                this.x = 600; 
            }
            if(this.x - 100 > 600) {
                this.x = 0; 
            }
            if(this.y - 100 > 400) {
                this.y = 0;
            }
            if(this.y + 100 < 0) {
                this.y = 400;
            }
		}
}
}