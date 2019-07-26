namespace Endgame {
    export class Bubble extends MovingObject {  
        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = 450;
            this.dy = Math.random() * -2 - 1;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x - 3, this.y - 50, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(bubble);
    
            let bubblebubble: Path2D = new Path2D();
            bubblebubble.arc(this.x, this.y - 53, 2, 0, 2 * Math.PI);
        }
        update(): void {
			this.move();
			this.draw();
		}

		move(): void {
            this.y += this.dy;
            if (this.y + 20 < 0) {
                this.y = 450;
            }
		}
    }
}