namespace Aufgabe10 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		for (let i: number = 0; i < Math.floor((Math.random() * 10) + 1); i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			drawBubble(x, y);
			ground();
		}
	}
	function ground(): void {
		let ground: Path2D = new Path2D();
		ground.moveTo(0, 300);
		ground.lineTo(600, 300);
		crc.fillStyle = "brown";
		crc.fill(ground);
		crc.stroke(ground);
	}

	function drawBubble(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y - 50, 10, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(bubble);
		crc.stroke(bubble);
	}
}