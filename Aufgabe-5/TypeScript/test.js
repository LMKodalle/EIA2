var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        console.log(aufgabe5.categories);
        displayEis1(aufgabe5.categories);
        rdy();
    }
    function displayEis1(_cat) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Stelle Dein Eis zusammen";
        fieldset.appendChild(legend);
        for (let kategorie in _cat) {
            let value = _cat[kategorie];
            for (let i = 0; i < value.length; i++)
                displayEis2(value[i]);
        }
    }
    function displayEis2(_eis) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", _eis.name);
        label.innerHTML = _eis.name;
        switch (_eis.type) {
            case "radio":
                input.setAttribute("type", _eis.type);
                input.setAttribute("name", "radiobutton");
                input.setAttribute("price", "0");
                break;
            case "number":
                input.setAttribute("type", _eis.type);
                input.setAttribute("name", _eis.name);
                input.setAttribute("step", "1");
                input.setAttribute("min", "0");
                input.setAttribute("max", "5");
                input.setAttribute("value", "0");
                input.setAttribute("price", "1");
                break;
            case "checkbox":
                input.setAttribute("type", _eis.type);
                input.setAttribute("price", "0.5");
                break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    function rdy() {
        document.getElementById("bestellen").addEventListener("click", missing);
        console.log("loaded");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", click);
        }
    }
    function click(_event) {
        let start = 0;
        let check = document.getElementsByTagName("input");
        let newElement = document.createElement("li");
        document.getElementById("sorten").innerHTML = " ";
        document.getElementById("toppings").innerHTML = " ";
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked == true) {
                let price = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                newElement.innerHTML = `${check[i].id}`;
                document.getElementById("toppings").appendChild(newElement);
            }
            if (check[i].type == "number" && Number(check[i].getAttribute("price")) > 0) {
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
            alert("Vielen Dank für Deine Bestellung");
        }
        else {
            alert(`Du musst unbedingt noch ${empty} angeben`);
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=test.js.map