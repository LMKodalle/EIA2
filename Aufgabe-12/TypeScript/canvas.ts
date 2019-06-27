namespace Aufgabe11 {

	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;
	let seaArray: MovingObject[] = [];
	let fps: number = 30;
	let imageData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		canvas.addEventListener("click", handleClick);
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		for (let i: number = 0; i < 5; i++) {
			let fish: Fish = new Fish();
			seaArray.push(fish);
		}
		for (let i: number = 0; i < 2; i++) {
			let crab: Crab = new Crab();
			seaArray.push(crab);
		}
		for (let i: number = 0; i < 10; i++) {
			let bubble: Bubble = new Bubble();
			seaArray.push(bubble);
		}
		update();
	}

	function handleClick(_event: MouseEvent): void {
		console.log(_event);
		let food: Food = new Food(_event.clientX, _event.clientY);
		seaArray.push(food);
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

		for (let i: number = 0; i < seaArray.length; i++) {
			seaArray[i].update();
		}
	}
}
