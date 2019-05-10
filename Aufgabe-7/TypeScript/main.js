var eisdealer;
(function (eisdealer) {
    window.addEventListener("load", init);
    let address = "http://localhost:8100/?";
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        console.log(eisdealer.categories);
        displayEis1(eisdealer.categories);
        rdy();
    }
    function displayEis1(_cat) {
        document.getElementById("action").appendChild(fieldset);
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
                input.setAttribute("name", "Darreichungsform");
                input.setAttribute("price", "0");
                input.setAttribute("value", _eis.name);
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
                input.setAttribute("name", _eis.name);
                input.setAttribute("value", "yes");
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
        document.getElementById("sorten").innerHTML = " ";
        document.getElementById("price").innerHTML = " ";
        document.getElementById("form").innerHTML = " ";
        document.getElementById("shipping").innerHTML = " ";
        document.getElementById("toppings").innerHTML = " ";
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked == true && check[i].getAttribute("value") == "yes") {
                let price = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let toppings = document.createElement("li");
                toppings.setAttribute("id", `${check[i].name}`);
                toppings.innerHTML = `${check[i].name}`;
                document.getElementById("toppings").appendChild(toppings);
            }
            if (check[i].checked == true && check[i].getAttribute("name") == "Darreichungsform") {
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let form = document.createElement("li");
                form.setAttribute("id", `${check[i].value}`);
                form.innerHTML = `${check[i].getAttribute("value")}`;
                document.getElementById("form").appendChild(form);
            }
            if (check[i].type == "number" && Number(check[i].value) > 0) {
                let price = Number(check[i].value);
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let sorten = document.createElement("li");
                sorten.setAttribute("id", `${check[i].value} x ${check[i].name}`);
                sorten.innerHTML = `${check[i].value} x ${check[i].name}`;
                document.getElementById("sorten").appendChild(sorten);
            }
            if (check[i].checked == true && check[i].name == "shipping") {
                let price = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let shipping = document.createElement("li");
                shipping.innerHTML = `${check[i].getAttribute("bezeichnung")}`;
                document.getElementById("shipping").appendChild(shipping);
            }
        }
    }
    function missing() {
        let empty = [];
        let missing = document.getElementsByTagName("input");
        let sorten = 0;
        for (let i = 0; i < missing.length; i++) {
            if (missing[i].type == "text")
                if (missing[i].value == "") {
                    let feldName = missing[i].name;
                    empty.push(feldName);
                }
            if (missing[i].type == "number") {
                if (Number(missing[i].value) > 0) {
                    sorten = 1;
                }
            }
        }
        if (sorten == 0) {
            alert("Sorte auswählen");
        }
        if (empty.length == 0) {
            alert("Vielen Dank für Deine Bestellung");
            let liste = document.getElementsByTagName("li");
            for (let i = 0; i < liste.length; i++) {
                address += `${liste[i].id}&`;
            }
            let xhr = new XMLHttpRequest();
            xhr.open("GET", address, true);
            xhr.addEventListener("readystatechange", finishRequest);
            xhr.send();
        }
        else {
            alert(`Du musst unbedingt noch ${empty} angeben`);
        }
    }
    function finishRequest(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("response: " + xhr.response);
            let fieldset2nd = document.createElement("fieldset");
            let legend2nd = document.createElement("legend");
            fieldset2nd.setAttribute("id", "server");
            legend2nd.innerHTML = "Ihre Bestätigung";
            fieldset2nd.append(legend2nd);
            fieldset2nd.innerHTML = xhr.response;
            document.getElementById("action").appendChild(fieldset2nd);
        }
    }
})(eisdealer || (eisdealer = {}));
//# sourceMappingURL=main.js.map