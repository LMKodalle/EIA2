namespace Endabgabe {
    export class Game {
        ctxWorm: CanvasRenderingContext2D;
        ctxFood: CanvasRenderingContext2D;
        ctxWorld: CanvasRenderingContext2D;
        worldSize: Coordinate;
        screenSize: Coordinate;
        world: Coordinate;
        worms: Worm[];
        foods: Food[];

        constructor(ctxWorm: CanvasRenderingContext2D, ctxFood: CanvasRenderingContext2D, ctxWorld: CanvasRenderingContext2D) {
            this.ctxWorm = ctxWorm;
            this.ctxFood = ctxFood;
            this.ctxWorld = ctxWorld;
            this.worldSize = new Coordinate(4000, 2000);
            this.screenSize = new Coordinate(1200, 600);
            this.world = new Coordinate(-1200, -600);
            this.worms = [];
            this.foods = [];
        }
        init(): void {
            this.worms[0] = new Worm(this.ctxWorm, "Luke");
            this.generateFood(1000);
        }
        draw(): void {
            this.drawWorld();
            for (let i: number = 0; i < this.foods.length; i++) this.foods[i].draw(this.worms[0]);
            for (let i: number = 0; i < this.worms.length; i++) this.worms[i].draw();
            if (this.worms[0].state === 0)
                this.worms[0].move();
        }
        drawWorld(): void {
            this.ctxWorld.fillStyle = "white";
            this.ctxWorld.fillRect(this.world.x - 2, this.world.y - 2, this.worldSize.x + 4, this.worldSize.y + 4);

            this.ctxWorld.fillStyle = "#17202A";
            this.ctxWorld.fillRect(this.world.x, this.world.y, this.worldSize.x, this.worldSize.y);

            this.world.x -= this.worms[0].speed.x;
            this.world.y -= this.worms[0].speed.y;
        }

        newWorm(name: string): void {
            this.worms.push(new WormAi(this.ctxWorm, name));
        }
        generateFood(n: number): void {
            for (let i: number = 0; i < n; i++) {
                this.foods.push(new Food(this.ctxFood, utility.random(-1200 + 50, 2800 - 50), utility.random(-600 + 50, 1400 - 50)));
            }
        }
    }
}