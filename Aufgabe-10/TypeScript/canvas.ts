namespace Aufgabe10 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		ground();
		for (let i: number = 0; i < Math.floor((Math.random() * 10) + 1); i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			bubble(x, y);
		}
		for (let i: number = 0; i < Math.floor((Math.random() * 5) + 1); i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			fish(x, y);
		}
	}
	function ground(): void {
		let ground: Path2D = new Path2D();
		ground.rect(0, 300, 600, 300);
		crc.fillStyle = "#c2b280";
		crc.fill(ground);
		crc.stroke(ground);
		
		let rock: Path2D = new Path2D();
		rock.moveTo(400, 350);
		rock.quadraticCurveTo(400, 200, 250, 350);
		rock.closePath();
		rock.moveTo(20, 380);
		rock.quadraticCurveTo(30, 350, 50, 380);
		rock.closePath();
		crc.fillStyle = "grey";
		crc.fill(rock);
		crc.stroke(rock);

		let plant: Path2D = new Path2D();
		plant.moveTo(500, 380);
		plant.bezierCurveTo(400, 300, 500, 200, 500, 250);
		plant.bezierCurveTo(480, 300, 550, 300, 520, 200);
		plant.bezierCurveTo(560, 200, 550, 320, 580, 250);
		plant.bezierCurveTo(590, 250, 590, 350, 530, 380);
		plant.closePath();
		crc.fillStyle = "green";
		crc.fill(plant);
		crc.stroke(plant);
		crc.stroke(plant); 

	}

	function bubble(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x - 3, _y - 50, 10, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(bubble);
		crc.stroke(bubble);
		
		let bubblebubble: Path2D = new Path2D();
		bubblebubble.arc(_x, _y - 53, 2, 0, 2 * Math.PI);
		crc.stroke(bubblebubble);
	}
	
	function fish(_x: number, _y: number): void {
		let head: Path2D = new Path2D();
		head.ellipse(_x, _y - 80, 30, 50, 20, 0, 2 * Math.PI);
		crc.fillStyle = "orange";
		crc.fill(head);
		crc.stroke(head);
		
		let eyeballs: Path2D = new Path2D();
		eyeballs.arc(_x + 30, _y - 95, 8, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(eyeballs);
		crc.stroke(eyeballs);

		let iris: Path2D = new Path2D();
		iris.arc(_x + 30, _y - 95, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(iris);
		crc.stroke(iris);

		let tail: Path2D = new Path2D();
		tail.moveTo(_x - 100, _y - 50);
		tail.lineTo(_x - 80, _y - 20);
		tail.lineTo(_x - 46, _y - 60);
		tail.closePath();
		crc.stroke(tail);
		crc.fillStyle = "purple";
		crc.fill(tail);
		crc.stroke(tail);

		let arms: Path2D = new Path2D();
		arms.moveTo(_x, _y - 80);
		arms.lineTo(_x + 5, _y - 60);
		arms.lineTo(_x - 10, _y - 70);
		arms.closePath();
		crc.stroke(arms);
		crc.fillStyle = "purple";
		crc.fill(arms);
		crc.stroke(arms);
	}
}