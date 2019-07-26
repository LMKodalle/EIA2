namespace Endabgabe {
    export class Worm {
        x: number;
        y: number;
        r: number;
        speed: number;
        angle: number;
        movingAngle: number;
        sizemodifier: number;
        
        constructor(x: number, y: number, sizemodifier: number, r: number, speed: number, angle: number, movingangle: number) {
            this.r = r;
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.angle = angle;
            this.movingAngle = movingangle;
            this.sizemodifier = sizemodifier;
        }

        draw(): void {
            crc.save();
            crc.translate(this.x, this.y);
            crc.rotate(this.angle);
            crc.translate(-this.x, -this.y);
            crc.beginPath();
            crc.arc(this.x, this.y, this.r + this.sizemodifier, 0, 2 * Math.PI);
            crc.stroke();
            crc.restore();
        }

        move(): void {
            this.angle += this.movingAngle * Math.PI / 180;
            this.x += this.speed * Math.sin(this.angle);
            this.y -= this.speed * Math.cos(this.angle);
        }

        update(): void {
            this.move();
            this.draw();
        }

        collision(_enemy: MovingObject): boolean {
            let distanceX: number = this.x - _enemy.x;
            let distanceY: number = this.y - _enemy.y;
            let radiisum: number = (this.r + this.sizemodifier + 1) + (_enemy.r + _enemy.sizemodifier + 1);
            let crash: boolean = true;
            if (distanceX  * distanceX + distanceY * distanceY <= radiisum * radiisum) {
                return crash;
            }
            return false;
        }
    }
}