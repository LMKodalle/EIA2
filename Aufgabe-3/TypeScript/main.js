let herz7 = {
    farbe: "Herz",
    zahl: "Sieben",
    order: 1
};
let herz8 = {
    farbe: "Herz",
    zahl: "Acht",
    order: 2
};
let herz9 = {
    farbe: "Herz",
    zahl: "Neun",
    order: 3
};
let herz10 = {
    farbe: "Herz",
    zahl: "Zehn",
    order: 4
};
let herzAss = {
    farbe: "Herz",
    zahl: "Ass",
    order: 5
};
let herzBube = {
    farbe: "Herz",
    zahl: "Bube",
    order: 6
};
let herzDame = {
    farbe: "Herz",
    zahl: "Dame",
    order: 7
};
let herzKönig = {
    farbe: "Herz",
    zahl: "König",
    order: 8
};
let karo7 = {
    farbe: "Karo",
    zahl: "Sieben",
    order: 9
};
let karo8 = {
    farbe: "Karo",
    zahl: "Acht",
    order: 10
};
let karo9 = {
    farbe: "Karo",
    zahl: "Neun",
    order: 11
};
let karo10 = {
    farbe: "Karo",
    zahl: "Zehn",
    order: 12
};
let karoAss = {
    farbe: "Karo",
    zahl: "Ass",
    order: 13
};
let karoBube = {
    farbe: "Karo",
    zahl: "Bube",
    order: 14
};
let karoDame = {
    farbe: "Karo",
    zahl: "Dame",
    order: 15
};
let karoKönig = {
    farbe: "Karo",
    zahl: "König",
    order: 16
};
let pik7 = {
    farbe: "Pik",
    zahl: "Sieben",
    order: 17
};
let pik8 = {
    farbe: "Pik",
    zahl: "Acht",
    order: 18
};
let pik9 = {
    farbe: "Pik",
    zahl: "Neun",
    order: 19
};
let pik10 = {
    farbe: "Pik",
    zahl: "Zehn",
    order: 20
};
let pikAss = {
    farbe: "Pik",
    zahl: "Ass",
    order: 21
};
let pikBube = {
    farbe: "Pik",
    zahl: "Bube",
    order: 22
};
let pikDame = {
    farbe: "Pik",
    zahl: "Dame",
    order: 23
};
let pikKönig = {
    farbe: "Pik",
    zahl: "König",
    order: 23
};
let kreuz7 = {
    farbe: "Kreuz",
    zahl: "Sieben",
    order: 24
};
let kreuz8 = {
    farbe: "Kreuz",
    zahl: "Acht",
    order: 25
};
let kreuz9 = {
    farbe: "Kreuz",
    zahl: "Neun",
    order: 26
};
let kreuz10 = {
    farbe: "Kreuz",
    zahl: "Zehn",
    order: 27
};
let kreuzAss = {
    farbe: "Kreuz",
    zahl: "Ass",
    order: 28
};
let kreuzBube = {
    farbe: "Kreuz",
    zahl: "Bube",
    order: 29
};
let kreuzDame = {
    farbe: "Kreuz",
    zahl: "Dame",
    order: 30
};
let kreuzKönig = {
    farbe: "Kreuz",
    zahl: "König",
    order: 31
};
document.addEventListener("DOMContentLoaded", write_htmlbody);
function write_htmlbody() {
    let body = `<div class="top_interface">
    <div>
        <p class="rundenzahl">Rundenzahl:</p>
    </div>
        <p class="countdown">30s/20s/10s</p>`;
    document.getElementById("createHtml").insertAdjacentHTML("beforeend", body);
    document.getElementById("ziehstapel").addEventListener("click", cards_ziehen);
    document.getElementById("sort").addEventListener("click", cards_sort);
    document.getElementById("handkarten").addEventListener("click", cards_legen);
    window.addEventListener("keydown", press_spacebar);
    neues_spiel();
}
let ziehstapel = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
let handkarten = [];
let ablagestapel = [];
function neues_spiel() {
    let anfangskarten;
    ziehstapel = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
    handkarten.length = 0;
    document.getElementById("handkarten").innerHTML = " ";
    do {
        anfangskarten = parseInt(prompt("Wie viele Handkarten? Von einer bis 32"), 10);
    } while (isNaN(anfangskarten) || anfangskarten > 32 || anfangskarten < 1);
    document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + anfangskarten;
    random_cards(anfangskarten);
    console.log(anfangskarten);
    document.getElementById("neuesspiel").addEventListener("click", neues_spiel);
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
        let kartenID = handkarten[i].order;
        console.log(kartenFarbe, kartenNummer);
        create_cards(kartenFarbe, kartenNummer, kartenID);
        i++;
    }
    create_ziehstapel(ziehstapel.length);
}
function create_cards(_kartenFarbe, _kartenNummer, _kartenID) {
    switch (_kartenFarbe) {
        case "Herz":
        case "Karo":
            let cardsred = `<div id="${_kartenID}" class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML("beforeend", cardsred);
            break;
        default:
            let cardsblack = `<div id="${_kartenID}" class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML("beforeend", cardsblack);
            break;
    }
}
function create_ziehstapel(_ziehstapelanzahl) {
    let ziehstapel = `<div class="ziehstapel" id="ziehstapel"><p id="innerZiehstapel"></p></div>`;
    document.getElementById("ziehstapel").insertAdjacentHTML("beforeend", ziehstapel);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + _ziehstapelanzahl;
}
function cards_ziehen() {
    let x;
    x = Math.floor((Math.random() * ziehstapel.length) + 0);
    handkarten.push(ziehstapel[x]);
    ziehstapel.splice(x, 1);
    let kartenFarbe = handkarten[handkarten.length - 1].farbe;
    let kartenNummer = handkarten[handkarten.length - 1].zahl;
    let kartenID = handkarten[handkarten.length - 1].order;
    create_cards(kartenFarbe, kartenNummer, kartenID);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + ziehstapel.length;
    document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + handkarten.length;
}
function press_spacebar(event) {
    if (event.keyCode == 32)
        cards_ziehen();
}
function cards_sort() {
    let i = 0;
    document.getElementById("handkarten").innerHTML = " ";
    handkarten.sort(array_sort);
    console.log(handkarten);
    while (i < handkarten.length) {
        create_cards(handkarten[i].farbe, handkarten[i].zahl, handkarten[i].order);
        i++;
    }
}
function array_sort(_a, _b) {
    return _a.order - _b.order;
}
function cards_legen() {
    document.getElementById("handkarten").innerHTML = " ";
    let i = 0;
    let domCard = event.target;
    while (i < handkarten.length) {
        if (handkarten[i].order == parseInt(domCard.getAttribute("id"), 10)) {
            ablagestapel.push(handkarten[i]);
            handkarten.splice(i, 1);
            console.log(handkarten.length);
            console.log(ablagestapel);
        }
        i++;
    }
    for (i = 0; i < handkarten.length; i++) {
        create_cards(handkarten[i].farbe, handkarten[i].zahl, handkarten[i].order);
    }
    ;
    create_ablagestapel(ablagestapel[ablagestapel.length - 1].farbe, ablagestapel[ablagestapel.length - 1].zahl, ablagestapel[ablagestapel.length - 1].order);
}
function create_ablagestapel(_kartenFarbe, _kartenNummer, _kartenID) {
    document.getElementById("ablagestapel").innerHTML = " ";
    switch (_kartenFarbe) {
        case "Herz":
        case "Karo":
            let cardsred = `<div id="${_kartenID}" class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("ablagestapel").insertAdjacentHTML("beforeend", cardsred);
            break;
        default:
            let cardsblack = `<div id="${_kartenID}" class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("ablagestapel").insertAdjacentHTML("beforeend", cardsblack);
            break;
    }
}
//# sourceMappingURL=main.js.map