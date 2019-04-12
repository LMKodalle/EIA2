interface Spielkarte {
    farbe: string;
    zahl: string;
    order: number;
}
let herz7: Spielkarte = {
    farbe: "Herz",
    zahl: "Sieben",
    order: 1
};
let herz8: Spielkarte = {
    farbe: "Herz",
    zahl: "Acht",
    order: 2
};
let herz9: Spielkarte = {
    farbe: "Herz",
    zahl: "Neun",
    order: 3
};
let herz10: Spielkarte = {
    farbe: "Herz",
    zahl: "Zehn",
    order: 4
};
let herzAss: Spielkarte = {
    farbe: "Herz",
    zahl: "Ass",
    order: 5
};
let herzBube: Spielkarte = {
    farbe: "Herz",
    zahl: "Bube",
    order: 6
};
let herzDame: Spielkarte = {
    farbe: "Herz",
    zahl: "Dame",
    order: 7
};
let herzKönig: Spielkarte = {
    farbe: "Herz",
    zahl: "König",
    order: 8
};
let karo7: Spielkarte = {
    farbe: "Karo",
    zahl: "Sieben",
    order: 9
};
let karo8: Spielkarte = {
    farbe: "Karo",
    zahl: "Acht",
    order: 10
};
let karo9: Spielkarte = {
    farbe: "Karo",
    zahl: "Neun",
    order: 11
};
let karo10: Spielkarte = {
    farbe: "Karo",
    zahl: "Zehn",
    order: 12
};
let karoAss: Spielkarte = {
    farbe: "Karo",
    zahl: "Ass",
    order: 13
};
let karoBube: Spielkarte = {
    farbe: "Karo",
    zahl: "Bube",
    order: 14
};
let karoDame: Spielkarte = {
    farbe: "Karo",
    zahl: "Dame",
    order: 15
};
let karoKönig: Spielkarte = {
    farbe: "Karo",
    zahl: "König",
    order: 16
};
let pik7: Spielkarte = {
    farbe: "Pik",
    zahl: "Sieben",
    order: 17
};
let pik8: Spielkarte = {
    farbe: "Pik",
    zahl: "Acht",
    order: 18
};
let pik9: Spielkarte = {
    farbe: "Pik",
    zahl: "Neun",
    order: 19
};
let pik10: Spielkarte = {
    farbe: "Pik",
    zahl: "Zehn",
    order: 20
};
let pikAss: Spielkarte = {
    farbe: "Pik",
    zahl: "Ass",
    order: 21
};
let pikBube: Spielkarte = {
    farbe: "Pik",
    zahl: "Bube",
    order: 22
};
let pikDame: Spielkarte = {
    farbe: "Pik",
    zahl: "Dame",
    order: 23
};
let pikKönig: Spielkarte = {
    farbe: "Pik",
    zahl: "König",
    order: 23
};
let kreuz7: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Sieben",
    order: 24
};
let kreuz8: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Acht",
    order: 25
};
let kreuz9: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Neun",
    order: 26
};
let kreuz10: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Zehn",
    order: 27
};
let kreuzAss: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Ass",
    order: 28
};
let kreuzBube: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Bube",
    order: 29
};
let kreuzDame: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Dame",
    order: 30
};
let kreuzKönig: Spielkarte = {
    farbe: "Kreuz",
    zahl: "König",
    order: 31
};

document.addEventListener("DOMContentLoaded", write_htmlbody);

function write_htmlbody(): void {
    let body: string = `<div class="top_interface">
    <div>
        <p class="rundenzahl">Rundenzahl:</p>
    </div>
        <p class="countdown">30s/20s/10s</p>`;
    document.getElementById("createHtml").insertAdjacentHTML("beforeend", body);
    document.getElementById("ziehstapel").addEventListener("click", cards_ziehen);
    document.getElementById("sort").addEventListener("click", cards_sort);
    document.getElementById("handkarten").addEventListener("click", cards_legen);
    window.addEventListener("keydown", press_spacebar)
    neues_spiel();
}
    

let ziehstapel: Spielkarte[] = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
let handkarten: Spielkarte[] = [];
let ablagestapel: Spielkarte[] = [];

function neues_spiel(): void {
    let anfangskarten: number;
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


function random_cards(_anfangskarten: number): void {
    let i: number = 0;
    let x: number;
    while (i < _anfangskarten) {
        x = Math.floor((Math.random() * ziehstapel.length) + 0);
        console.log("Anzahl Ziehstapel:" + " " + ziehstapel.length);
        console.log("Zufallsnummer:" + " " + x);
        console.log(ziehstapel[x]);

        handkarten.push(ziehstapel[x]);
        console.log(handkarten[i]);
        ziehstapel.splice(x, 1);

        let kartenFarbe: string = handkarten[i].farbe;
        let kartenNummer: string = handkarten[i].zahl;
        let kartenID: number = handkarten[i].order;
        console.log(kartenFarbe, kartenNummer);
        create_cards(kartenFarbe, kartenNummer, kartenID);
        i++;
    }
    create_ziehstapel(ziehstapel.length);
}

function create_cards(_kartenFarbe: string, _kartenNummer: string, _kartenID: number): void {
    switch (_kartenFarbe) {
        case "Herz":
        case "Karo":
            let cardsred: string = `<div id="${_kartenID}" class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML("beforeend", cardsred);
            break;
        default:
            let cardsblack: string = `<div id="${_kartenID}" class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("handkarten").insertAdjacentHTML("beforeend", cardsblack);
            break;
    }
}

function create_ziehstapel(_ziehstapelanzahl: number): void {
    let ziehstapel: string = `<div class="ziehstapel" id="ziehstapel"><p id="innerZiehstapel"></p></div>`;
    document.getElementById("ziehstapel").insertAdjacentHTML("beforeend", ziehstapel);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + _ziehstapelanzahl;
}



function cards_ziehen(): void {
    let x: number;
    x = Math.floor((Math.random() * ziehstapel.length) + 0);
    handkarten.push(ziehstapel[x]);
    ziehstapel.splice(x, 1);
    let kartenFarbe: string = handkarten[handkarten.length - 1].farbe;
    let kartenNummer: string = handkarten[handkarten.length - 1].zahl;
    let kartenID: number = handkarten[handkarten.length - 1].order;
    create_cards(kartenFarbe, kartenNummer, kartenID);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + ziehstapel.length;
    document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + handkarten.length;
    }

function press_spacebar(event: KeyboardEvent): void {
    if (event.keyCode == 32) cards_ziehen();
}

function cards_sort(): void {
    let i: number = 0;
    document.getElementById("handkarten").innerHTML = " ";
    handkarten.sort(array_sort);
    console.log(handkarten);
    while (i < handkarten.length) {
    create_cards(handkarten[i].farbe, handkarten[i].zahl, handkarten[i].order);
    i++;
}}

function array_sort(_a: Spielkarte, _b: Spielkarte): number { 
    return _a.order - _b.order;
}

function cards_legen(): void { 
    document.getElementById("handkarten").innerHTML = " "; 
    let i: number= 0;
    let domCard: HTMLElement = <HTMLElement>event.target;
    while(i < handkarten.length) {
        if(handkarten[i].order == parseInt(domCard.getAttribute("id"), 10)) {
            ablagestapel.push(handkarten[i]);
            handkarten.splice(i, 1);
            console.log(handkarten.length);
            console.log(ablagestapel);
        } i++;
    }
    for(i = 0; i < handkarten.length; i++) {
    create_cards(handkarten[i].farbe, handkarten[i].zahl, handkarten[i].order);
    };
    create_ablagestapel(ablagestapel[ablagestapel.length - 1].farbe, ablagestapel[ablagestapel.length - 1].zahl, ablagestapel[ablagestapel.length - 1].order);
}

function create_ablagestapel(_kartenFarbe: string, _kartenNummer: string, _kartenID: number): void {
    document.getElementById("ablagestapel").innerHTML= " ";
    switch (_kartenFarbe) {
        case "Herz":
        case "Karo":
            let cardsred: string = `<div id="${_kartenID}" class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("ablagestapel").insertAdjacentHTML("beforeend", cardsred);
            break;
        default:
            let cardsblack: string = `<div id="${_kartenID}" class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
            document.getElementById("ablagestapel").insertAdjacentHTML("beforeend", cardsblack);
            break;
    }
}
