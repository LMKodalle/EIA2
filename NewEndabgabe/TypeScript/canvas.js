var Endgame;
(function (Endgame) {
    document.addEventListener("DOMContentLoaded", init);
    Endgame.imageWidth = 0;
    Endgame.scrollSpeed = 1;
    Endgame.playerArray = [];
    Endgame.enemyArray = [];
    Endgame.foodArray = [];
    Endgame.scoreArray = [];
    Endgame.scorePoints = 0;
    Endgame.animation = 0;
    function init() {
        window.addEventListener("keydown", keyHandleDown);
        window.addEventListener("keyup", keyHandleUp);
        document.getElementById("restart").addEventListener("click", startNew);
        Endgame.canvas = document.getElementsByTagName("canvas")[0];
        Endgame.crc = Endgame.canvas.getContext("2d");
        drawBackground();
        Endgame.imageData = Endgame.crc.getImageData(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        let player = new Endgame.Fish("blue", 1);
        Endgame.playerArray.push(player);
        for (let i = 0; i < 5; i++) {
            let enemy = new Endgame.Enemyfish();
            Endgame.enemyArray.push(enemy);
        }
        for (let i = 0; i < 5; i++) {
            let bubbles = new Endgame.Bubble();
            Endgame.foodArray.push(bubbles);
        }
        let score = new Endgame.Score("20px", "Consolas", "black", 400, 30, "text");
        Endgame.scoreArray.push(score);
        alert("Rekrut, stillgestanden! Du steuerst den blauen Kugelfisch und versuchst den schwarzen feindlichen Kugelfischen auszuweichen. Friss das Futter, welches von oben nach unten sinkt, um für kurze Zeit größer zu sein und dadurch die Feinde zu vernichten!");
        update();
        setInterval(incScore, 500);
        setInterval(generateFish, 15000);
        setInterval(generateFood, 10000);
        Endgame.refresh();
    }
    function incScore() {
        Endgame.scorePoints += 1;
    }
    function generateFish() {
        let enemy = new Endgame.Enemyfish();
        Endgame.enemyArray.push(enemy);
    }
    function generateFood() {
        let food = new Endgame.Food();
        Endgame.foodArray.push(food);
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
        Endgame.animation = window.requestAnimationFrame(update);
        Endgame.crc.clearRect(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        Endgame.crc.putImageData(Endgame.imageData, Endgame.imageWidth, 0);
        Endgame.crc.putImageData(Endgame.imageData, Endgame.imageWidth + Endgame.canvas.width, 0);
        Endgame.imageWidth -= Endgame.scrollSpeed;
        if (Endgame.imageWidth == -Endgame.canvas.width)
            Endgame.imageWidth = 0;
        Endgame.scoreArray[0].text = "SCORE: " + Endgame.scorePoints;
        Endgame.scoreArray[0].update();
        for (let i = 1; i < Endgame.enemyArray.length; i++) {
            if (Endgame.playerArray[0].collisionEnemy(Endgame.enemyArray[i])) {
                if (Endgame.playerArray[0].r < Endgame.enemyArray[i].r) {
                    cancelAnimationFrame(Endgame.animation);
                    clearInterval();
                    Endgame.nickname = prompt("Das geht noch besser! " + "Score: " + Endgame.scorePoints + " " + "|" + " " + "Los trag dich schnell ein:");
                    if (Endgame.nickname == null) {
                        Endgame.nickname = "SpongebobSchwammkopf";
                        Endgame.insert();
                        Endgame.refresh();
                    }
                    if (Endgame.nickname == " ") {
                        Endgame.nickname = "NOthIsIsPaTrIcK";
                        Endgame.insert();
                        Endgame.refresh();
                    }
                    else
                        (Endgame.insert(), Endgame.refresh());
                }
                else
                    (Endgame.enemyArray.splice(i, 1), Endgame.scorePoints += 5);
                generateFish();
            }
        }
        for (let i = 1; i < Endgame.foodArray.length; i++) {
            if (Endgame.playerArray[0].collisionFood(Endgame.foodArray[i])) {
                Endgame.foodArray.splice(i, 1);
                Endgame.playerArray[0].r += 10;
                Endgame.scorePoints += 2;
                let c1 = window.setInterval(function () { Endgame.playerArray[0].color = "pink"; }, 150);
                let c2 = window.setInterval(function () { Endgame.playerArray[0].color = "red"; }, 200);
                window.setTimeout(function () { Endgame.playerArray[0].r -= 10; Endgame.playerArray[0].color = "blue"; clearInterval(c1); clearInterval(c2); }, 4000);
            }
        }
        for (let i = 0; i < Endgame.foodArray.length; i++) {
            if (Endgame.foodArray[i].y - 10 > 400)
                Endgame.foodArray.splice(i, 1);
        }
        if ((Endgame.playerArray[0].x + Endgame.playerArray[0].r) < 0 || (Endgame.playerArray[0].x + Endgame.playerArray[0].r) > 600 || (Endgame.playerArray[0].y + Endgame.playerArray[0].r) > 400 || (Endgame.playerArray[0].y + Endgame.playerArray[0].r) < 0) {
            cancelAnimationFrame(Endgame.animation);
            clearInterval();
            Endgame.nickname = prompt("Schwache Leistung Rekrut... " + "Score: " + Endgame.scorePoints + " " + "|" + " " + "Verewige dich als Loser:");
            if (Endgame.nickname == null) {
                Endgame.nickname = "SpongebobSchwammkopf";
                Endgame.insert();
                Endgame.refresh();
            }
            if (Endgame.nickname == " ") {
                Endgame.nickname = "NOthIsIsPaTrIcK";
                Endgame.insert();
                Endgame.refresh();
            }
            else
                (Endgame.nickname = "Anonym", Endgame.insert(), Endgame.refresh());
        }
        for (let i = 0; i < Endgame.enemyArray.length; i++) {
            Endgame.enemyArray[i].update();
        }
        for (let i = 0; i < Endgame.foodArray.length; i++) {
            Endgame.foodArray[i].update();
        }
        Endgame.playerArray[0].update();
    }
    function startNew() {
        cancelAnimationFrame(Endgame.animation);
        Endgame.crc.clearRect(0, 0, Endgame.canvas.width, Endgame.canvas.height);
        Endgame.scorePoints = 0;
        Endgame.playerArray = [];
        Endgame.enemyArray = [];
        Endgame.foodArray = [];
        let player = new Endgame.Fish("blue", 1);
        Endgame.playerArray.push(player);
        for (let i = 0; i < 5; i++) {
            let enemy = new Endgame.Enemyfish();
            Endgame.enemyArray.push(enemy);
        }
        for (let i = 0; i < 5; i++) {
            let bubbles = new Endgame.Bubble();
            Endgame.foodArray.push(bubbles);
        }
        let score = new Endgame.Score("20px", "Consolas", "black", 500, 30, "text");
        Endgame.scoreArray.push(score);
        update();
        incScore();
        generateFish();
        generateFood();
    }
})(Endgame || (Endgame = {}));
//# sourceMappingURL=canvas.js.map