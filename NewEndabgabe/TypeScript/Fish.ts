namespace Endgame {

    export class Fish extends MovingObject {
        r: number;

        constructor(color: string, sizemodifier: number) {
            super();
            this.x = crc.canvas.width / 2;
            this.y = crc.canvas.height / 2;
            this.r = 10;
            this.color = color;
            this.sizemodifier = sizemodifier;
            this.dx = 0;
            this.dy = 0;
        }

        draw(): void {
            let upperHead: Path2D = new Path2D();
            upperHead.arc(this.x, this.y, this.r + this.sizemodifier, 0 , 2 * Math.PI);
            crc.fillStyle = this.color;
            crc.fill(upperHead);

            let eyeballs: Path2D = new Path2D();
            eyeballs.arc(this.x + 2, this.y - 1, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(eyeballs);

            let iris: Path2D = new Path2D();
            iris.arc(this.x + 2, this.y - 1, 1, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);

            let tail: Path2D = new Path2D();
            tail.moveTo(this.x - this.r, this.y);
            tail.lineTo(this.x - 20 , this.y - 20);
            tail.lineTo(this.x - 30, this.y + 10);
            tail.closePath();
            crc.fillStyle = "red";
            crc.fill(tail);

            let arms: Path2D = new Path2D();
            arms.moveTo(this.x - 3, this.y + 3);
            arms.lineTo(this.x + 5, this.y + 6);
            arms.lineTo(this.x - 5, this.y + 10);
            arms.closePath();
            crc.fillStyle = "white";
            crc.fill(arms);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
        
        update(): void {
            this.move(); 
            this.draw();
        }
        
        collisionEnemy(_enemy: Enemyfish ): boolean {
            let distanceX: number = this.x - _enemy.x;
            let distanceY: number = this.y - _enemy.y;
            let radiisum: number = (this.r + this.sizemodifier + 1) + (_enemy.r + 1);
            let crash: boolean = true;
            if (distanceX  * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
        collisionFood(_food: Food): boolean {
            let distanceX: number = this.x - _food.x;
            let distanceY: number = this.y - _food.y;
            let radiisum: number = (this.r + this.sizemodifier + 1) + (_food.r + 1);
            let crash: boolean = true;
            if (distanceX  * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
    }
}