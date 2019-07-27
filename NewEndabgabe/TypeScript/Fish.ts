namespace Endgame {

    export class Fish extends MovingObject {
        r: number;

        constructor(color: string) {
            super();
            this.x = crc.canvas.width / 2;
            this.y = crc.canvas.height / 2;
            this.r = 10;
            this.color = color;
            this.dx = 0;
            this.dy = 0;
        }

        draw(): void {
            let upperHead: Path2D = new Path2D();
            upperHead.arc(this.x, this.y, this.r, 0 , 2 * Math.PI);
            crc.fillStyle = this.color;
            crc.fill(upperHead);

            let eyeballs: Path2D = new Path2D();
            eyeballs.arc(this.x + this.r * 0.3, this.y - this.r * 0.2, this.r * 0.33, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(eyeballs);

            let iris: Path2D = new Path2D();
            iris.arc(this.x + this.r * 0.3, this.y - this.r * 0.2, this.r * 0.1, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);

            let tail: Path2D = new Path2D();
            tail.moveTo(this.x - this.r, this.y);
            tail.lineTo(this.x - 20 - this.r * 0.5, this.y - 20 - this.r * 0.5);
            tail.lineTo(this.x - 30 - this.r * 0.5, this.y + 10 + this.r * 0.5);
            tail.closePath();
            crc.fillStyle = "red";
            crc.fill(tail);

            let arms: Path2D = new Path2D();
            arms.moveTo(this.x - this.r * 0.3, this.y + this.r * 0.3);
            arms.lineTo(this.x + this.r * 0.5, this.y + this.r * 0.6);
            arms.lineTo(this.x - this.r * 0.5, this.y + this.r);
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
        
        collisionEnemy(_collision: MovingObject ): boolean {
            let distanceX: number = this.x - _collision.x;
            let distanceY: number = this.y - _collision.y;
            let radiisum: number = this.r + _collision.r;
            let crash: boolean = true;
            if (distanceX  * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
    }
}