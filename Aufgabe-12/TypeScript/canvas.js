var Aufgabe11;
(function (Aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let crabArray = [];
    let bubbleArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc = canvas.getContext("2d");
        drawBackground();
        imageData = Aufgabe11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let fish;
            fish = new Aufgabe11.Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw();
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 - 5;
            let crab;
            crab = new Aufgabe11.Crab();
            crab.x = x;
            crab.y = y;
            crab.dx = dx;
            crabArray.push(crab);
            crab.draw();
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -2 - 1;
            let bubble;
            bubble = new Aufgabe11.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            bubble.draw();
        }
        update();
    }
    function drawBackground() {
        let water = Aufgabe11.crc.createLinearGradient(0, 50, 0, 200);
        water.addColorStop(0, "white");
        water.addColorStop(1, "aqua");
        Aufgabe11.crc.fillStyle = water;
        Aufgabe11.crc.fillRect(0, 0, canvas.width, canvas.height);
        let ground = new Path2D();
        ground.rect(0, 300, 600, 300);
        Aufgabe11.crc.fillStyle = "#c2b280";
        Aufgabe11.crc.fill(ground);
        Aufgabe11.crc.stroke(ground);
        for (let i = 0; i < 180; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.floor((Math.random() * 399) + 300);
            let kies = new Path2D();
            kies.arc(x, y, 3, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "brown";
            Aufgabe11.crc.fill(kies);
            Aufgabe11.crc.stroke(kies);
            let rock = new Path2D();
            rock.moveTo(400, 350);
            rock.quadraticCurveTo(400, 200, 250, 350);
            rock.closePath();
            rock.moveTo(20, 380);
            rock.quadraticCurveTo(30, 350, 50, 380);
            rock.closePath();
            Aufgabe11.crc.fillStyle = "grey";
            Aufgabe11.crc.fill(rock);
            Aufgabe11.crc.stroke(rock);
            let plant = new Path2D();
            plant.moveTo(500, 380);
            plant.bezierCurveTo(400, 300, 500, 200, 500, 250);
            plant.bezierCurveTo(480, 300, 550, 300, 520, 200);
            plant.bezierCurveTo(560, 200, 550, 320, 580, 250);
            plant.bezierCurveTo(590, 250, 590, 350, 530, 380);
            plant.closePath();
            Aufgabe11.crc.fillStyle = "green";
            Aufgabe11.crc.fill(plant);
            Aufgabe11.crc.stroke(plant);
            Aufgabe11.crc.stroke(plant);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        Aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < crabArray.length; i++) {
            crabArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=canvas.js.map