namespace Aufgabe11 {
    export class MovingObject {
        x: number;
		y: number;
		dx: number;
		dy: number;
        
        constructor() {
            this.x = Math.random() * Aufgabe11.crc.canvas.width;
            this.y = Math.random() * Aufgabe11.crc.canvas.height;
        }
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        update(): void {
            this.move();
        }
    }
}
