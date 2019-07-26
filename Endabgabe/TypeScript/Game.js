var Endabgabe;
(function (Endabgabe) {
    class Game {
        constructor(ctxWorm, ctxFood, ctxWorld) {
            this.ctxWorm = ctxWorm;
            this.ctxFood = ctxFood;
            this.ctxWorld = ctxWorld;
            this.worldSize = new Endabgabe.Coordinate(4000, 2000);
            this.screenSize = new Endabgabe.Coordinate(1200, 600);
            this.world = new Endabgabe.Coordinate(-1200, -600);
            this.worms = [];
            this.foods = [];
        }
        init() {
            this.worms[0] = new Endabgabe.Worm(this.ctxWorm, "Luke");
            this.generateFood(1000);
        }
        draw() {
            this.drawWorld();
            for (let i = 0; i < this.foods.length; i++)
                this.foods[i].draw(this.worms[0]);
            for (let i = 0; i < this.worms.length; i++)
                this.worms[i].draw();
            if (this.worms[0].state === 0)
                this.worms[0].move();
        }
        drawWorld() {
            this.ctxWorld.fillStyle = "white";
            this.ctxWorld.fillRect(this.world.x - 2, this.world.y - 2, this.worldSize.x + 4, this.worldSize.y + 4);
            this.ctxWorld.fillStyle = "#17202A";
            this.ctxWorld.fillRect(this.world.x, this.world.y, this.worldSize.x, this.worldSize.y);
            this.world.x -= this.worms[0].speed.x;
            this.world.y -= this.worms[0].speed.y;
        }
        newWorm(name) {
            this.worms.push(new Endabgabe.WormAi(this.ctxWorm, name));
        }
        generateFood(n) {
            for (let i = 0; i < n; i++) {
                this.foods.push(new Endabgabe.Food(this.ctxFood, Endabgabe.utility.random(-1200 + 50, 2800 - 50), Endabgabe.utility.random(-600 + 50, 1400 - 50)));
            }
        }
    }
    Endabgabe.Game = Game;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Game.js.map