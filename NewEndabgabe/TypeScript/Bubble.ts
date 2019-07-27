namespace Endgame {
    export class Bubble extends MovingObject {  
        constructor() {
            super();
            this.x = Math.random() * 550 + 100;
            this.y = 450;
            this.dy = Math.random() * -2 - 1;
            this.r = 10;
            this.type = 3;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(bubble);
    
            let bubblebubble: Path2D = new Path2D();
            bubblebubble.arc(this.x, this.y - 5, 2, 0, 2 * Math.PI);
            crc.stroke(bubblebubble);
        }
        update(): void {
			this.move();
			this.draw();
		}

		move(): void {
            this.y += this.dy;
            if (this.y + 20 < 0) {
                this.y = 450;
                this.x = Math.random() * 550 + 100;
            }
		}
    }
}