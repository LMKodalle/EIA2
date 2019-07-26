var Endgame;
(function (Endgame) {
    class Score {
        constructor(fontSize, fontStyle, fontColor, x, y, text) {
            this.fontSize = fontSize;
            this.fontStyle = fontStyle;
            this.fontColor = fontColor;
            this.x = x;
            this.y = y;
            this.text = text;
        }
        update() {
            Endgame.crc.font = this.fontSize + " " + this.fontStyle;
            Endgame.crc.fillStyle = this.fontColor;
            Endgame.crc.fillText(this.text, this.x, this.y);
        }
    }
    Endgame.Score = Score;
})(Endgame || (Endgame = {}));
//# sourceMappingURL=Score.js.map