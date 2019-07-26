var Endabgabe;
(function (Endabgabe) {
    let canvas1; // Worm
    let canvas2; // Food
    let canvas3; // World
    canvas1 = document.getElementsByTagName("canvas")[0];
    Endabgabe.ctx1 = canvas1.getContext("2d");
    canvas2 = document.getElementsByTagName("canvas")[1];
    Endabgabe.ctx2 = canvas2.getContext("2d");
    canvas3 = document.getElementsByTagName("canvas")[2];
    Endabgabe.ctx3 = canvas3.getContext("2d");
    Endabgabe.utility = new Endabgabe.Utility();
    Endabgabe.game = new Endabgabe.Game(Endabgabe.ctx1, Endabgabe.ctx2, Endabgabe.ctx3);
    function startGame() {
        addEventListener("keydown", keyHandleDown);
        addEventListener("keyup", keyHandleUp);
        Endabgabe.game.init();
        update();
    }
    function keyHandleDown(_e) {
        if (_e.keyCode && _e.keyCode == 37) {
            Endabgabe.game.worms[0].speed.x = -3;
        }
        if (_e.keyCode == 39) {
            Endabgabe.game.worms[0].speed.x = 3;
        }
        if (_e.keyCode == 38) {
            Endabgabe.game.worms[0].speed.y = -3;
        }
        if (_e.keyCode == 40) {
            Endabgabe.game.worms[0].speed.y = 3;
        }
    }
    function keyHandleUp(_e) {
        if (_e.keyCode && _e.keyCode == 37) {
            Endabgabe.game.worms[0].speed.x = 0;
        }
        if (_e.keyCode == 39) {
            Endabgabe.game.worms[0].speed.x = 0;
        }
        if (_e.keyCode == 38) {
            Endabgabe.game.worms[0].speed.y = 0;
        }
        if (_e.keyCode == 40) {
            Endabgabe.game.worms[0].speed.y = 0;
        }
    }
    function update() {
        let t = window.setTimeout(update, 1000 / 60);
        Endabgabe.ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        Endabgabe.ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        Endabgabe.ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        for (let i = 0; i < Endabgabe.game.foods.length; i++) {
            if (Endabgabe.game.worms[0].collision(Endabgabe.game.foods[i])) {
                Endabgabe.game.foods.splice(i, 1);
                Endabgabe.game.worms[0].sizemodifier += Endabgabe.game.foods[i].sizemodifier;
            }
        }
        if (Endabgabe.game.worms[0].checkEndofMap()) {
            clearTimeout(t);
        }
        Endabgabe.game.draw();
    }
    startGame();
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map