var Endabgabe;
(function (Endabgabe) {
    class Food {
        constructor(ctx, x, y) {
            this.ctx = ctx;
            this.pos = new Endabgabe.Coordinate(x, y);
            this.sizeMin = 2;
            this.sizeMax = 6;
            this.maincolor = "green";
            this.supportColor = "green";
            this.r = Endabgabe.utility.random(this.sizeMin, this.sizeMax);
            this.sizemodifier = 0.1 * this.r;
        }
        draw(player) {
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
        die() {
            let index = Endabgabe.game.foods.indexOf(this);
            Endabgabe.game.foods.splice(index, 1);
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Food.js.map