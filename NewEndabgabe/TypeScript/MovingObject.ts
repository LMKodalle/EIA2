namespace Endgame {
    export class MovingObject {
        x: number;
		y: number;
		dx: number;
        dy: number;
        color: string;
        sizemodifier: number;
        r: number;

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
