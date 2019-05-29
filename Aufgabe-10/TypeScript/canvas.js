var Aufgabe10;
(function (Aufgabe10) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        for (let i = 0; i < Math.floor((Math.random() * 10) + 1); i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawBubble(x, y);
            ground();
        }
    }
    function ground() {
        let ground = new Path2D();
        ground.moveTo(0, 300);
        ground.lineTo(600, 300);
        crc.fillStyle = "brown";
        crc.fill(ground);
        crc.stroke(ground);
    }
    function drawBubble(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y - 50, 10, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=canvas.js.map