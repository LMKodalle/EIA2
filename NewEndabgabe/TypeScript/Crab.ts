namespace Endgame {
    
    export class Crab extends MovingObject {

        constructor() {
            super();
            this.dx = Math.random() * 10 - 5;
        }
        
        draw(): void {
            let color: string[] = ["pink", "white", "red", "blue"];
            let crab: Path2D = new Path2D();
            crab.ellipse(this.x, 300, 20, 30, 1.5 * Math.PI, 0, 2 * Math.PI);
            crc.fillStyle = color[Math.floor((Math.random() * 8) + 1)];
            crc.fill(crab);
            crc.stroke(crab);

            let claws: Path2D = new Path2D();
            claws.moveTo(this.x + 30, 300);
            claws.bezierCurveTo(this.x + 30, 300, this.x + 50, 250, this.x + 80, 320);
            claws.bezierCurveTo(this.x + 50, 320, this.x + 50, 260, this.x + 50, 320);
            claws.bezierCurveTo(this.x + 50, 370, this.x + 30, 280, this.x + 30, 300);
            claws.moveTo(this.x - 30, 300);
            claws.bezierCurveTo(this.x - 30, 300, this.x - 50, 250, this.x - 80, 320);
            claws.bezierCurveTo(this.x - 50, 320, this.x - 50, 260, this.x - 50, 320);
            claws.bezierCurveTo(this.x - 50, 370, this.x - 30, 280, this.x - 30, 300);
            crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            crc.fill(claws);
            crc.stroke(claws);

            let eyeballs: Path2D = new Path2D();
            eyeballs.arc(this.x + 28, 280, 8, 0, 2 * Math.PI);
            eyeballs.moveTo(this.x - 20, 280);
            eyeballs.arc(this.x - 28, 280, 8, 0, 2 * Math.PI);
            crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            crc.fill(eyeballs);
            crc.stroke(eyeballs);

            let iris: Path2D = new Path2D();
            iris.arc(this.x + 28, 280, 2, 0, 2 * Math.PI);
            iris.moveTo(this.x - 30, 280);
            iris.arc(this.x - 28, 280, 2, 0, 2 * Math.PI);
            crc.fillStyle = color[Math.floor((Math.random() * 4) + 1)];
            crc.fill(iris);
            crc.stroke(iris);
        }
        update(): void {
			this.move();
			this.draw();
		}

		move(): void {
            this.x += this.dx;
            if (this.x - 80 > 600) {
                this.x = -80;
            }
            if (this.x + 80 < 0) {
                this.x = 680;
            }
        }
    }
}