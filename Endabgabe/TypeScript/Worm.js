var Endabgabe;
(function (Endabgabe) {
    class Worm {
        constructor(ctx, name) {
            this.x = Endabgabe.game.screenSize.x / 2;
            this.y = Endabgabe.game.screenSize.y / 2;
            this.r = 10;
            this.state = 0;
            this.ctx = ctx;
            this.name = name;
            this.score = 0;
            this.pos = new Endabgabe.Coordinate(Endabgabe.game.screenSize.x / 2, Endabgabe.game.screenSize.y / 2);
            this.speed = new Endabgabe.Coordinate(0, 0);
            this.sizemodifier = 1;
        }
        draw() {
            Endabgabe.ctx1.arc(this.x, this.y, this.r + this.sizemodifier, 0, 2 * Math.PI);
            Endabgabe.ctx1.fillStyle = "white";
            Endabgabe.ctx1.fill();
        }
        move() {
            this.pos.x += this.speed.x;
            this.pos.y -= this.speed.y;
            this.checkEndofMap();
        }
        checkEndofMap() {
            let worldLeft = Endabgabe.game.world.x;
            let worldRight = Endabgabe.game.world.x + 4000;
            let worldTop = Endabgabe.game.world.y;
            let worldBottom = Endabgabe.game.world.y + 2000;
            let crash = true;
            if (this.x == worldLeft || this.x == worldRight || this.y == worldTop || this.y == worldBottom) {
                return crash;
            }
            return false;
        }
        collision(_food) {
            let distanceX = this.x - _food.pos.x;
            let distanceY = this.y - _food.pos.y;
            let radiisum = (this.r + this.sizemodifier + 1) + (_food.r + 1);
            let crash = true;
            if (distanceX * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
        die() {
            //
        }
    }
    Endabgabe.Worm = Worm;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Worm.js.map