namespace Endabgabe {
    export class Food {
        ctx: CanvasRenderingContext2D;
        pos: Coordinate;
        sizeMin: number;
        sizeMax: number;
        maincolor: string;
        supportColor: string;
        r: number;
        sizemodifier: number;

        constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
            this.ctx = ctx;
            this.pos = new Coordinate(x, y);
            this.sizeMin = 2;
            this.sizeMax = 6;
            this.maincolor = "green";
            this.supportColor = "green";
            this.r = utility.random(this.sizeMin, this.sizeMax);
            this.sizemodifier = 0.1 * this.r;
        }
        draw(player: Worm): void {

            this.pos.x -= player.speed.x;
            this.pos.y -= player.speed.y;

            this.ctx.globalAlpha = 0.5;
            this.ctx.fillStyle = this.maincolor;
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
            this.ctx.fill();

            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = this.supportColor;
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, this.r / 2, 0, 2 * Math.PI);
            this.ctx.fill();
        }

        die(): void {
            let index: number = game.foods.indexOf(this);
            game.foods.splice(index, 1);
        }
    }
}