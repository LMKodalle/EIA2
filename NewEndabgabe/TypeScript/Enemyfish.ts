namespace Endgame {
   export class Enemyfish extends MovingObject {
       x: number;
       y: number;
       dx: number;
       dy: number;
       r: number;
       color: string;
    
    constructor() {
        super();
        this.type = 1;
        this.x = - 5;
        this.y = Math.random() * canvas.height;
        this.r = 15;
        this.color = "black";
        this.dx = Math.random() * 3 - 3;
        this.dy = Math.random() * 3 - 3;
    }
    
    draw(): void {
        let upperHead: Path2D = new Path2D();
        upperHead.arc(this.x, this.y, this.r, 0 , 2 * Math.PI);
        crc.fillStyle = this.color;
        crc.fill(upperHead);

        let eyeballs: Path2D = new Path2D();
        eyeballs.arc(this.x + 3, this.y - 2, 3, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.fill(eyeballs);

        let iris: Path2D = new Path2D();
        iris.arc(this.x + 3, this.y - 2, 1, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(iris);

        let tail: Path2D = new Path2D();
        tail.moveTo(this.x - this.r, this.y);
        tail.lineTo(this.x - 20 , this.y - 20);
        tail.lineTo(this.x - 30, this.y + 10);
        tail.closePath();
        crc.fillStyle = "black";
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
        if (this.x + 100 < 0) {
            this.x = 700;
            this.dx = Math.random() * 5 + 2;
            this.dy = Math.random() * 4 - 4;
        }
        if (this.x - 100 > 600) {
            this.x = - 100;
            this.dx = Math.random() * 5 + 2;
            this.dy = Math.random() * 4 - 4;
        }
        if (this.y - 100 > 400) {
            this.y = -100;
            this.dx = Math.random() * 5 + 2;
            this.dy = Math.random() * 4 - 4;
        }
        if (this.y + 100 < 0) {
            this.y = 500;
            this.dx = Math.random() * 5 + 2;
            this.dy = Math.random() * 4 - 4;
        }
    }
    
    update(): void {
        this.move(); 
        this.draw();
    }
   }
}