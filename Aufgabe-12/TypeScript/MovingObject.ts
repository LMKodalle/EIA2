namespace Aufgabe11 {
    export class MovingObject {
        x: number;
		y: number;
		dx: number;
		dy: number;


        draw(): void {
          //
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
