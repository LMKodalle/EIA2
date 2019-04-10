let herz7 = {
    farbe: "Herz",
    zahl: "Sieben"
};
let herz8 = {
    farbe: "Herz",
    zahl: "Acht"
};
let herz9 = {
    farbe: "Herz",
    zahl: "Neun"
};
let herz10 = {
    farbe: "Herz",
    zahl: "Zehn"
};
let herzAss = {
    farbe: "Herz",
    zahl: "Ass"
};
let herzBube = {
    farbe: "Herz",
    zahl: "Bube"
};
let herzDame = {
    farbe: "Herz",
    zahl: "Dame"
};
let herzKönig = {
    farbe: "Herz",
    zahl: "König"
};
let karo7 = {
    farbe: "Karo",
    zahl: "Sieben"
};
let karo8 = {
    farbe: "Karo",
    zahl: "Acht"
};
let karo9 = {
    farbe: "Karo",
    zahl: "Neun"
};
let karo10 = {
    farbe: "Karo",
    zahl: "Zehn"
};
let karoAss = {
    farbe: "Karo",
    zahl: "Ass"
};
let karoBube = {
    farbe: "Karo",
    zahl: "Bube"
};
let karoDame = {
    farbe: "Karo",
    zahl: "Dame"
};
let karoKönig = {
    farbe: "Karo",
    zahl: "König"
};
let pik7 = {
    farbe: "Pik",
    zahl: "Sieben"
};
let pik8 = {
    farbe: "Pik",
    zahl: "Acht"
};
let pik9 = {
    farbe: "Pik",
    zahl: "Neun"
};
let pik10 = {
    farbe: "Pik",
    zahl: "Zehn"
};
let pikAss = {
    farbe: "Pik",
    zahl: "Ass"
};
let pikBube = {
    farbe: "Pik",
    zahl: "Bube"
};
let pikDame = {
    farbe: "Pik",
    zahl: "Dame"
};
let pikKönig = {
    farbe: "Pik",
    zahl: "König"
};
let kreuz7 = {
    farbe: "Kreuz",
    zahl: "Sieben"
};
let kreuz8 = {
    farbe: "Kreuz",
    zahl: "Acht"
};
let kreuz9 = {
    farbe: "Kreuz",
    zahl: "Neun"
};
let kreuz10 = {
    farbe: "Kreuz",
    zahl: "Zehn"
};
let kreuzAss = {
    farbe: "Kreuz",
    zahl: "Ass"
};
let kreuzBube = {
    farbe: "Kreuz",
    zahl: "Bube"
};
let kreuzDame = {
    farbe: "Kreuz",
    zahl: "Dame"
};
let kreuzKönig = {
    farbe: "Kreuz",
    zahl: "König"
};
document.addEventListener('DOMContentLoaded', write_htmlbody);
function write_htmlbody() {
    let body = `<div class="top_interface">
    <div>
        <p class="rundenzahl">Rundenzahl:</p>
    </div>
        <p class="countdown">30s/20s/10s</p>`;
    document.getElementById("createHtml").insertAdjacentHTML('beforeend', body);
    neues_spiel();
}
let ziehstapel = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
let handkarten = [];
function neues_spiel() {
    let anfangskarten;
    ziehstapel = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
    handkarten.length = 0;
    document.getElementById("handkarten").innerHTML = " ";
    do {
        anfangskarten = parseInt(prompt("Wie viele Handkarten? Von einer bis 32"), 10);
    } while (isNaN(anfangskarten) || anfangskarten > 32 || anfangskarten < 1);
    ;
    document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + anfangskarten;
    random_cards(anfangskarten);
    console.log(anfangskarten);
}
function random_cards(_anfangskarten) {
    let i = 0;
    let x;
    while (i < _anfangskarten) {
        x = Math.floor((Math.random() * ziehstapel.length) + 0);
        console.log("Anzahl Ziehstapel:" + " " + ziehstapel.length);
        console.log("Zufallsnummer:" + " " + x);
        console.log(ziehstapel[x]);
        handkarten.push(ziehstapel[x]);
        console.log(handkarten[i]);
        ziehstapel.splice(x, 1);
        let kartenFarbe = handkarten[i].farbe;
        let kartenNummer = handkarten[i].zahl;
        console.log(kartenFarbe, kartenNummer);
        create_cards(kartenFarbe, kartenNummer);
        i++;
    }
    create_ziehstapel(ziehstapel.length);
}
function create_cards(_kartenFarbe, _kartenNummer) {
    switch (_kartenFarbe) {
        case "Herz":
        case "Karo":
            let cardsred = `<div class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML('beforeend', cardsred);
            break;
        default:
            let cardsblack = `<div class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML('beforeend', cardsblack);
            break;
    }
}
function create_ziehstapel(_ziehstapelanzahl) {
    let ziehstapel = `<div class="ziehstapel"><p id="innerZiehstapel"></p></div>`;
    document.getElementById("handkarten").insertAdjacentHTML('beforeend', ziehstapel);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + _ziehstapelanzahl;
}
function cards_ziehen() {
    let i = 0;
    let x;
    while (i < 1) {
        x = Math.floor((Math.random() * ziehstapel.length) + 0);
        handkarten.push(ziehstapel[x]);
        ziehstapel.splice(x, 1);
        let kartenFarbe = handkarten[handkarten.length - 1].farbe;
        let kartenNummer = handkarten[handkarten.length - 1].zahl;
        create_cards(kartenFarbe, kartenNummer);
        document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + ziehstapel.length;
        i++;
    }
}
//# sourceMappingURL=main.js.map