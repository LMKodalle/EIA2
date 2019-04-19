window.addEventListener("load", rdy);
function rdy(_event) {
    document.getElementById("bestellen").addEventListener("click", missing);
    console.log("loaded");
    let fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", click);
    }
}
function click(_event) {
    let x = 0;
    let check = document.getElementsByTagName("input");
    document.getElementById("sorten").innerHTML = " ";
    document.getElementById("toppings").innerHTML = " ";
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            let price = Number(check[i].value);
            x += price;
            document.getElementById("price").innerHTML = x.toFixed(2).toString() + " " + "€";
            let bezeichung = document.createElement("li");
            bezeichung.innerHTML = `${check[i].id}`;
            document.getElementById("toppings").appendChild(bezeichung);
        }
        if (check[i].type == "number" && Number(check[i].value) > 0) {
            let sorten = document.createElement("li");
            sorten.innerHTML = `${check[i].value} x ${check[i].name}`;
            document.getElementById("sorten").appendChild(sorten);
        }
    }
}
function missing() {
    let empty = [];
    let missing = document.getElementsByTagName("input");
    for (let i = 0; i < missing.length; i++) {
        if (missing[i].value == "") {
            let feldName = missing[i].name;
            empty.push(feldName);
        }
    }
    if (empty.length == 0) {
        alert("danke fur ihre Bestellung");
    }
    else {
        alert(`Du musst unbedingt noch ${empty} angeben`);
    }
}
//# sourceMappingURL=main.js.map