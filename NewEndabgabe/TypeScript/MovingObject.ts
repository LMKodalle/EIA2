namespace Endgame {
    export class MovingObject {
        x: number;
		y: number;
		dx: number;
        dy: number;
        color: string;
        r: number;
        type: number;
        
        draw(): void {
            //
        }
        
        move(): void {
            //
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}
