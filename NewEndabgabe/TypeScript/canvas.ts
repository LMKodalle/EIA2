namespace Endgame {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	export let imageData: ImageData;
	export let imageWidth: number = 0;
	export let scrollSpeed: number = 1;
	export let scorePoints: number = 0;
	export let nickname: string;
	export let playerArray: Fish[] = [];
	export let enemyArray: Enemyfish[] = [];
	export let foodArray: Food[] = [];
	export let scoreArray: Score[] = [];
	export let animation: number = 0;

	function init(): void {
		window.addEventListener("keydown", keyHandleDown);
		window.addEventListener("keyup", keyHandleUp);
		document.getElementById("restart").addEventListener("click", startNew);
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		let player: Fish = new Fish("blue", 1);
		playerArray.push(player);
		for (let i: number = 0; i < 5; i++) {
			let enemy: Enemyfish = new Enemyfish();
			enemyArray.push(enemy);
		}
		let score: Score = new Score("20px", "Consolas", "black", 400, 30, "text");
		scoreArray.push(score);
		alert("Rekrut, stillgestanden! Du steuerst den blauen Kugelfisch und versuchst den schwarzen feindlichen Kugelfischen auszuweichen. Friss das Futter, welches von oben nach unten sinkt, um für kurze Zeit größer zu sein und dadurch die Feinde zu vernichten!");
		update();
		setInterval(incScore, 500);
		setInterval(generateFish, 8000);
		setInterval(generateFood, 10000);
		refresh();
	}

	function incScore(): void {
		scorePoints += 1;
	}

	function generateFish(): void {
		let enemy: Enemyfish = new Enemyfish();
		enemyArray.push(enemy);
	}

	function generateFood(): void {
		let food: Food = new Food();
		foodArray.push(food);
	}

	function keyHandleDown(_e: KeyboardEvent): void {
		if (_e.keyCode && _e.keyCode == 37) { playerArray[0].dx = -3; }
		if (_e.keyCode == 39) { playerArray[0].dx = 3; }
		if (_e.keyCode == 38) { playerArray[0].dy = -3; }
		if (_e.keyCode == 40) { playerArray[0].dy = 3; }
	}

	function keyHandleUp(_e: KeyboardEvent): void {
		if (_e.keyCode && _e.keyCode == 37) { playerArray[0].dx = 0; }
		if (_e.keyCode == 39) { playerArray[0].dx = 0; }
		if (_e.keyCode == 38) { playerArray[0].dy = 0; }
		if (_e.keyCode == 40) { playerArray[0].dy = 0; }
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

		for (let i: number = 0; i < 180; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.floor((Math.random() * 399) + 300);
			let kies: Path2D = new Path2D();
			kies.arc(x, y, 3, 0, 2 * Math.PI);
			crc.fillStyle = "brown";
			crc.fill(kies);

			let rock: Path2D = new Path2D();
			rock.moveTo(400, 350);
			rock.quadraticCurveTo(400, 200, 250, 350);
			rock.closePath();
			rock.moveTo(20, 380);
			rock.quadraticCurveTo(30, 350, 50, 380);
			rock.closePath();
			crc.fillStyle = "grey";
			crc.fill(rock);

			let plant: Path2D = new Path2D();
			plant.moveTo(500, 380);
			plant.bezierCurveTo(400, 300, 500, 200, 500, 250);
			plant.bezierCurveTo(480, 300, 550, 300, 520, 200);
			plant.bezierCurveTo(560, 200, 550, 320, 580, 250);
			plant.bezierCurveTo(590, 250, 590, 350, 530, 380);
			plant.closePath();
			crc.fillStyle = "green";
			crc.fill(plant);
		}
	}

	function update(): void {
		animation = window.requestAnimationFrame(update);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, imageWidth, 0);
		crc.putImageData(imageData, imageWidth + canvas.width, 0);
		imageWidth -= scrollSpeed;
		if (imageWidth == -canvas.width) imageWidth = 0;
		scoreArray[0].text = "SCORE: " + scorePoints;
		scoreArray[0].update();
		for (let i: number = 1; i < enemyArray.length; i++) {
			if (playerArray[0].collisionEnemy(enemyArray[i])) {
				if (playerArray[0].r < enemyArray[i].r) {
					cancelAnimationFrame(animation);
					clearInterval();
					nickname = prompt("Das geht noch besser! " + "Score: " + scorePoints + " " + "|" + " " + "Los trag dich schnell ein:");
					if (nickname == null) {
						nickname = "SpongebobSchwammkopf";
						insert();
						refresh();
					}
					if (nickname == " ") {
						nickname = "NOthIsIsPaTrIcK";
						insert();
						refresh();
					}
					else (insert(), refresh());
				}
				else (enemyArray.splice(i, 1), scorePoints += 5);
				generateFish();
			}
		}
		for (let i: number = 1; i < foodArray.length; i++) {
			if (playerArray[0].collisionFood(foodArray[i])) {
				foodArray.splice(i, 1);
				playerArray[0].r += 10;
				scorePoints += 2;
				let c1: number = window.setInterval(function (): void { playerArray[0].color = "pink"; }, 150);
				let c2: number = window.setInterval(function (): void { playerArray[0].color = "red"; }, 200);
				window.setTimeout(function (): void { playerArray[0].r -= 10; playerArray[0].color = "blue"; clearInterval(c1); clearInterval(c2); }, 4000);
			}
		}
		for (let i: number = 0; i < foodArray.length; i++) {
			if (foodArray[i].y - 10 > 400) foodArray.splice(i, 1);
		}
		if ((playerArray[0].x + playerArray[0].r) < 0 || (playerArray[0].x + playerArray[0].r) > 600 || (playerArray[0].y + playerArray[0].r) > 400 || (playerArray[0].y + playerArray[0].r) < 0) {
			cancelAnimationFrame(animation);
			clearInterval();
			nickname = prompt("Schwache Leistung Rekrut... " + "Score: " + scorePoints + " " + "|" + " " + "Verewige dich als Loser:");
			if (nickname == null) {
				nickname = "SpongebobSchwammkopf";
				insert();
				refresh();
			}
			if (nickname == " ") {
				nickname = "NOthIsIsPaTrIcK";
				insert();
				refresh();
			}
			else (insert(), refresh());
		}
		for (let i: number = 0; i < enemyArray.length; i++) {
			enemyArray[i].update();
		}
		for (let i: number = 0; i < foodArray.length; i++) {
			foodArray[i].update();
		}
		playerArray[0].update();
	}
	function startNew(): void {
		refresh();
		cancelAnimationFrame(animation);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		scorePoints = 0;
		playerArray = [];
		enemyArray = [];
		foodArray = [];
		let player: Fish = new Fish("blue", 1);
		playerArray.push(player);
		for (let i: number = 0; i < 5; i++) {
			let enemy: Enemyfish = new Enemyfish();
			enemyArray.push(enemy);
		}
		for (let i: number = 0; i < 5; i++) {
			let bubbles: Bubble = new Bubble();
			foodArray.push(bubbles);
		}
		let score: Score = new Score("20px", "Consolas", "black", 500, 30, "text");
		scoreArray.push(score);
		update();
		incScore();
		generateFish();
		generateFood();
	}
	init();
}
