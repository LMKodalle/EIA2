namespace Aufgabe11 {
    export class Food extends MovingObject {

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
            this.dy = +2;
        }
        
        draw(): void {
            let piece: Path2D = new Path2D();
            piece.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "brown";
            crc.fill(piece);
            crc.stroke(piece);
        }
        update(): void {
			this.move();
			this.draw();
		}
        move(): void {
            this.y += this.dy;
            if (this.y == 300) {
                this.dy = 0;
            }
    }
}
}