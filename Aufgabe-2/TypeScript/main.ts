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
    farbe: "Karo",
    zahl: "Sieben"
};
let karo8: Spielkarte = {
    farbe: "Karo",
    zahl: "Acht"
};
let karo9: Spielkarte = {
    farbe: "Karo",
    zahl: "Neun"
};
let karo10: Spielkarte = {
    farbe: "Karo",
    zahl: "Zehn"
};
let karoAss: Spielkarte = {
    farbe: "Karo",
    zahl: "Ass"
};
let karoBube: Spielkarte = {
    farbe: "Karo",
    zahl: "Bube"
};
let karoDame: Spielkarte = {
    farbe: "Karo",
    zahl: "Dame"
};
let karoKönig: Spielkarte = {
    farbe: "Karo",
    zahl: "König"
};
let pik7: Spielkarte = {
    farbe: "Pik",
    zahl: "Sieben"
};
let pik8: Spielkarte = {
    farbe: "Pik",
    zahl: "Acht"
};
let pik9: Spielkarte = {
    farbe: "Pik",
    zahl: "Neun"
};
let pik10: Spielkarte = {
    farbe: "Pik",
    zahl: "Zehn"
};
let pikAss: Spielkarte = {
    farbe: "Pik",
    zahl: "Ass"
};
let pikBube: Spielkarte = {
    farbe: "Pik",
    zahl: "Bube"
};
let pikDame: Spielkarte = {
    farbe: "Pik",
    zahl: "Dame"
};
let pikKönig: Spielkarte = {
    farbe: "Pik",
    zahl: "König"
};
let kreuz7: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Sieben"
};
let kreuz8: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Acht"
};
let kreuz9: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Neun"
};
let kreuz10: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Zehn"
};
let kreuzAss: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Ass"
};
let kreuzBube: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Bube"
};
let kreuzDame: Spielkarte = {
    farbe: "Kreuz",
    zahl: "Dame"
};
let kreuzKönig: Spielkarte = {
    farbe: "Kreuz",
    zahl: "König"
};

document.addEventListener('DOMContentLoaded', write_htmlbody);

function write_htmlbody () {
    let body : string = `<div class="top_interface">
    <div class="rundenzahl">
        <p>Runde:</p>
    </div>
        <p>30s/20s/10s</p>
    <div class="siege">
        <p>Siege:</p>
    </div>
    <div class="minuspunkte:">
        <p>Maluspunkte:</p>
    </div>`;
    document.getElementById("createHtml").insertAdjacentHTML('beforeend', body);
    neues_spiel();
}

let ziehstapel: Spielkarte[] = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
let handkarten: Spielkarte[] = [];

function neues_spiel(): void {
    let anfangskarten : number
    ziehstapel = [herz7, herz8, herz9, herz10, herzAss, herzBube, herzDame, herzKönig, karo7, karo8, karo9, karo10, karoAss, karoBube, karoDame, karoKönig, pik7, pik8, pik9, pik10, pikAss, pikBube, pikDame, pikKönig, kreuz7, kreuz8, kreuz9, kreuz10, kreuzAss, kreuzBube, kreuzDame, kreuzKönig];
    handkarten.length = 0
    document.getElementById("handkarten").innerHTML = " ";
    
    do{
        anfangskarten = parseInt(prompt("Wie viele Handkarten? Von einer bis 32"), 10);
    } while(isNaN(anfangskarten) || anfangskarten > 32 || anfangskarten < 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                              < 1)
    
        document.getElementById("handkartenAnzahl").innerHTML = "Anzahl Handkarten:" + " " + anfangskarten;
        random_cards(anfangskarten);
        console.log(anfangskarten); 
    }


function random_cards(_anfangskarten: number){
    let i: number = 0; 
    let x: number;   
    while (i < _anfangskarten){
        x = Math.floor((Math.random() * ziehstapel.length) + 0);  
        console.log("Anzahl Ziehstapel:" + " " + ziehstapel.length)
        console.log("Zufallsnummer:" + " " + x);
        console.log(ziehstapel[x]);
        
        handkarten.push(ziehstapel[x]);
        console.log(handkarten[i])
        ziehstapel.splice(x,1);
        
        let kartenFarbe: string = handkarten[i].farbe;
        let kartenNummer: string = handkarten[i].zahl;
        console.log(kartenFarbe, kartenNummer);
        create_cards(kartenFarbe, kartenNummer);
        i++
    }
        create_ziehstapel(ziehstapel.length)
    }

function create_cards(_kartenFarbe: string, _kartenNummer: string){
    switch(_kartenFarbe){
        case "Herz":
        case "Karo":
        let cardsred : string = `<div class="flex"><ul><li class="farberot">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
        document.getElementById("handkarten").insertAdjacentHTML('beforeend', cardsred);
        break;
        default:
        let cardsblack : string = `<div class="flex"><ul><li class="farbeschwarz">${_kartenFarbe}</li><li class="zahl">${_kartenNummer}</li></ul></div>`;
        document.getElementById("handkarten").insertAdjacentHTML('beforeend', cardsblack);
        break;
    }
}

function create_ziehstapel(_ziehstapelanzahl: number){
    let ziehstapel : string = `<div class="ziehstapel"><p id="innerZiehstapel"></p></div>`;
    document.getElementById("handkarten").insertAdjacentHTML('beforeend', ziehstapel);
    document.getElementById("innerZiehstapel").innerHTML = "Ziehstapel:" + " " + _ziehstapelanzahl;
}

