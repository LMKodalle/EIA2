namespace Endabgabe {
    export class Worm {
        x: number;
        y: number;
        r: number;
        ctx: CanvasRenderingContext2D;
        name: string;
        score: number;
        pos: Coordinate;
        speed: Coordinate;
        movingAngle: number;
        angle: number;
        length: number;
        maxsize: number;
        sizemodifier: number;
        color: string;
        state: number;

        constructor(ctx: CanvasRenderingContext2D, name: string) {
            this.x = game.screenSize.x / 2;
            this.y = game.screenSize.y / 2;
            this.r = 10;
            this.state = 0;
            this.ctx = ctx;
            this.name = name;
            this.score = 0;
            this.pos = new Coordinate(game.screenSize.x / 2, game.screenSize.y / 2);
            this.speed = new Coordinate(0, 0);
            this.sizemodifier = 1;
        }
        draw(): void {
            ctx1.arc(this.x, this.y, this.r + this.sizemodifier, 0, 2 * Math.PI);
            ctx1.fillStyle = "white";
            ctx1.fill();
        }
        move(): void {
            this.pos.x += this.speed.x;
            this.pos.y -= this.speed.y;
            this.checkEndofMap();
        }
        checkEndofMap(): boolean {
            let worldLeft: number = game.world.x;
            let worldRight: number = game.world.x + 4000;
            let worldTop: number = game.world.y;
            let worldBottom: number = game.world.y + 2000;
            let crash: boolean = true;
            if (this.x == worldLeft || this.x == worldRight || this.y == worldTop || this.y == worldBottom) {
                return crash;
            }
            return false;
        }
        
        collision(_food: Food ): boolean {
            let distanceX: number = this.x - _food.pos.x;
            let distanceY: number = this.y - _food.pos.y;
            let radiisum: number = (this.r + this.sizemodifier + 1) + (_food.r + 1);
            let crash: boolean = true;
            if (distanceX  * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }

        die(): void {
           //
        }	
    }
}