namespace Endabgabe {
    export class Utility {
        constructor() {
            //
        }
        random(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        collision(): void {
            //
        }        
    }
}