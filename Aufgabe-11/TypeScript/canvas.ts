namespace Aufgabe11 {

	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;
	let fishArray: Fish[] = [];
	let crabArray: Crab[] = [];
	let bubbleArray: Bubble[] = [];
	let fps: number = 30;
	let imageData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dx: number = Math.random() * 10 - 5;
			let dy: number = Math.random() * 10 - 5;
			let fish: Fish;
			fish = new Fish();
			fish.x = x;
			fish.y = y;
			fish.dx = dx;
			fish.dy = dy;
			fishArray.push(fish);
			fish.draw();
		}
		for (let i: number = 0; i < 2; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dx: number = Math.random() * 10 - 5;
			let crab: Crab;
			crab = new Crab();
			crab.x = x;
			crab.y = y;
			crab.dx = dx;
			crabArray.push(crab);
			crab.draw();
		}
		for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dy: number = Math.random() * -2 - 1;
			let bubble: Bubble;
			bubble = new Bubble();
			bubble.x = x;
			bubble.y = y;
			bubble.dy = dy;
			bubbleArray.push(bubble);
			bubble.draw();
		}
		update();
	}

	function drawBackground(): void {

		let water: CanvasGradient = crc.createLinearGradient(0, 50, 0, 200);
		water.addColorStop(0, "white");
		water.addColorStop(1, "aqua");
		crc.fillStyle = water;
		crc.fillRect(0, 0, canvas.width, canvas.height);

		let ground: Path2D = new Path2D();
		ground.rect(0, 300, 600, 300);
		crc.fillStyle = "#c2b280";
		crc.fill(ground);
		crc.stroke(ground);

		for (let i: number = 0; i < 180; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.floor((Math.random() * 399) + 300);
			let kies: Path2D = new Path2D();
			kies.arc(x, y, 3, 0, 2 * Math.PI);
			crc.fillStyle = "brown";
			crc.fill(kies);
			crc.stroke(kies);

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
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < fishArray.length; i++) {
			fishArray[i].update();
		}
		for (let i: number = 0; i < crabArray.length; i++) {
			crabArray[i].update();
		}
		for (let i: number = 0; i < bubbleArray.length; i++) {
			bubbleArray[i].update();
		}
	}
}
