/*
Aufgabe: Aufgabe 0
Name: Lukas Kodalle
Matrikel: 261371
Datum: 21.03.19
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', greeting);
function greeting() {
    var name = prompt("Geben Sie Ihren Namen ein");
    if (name != null) {
        document.getElementById("Begrüßung").innerHTML = "Herzlich Willkommen" + " " + name + " " + "!";
        console.info("Herzlich Willkommen" + " " + name + " " + "!");
    }
}
//# sourceMappingURL=main.js.map