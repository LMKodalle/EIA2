interface Spielkarte {
    farbe: string;
    zahl: string;
}
let herz7: Spielkarte = {
    farbe: "Herz",
    zahl: "Sieben"
};
let herz8: Spielkarte = {
    farbe: "Herz",
    zahl: "Acht"
};
let herz9: Spielkarte = {
    farbe: "Herz",
    zahl: "Neun"
};
let herz10: Spielkarte = {
    farbe: "Herz",
    zahl: "Zehn"
};
let herzAss: Spielkarte = {
    farbe: "Herz",
    zahl: "Ass"
};
let herzBube: Spielkarte = {
    farbe: "Herz",
    zahl: "Bube"
};
let herzDame: Spielkarte = {
    farbe: "Herz",
    zahl: "Dame"
};
let herzKönig: Spielkarte = {
    farbe: "Herz",
    zahl: "König"
};
let karo7: Spielkarte = {
    farbe: "Herz",
    zahl: "Sieben"
};
let karo8: Spielkarte = {
    farbe: "Herz",
    zahl: "Acht"
};
let karo9: Spielkarte = {
    farbe: "Herz",
    zahl: "Neun"
};
let karo10: Spielkarte = {
    farbe: "Herz",
    zahl: "Zehn"
};
let karoAss: Spielkarte = {
    farbe: "Herz",
    zahl: "Ass"
};
let karoBube: Spielkarte = {
    farbe: "Herz",
    zahl: "Bube"
};
let karoDame: Spielkarte = {
    farbe: "Herz",
    zahl: "Dame"
};
let karoKönig: Spielkarte = {
    farbe: "Herz",
    zahl: "König"
};
let pik7: Spielkarte = {
    farbe: "Herz",
    zahl: "Sieben"
};
let pik8: Spielkarte = {
    farbe: "Herz",
    zahl: "Acht"
};
let pik9: Spielkarte = {
    farbe: "Herz",
    zahl: "Neun"
};
let pik10: Spielkarte = {
    farbe: "Herz",
    zahl: "Zehn"
};
let pikAss: Spielkarte = {
    farbe: "Herz",
    zahl: "Ass"
};
let pikBube: Spielkarte = {
    farbe: "Herz",
    zahl: "Bube"
};
let pikDame: Spielkarte = {
    farbe: "Herz",
    zahl: "Dame"
};
let pikKönig: Spielkarte = {
    farbe: "Herz",
    zahl: "König"
};
let kreuz7: Spielkarte = {
    farbe: "Herz",
    zahl: "Sieben"
};
let kreuz8: Spielkarte = {
    farbe: "Herz",
    zahl: "Acht"
};
let kreuz9: Spielkarte = {
    farbe: "Herz",
    zahl: "Neun"
};
let kreuz10: Spielkarte = {
    farbe: "Herz",
    zahl: "Zehn"
};
let kreuzAss: Spielkarte = {
    farbe: "Herz",
    zahl: "Ass"
};
let kreuzBube: Spielkarte = {
    farbe: "Herz",
    zahl: "Bube"
};
let kreuzDame: Spielkarte = {
    farbe: "Herz",
    zahl: "Dame"
};
let kreuzKönig: Spielkarte = {
    farbe: "Herz",
    zahl: "König"
};

let ziehstapel: Spielkarte[] = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
let zandkarten: Spielkarte[] = [];

function neues_spiel(): void {
    let anfangskarten: string = prompt("Wie viele Handkarten?");
    if (anfangskarten != null) {
        document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + anfangskarten;
    }
}

console.log("Hallo");