namespace Endabgabe {
	let canvas1: HTMLCanvasElement; // Worm
	let canvas2: HTMLCanvasElement; // Food
	let canvas3: HTMLCanvasElement; // World
	export let ctx1: CanvasRenderingContext2D;
	export let ctx2: CanvasRenderingContext2D;
	export let ctx3: CanvasRenderingContext2D;
	canvas1 = document.getElementsByTagName("canvas")[0];
	ctx1 = canvas1.getContext("2d");
	canvas2 = document.getElementsByTagName("canvas")[1];
	ctx2 = canvas2.getContext("2d");
	canvas3 = document.getElementsByTagName("canvas")[2];
	ctx3 = canvas3.getContext("2d");
	export let utility: Utility = new Utility();
	export let game: Game = new Game(ctx1, ctx2, ctx3);

	function startGame(): void {
		addEventListener("keydown", keyHandleDown);
		addEventListener("keyup", keyHandleUp);
		game.init();
		update();
	}

	function keyHandleDown(_e: KeyboardEvent): void {
		if (_e.keyCode && _e.keyCode == 37) { game.worms[0].speed.x = -3; }
		if (_e.keyCode == 39) { game.worms[0].speed.x = 3; }
		if (_e.keyCode == 38) { game.worms[0].speed.y = -3; }
		if (_e.keyCode == 40) { game.worms[0].speed.y = 3; }
	}

	function keyHandleUp(_e: KeyboardEvent): void {
		if (_e.keyCode && _e.keyCode == 37) { game.worms[0].speed.x = 0; }
		if (_e.keyCode == 39) { game.worms[0].speed.x = 0; }
		if (_e.keyCode == 38) { game.worms[0].speed.y = 0; }
		if (_e.keyCode == 40) { game.worms[0].speed.y = 0; }
	}


	function update(): void {
		let t: number = window.setTimeout(update, 1000 / 60);
		ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
		ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
		ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
		for (let i: number = 0; i < game.foods.length; i++) {
			if (game.worms[0].collision(game.foods[i])) {
				game.foods.splice(i, 1);
				game.worms[0].sizemodifier += game.foods[i].sizemodifier;
			}
		}
		if (game.worms[0].checkEndofMap()) {
			clearTimeout(t);
		}
		game.draw();
	}
	startGame();
}


