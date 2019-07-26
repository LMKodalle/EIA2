namespace Endgame {
    export class Score {
        fontSize: string;
        fontStyle: string;
        fontColor: string;
        x: number;
        y: number;
        text: string;

        constructor(fontSize: string, fontStyle: string, fontColor: string, x: number, y: number, text: string) {
            this.fontSize = fontSize;
            this.fontStyle = fontStyle;
            this.fontColor = fontColor;
            this.x = x;
            this.y = y;
            this.text = text;
        }
        
        update(): void {
            crc.font = this.fontSize + " " + this.fontStyle;
            crc.fillStyle = this.fontColor;
            crc.fillText(this.text, this.x, this.y);
        }
    }
}