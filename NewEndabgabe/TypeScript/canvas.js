var Endgame;
(function (Endgame) {
    document.addEventListener("DOMContentLoaded", init);
    Endgame.imageWidth = 0;
    Endgame.scrollSpeed = 1;
    Endgame.scorePoints = 0;
    Endgame.playerArray = [];
    Endgame.collisionArray = [];
    Endgame.scoreArray = [];
    Endgame.animation = 0;
    Endgame.scoreTime = 0;
    Endgame.foodTime = 0;
    Endgame.bubbleTime = 0;
    let c1;
    let c2;
    function init() {
        window.addEventListener("keydown", keyHandleDown);
        window.addEventListener("keyup", keyHandleUp);
        document.getElementById("restart").addEventListener("click", startNew);
        Endgame.canvas = document.getElementsByTagName("canvas")[0];
        Endgame.crc = Endgame.canvas.getContext("2d");
        drawBackground();
        Endgame.imageData = Endgame.crc.getImageData(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        let player = new Endgame.Fish("blue");
        Endgame.playerArray.push(player);
        for (let i = 0; i < 6; i++) {
            let enemy = new Endgame.Enemyfish();
            Endgame.collisionArray.push(enemy);
        }
        let score = new Endgame.Score("20px", "Consolas", "black", 400, 30, "text");
        Endgame.scoreArray.push(score);
        alert("Rekrut, stillgestanden! Du steuerst den blauen Kugelfisch und versuchst den schwarzen feindlichen Kugelfischen auszuweichen. Friss das Futter, welches von oben nach unten sinkt, um für 4 Sekunden größer zu sein und dadurch die Feinde zu vernichten! Pass bloß auf die Luftblasen auf! Wenn du eine berührst katapultiert sie dich zum Mond und du verlierst Punkte, also steuer dagegen. Ach ja, dreh die verdammte Lautstärke hoch oder hebe die automatische Blockade von Musik in deinem Browser auf!");
        generateFood();
        generateBubbles();
        scoreP();
        update();
        Endgame.refresh();
    }
    function keyHandleDown(_e) {
        if (_e.keyCode && _e.keyCode == 37) {
            Endgame.playerArray[0].dx = -3;
        }
        if (_e.keyCode == 39) {
            Endgame.playerArray[0].dx = 3;
        }
        if (_e.keyCode == 38) {
            Endgame.playerArray[0].dy = -3;
        }
        if (_e.keyCode == 40) {
            Endgame.playerArray[0].dy = 3;
        }
    }
    function keyHandleUp(_e) {
        if (_e.keyCode && _e.keyCode == 37) {
            Endgame.playerArray[0].dx = 0;
        }
        if (_e.keyCode == 39) {
            Endgame.playerArray[0].dx = 0;
        }
        if (_e.keyCode == 38) {
            Endgame.playerArray[0].dy = 0;
        }
        if (_e.keyCode == 40) {
            Endgame.playerArray[0].dy = 0;
        }
    }
    function drawBackground() {
        let water = Endgame.crc.createLinearGradient(0, 50, 0, 200);
        water.addColorStop(0, "white");
        water.addColorStop(1, "aqua");
        Endgame.crc.fillStyle = water;
        Endgame.crc.fillRect(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        let ground = new Path2D();
        ground.rect(0, 300, 600, 300);
        Endgame.crc.fillStyle = "#c2b280";
        Endgame.crc.fill(ground);
        for (let i = 0; i < 180; i++) {
            let x = Math.random() * Endgame.canvas.width;
            let y = Math.floor((Math.random() * 399) + 300);
            let kies = new Path2D();
            kies.arc(x, y, 3, 0, 2 * Math.PI);
            Endgame.crc.fillStyle = "brown";
            Endgame.crc.fill(kies);
            let rock = new Path2D();
            rock.moveTo(400, 350);
            rock.quadraticCurveTo(400, 200, 250, 350);
            rock.closePath();
            rock.moveTo(20, 380);
            rock.quadraticCurveTo(30, 350, 50, 380);
            rock.closePath();
            Endgame.crc.fillStyle = "grey";
            Endgame.crc.fill(rock);
            let plant = new Path2D();
            plant.moveTo(500, 380);
            plant.bezierCurveTo(400, 300, 500, 200, 500, 250);
            plant.bezierCurveTo(480, 300, 550, 300, 520, 200);
            plant.bezierCurveTo(560, 200, 550, 320, 580, 250);
            plant.bezierCurveTo(590, 250, 590, 350, 530, 380);
            plant.closePath();
            Endgame.crc.fillStyle = "green";
            Endgame.crc.fill(plant);
        }
    }
    function update() {
        Endgame.animation = window.setTimeout(update, 1000 / 60);
        Endgame.crc.clearRect(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        Endgame.crc.putImageData(Endgame.imageData, Endgame.imageWidth, 0);
        Endgame.crc.putImageData(Endgame.imageData, Endgame.imageWidth + Endgame.canvas.width, 0);
        Endgame.imageWidth -= Endgame.scrollSpeed;
        if (Endgame.imageWidth == -Endgame.canvas.width)
            Endgame.imageWidth = 0;
        collision();
        Endgame.scoreArray[0].text = "SCORE: " + Endgame.scorePoints;
        Endgame.scoreArray[0].update();
        for (let i = 0; i < Endgame.collisionArray.length; i++) {
            Endgame.collisionArray[i].update();
        }
        Endgame.playerArray[0].update();
    }
    function startNew() {
        Endgame.refresh();
        deathOfThanos();
        Endgame.crc.clearRect(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        Endgame.scorePoints = 0;
        Endgame.playerArray = [];
        Endgame.collisionArray = [];
        let player = new Endgame.Fish("blue");
        Endgame.playerArray.push(player);
        for (let i = 0; i < 8; i++) {
            let enemy = new Endgame.Enemyfish();
            Endgame.collisionArray.push(enemy);
        }
        let score = new Endgame.Score("20px", "Consolas", "black", 500, 30, "text");
        Endgame.scoreArray.push(score);
        scoreP();
        generateFood();
        generateBubbles();
        update();
    }
    function collision() {
        for (let i = 0; i < Endgame.collisionArray.length; i++) {
            if (Endgame.playerArray[0].collisionEnemy(Endgame.collisionArray[i])) {
                if (Endgame.collisionArray[i].type == 1) {
                    if (Endgame.playerArray[0].r < Endgame.collisionArray[i].r) {
                        deathOfThanos();
                        Endgame.nickname = prompt("Das geht noch besser! " + "Score: " + Endgame.scorePoints + " " + "|" + " " + "Los trag dich schnell ein:");
                        Endgame.insert();
                        Endgame.refresh();
                    }
                    else
                        (Endgame.collisionArray.splice(i, 1), Endgame.scorePoints += 5, Endgame.collisionArray.push(new Endgame.Enemyfish()));
                }
                else if (Endgame.collisionArray[i].type == 3)
                    Endgame.playerArray[0].dx = 5, Endgame.playerArray[0].dy = -5, Endgame.collisionArray.splice(i, 1), Endgame.scorePoints -= 5;
                else
                    (Endgame.collisionArray.splice(i, 1), Endgame.playerArray[0].r += 10, Endgame.scorePoints += 10, c1 = window.setInterval(function () { Endgame.playerArray[0].color = "pink"; }, 150), c2 = window.setInterval(function () { Endgame.playerArray[0].color = "red"; }, 200), window.setTimeout(function () { Endgame.playerArray[0].r -= 10; Endgame.playerArray[0].color = "blue"; clearInterval(c1); clearInterval(c2); }, 4000));
            }
        }
        if ((Endgame.playerArray[0].x + Endgame.playerArray[0].r) < 0 || (Endgame.playerArray[0].x + Endgame.playerArray[0].r) > 600 || (Endgame.playerArray[0].y + Endgame.playerArray[0].r) > 400 || (Endgame.playerArray[0].y + Endgame.playerArray[0].r) < 0) {
            deathOfThanos();
            Endgame.nickname = prompt("Schwache Leistung Rekrut... " + "Score: " + Endgame.scorePoints + " " + "|" + " " + "Verewige dich als Loser:");
            Endgame.insert();
            Endgame.refresh();
        }
    }
    function deathOfThanos() {
        clearTimeout(Endgame.animation);
        clearTimeout(Endgame.scoreTime);
        clearTimeout(Endgame.foodTime);
        clearTimeout(Endgame.bubbleTime);
    }
    function scoreP() {
        Endgame.scoreTime = window.setTimeout(scoreP, 500);
        Endgame.scorePoints += 1;
    }
    function generateFood() {
        Endgame.foodTime = window.setTimeout(generateFood, 8000);
        Endgame.collisionArray.push(new Endgame.Food());
    }
    function generateBubbles() {
        Endgame.bubbleTime = window.setTimeout(generateBubbles, 10000);
        Endgame.collisionArray.push(new Endgame.Bubble());
    }
})(Endgame || (Endgame = {}));
//# sourceMappingURL=canvas.js.map