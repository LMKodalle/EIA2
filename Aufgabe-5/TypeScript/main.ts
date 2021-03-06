namespace aufgabe5 {
    window.addEventListener("load", init);

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    function init(_event: Event): void {
        console.log(categories);
        displayEis1(categories);
        rdy();
    }

    function displayEis1(_cat: KeyArray): void {

        document.body.appendChild(fieldset);
        legend.innerHTML = "Stelle Dein Eis zusammen";
        fieldset.appendChild(legend);
        for (let kategorie in _cat) {
            let value: Eiskategorie[] = _cat[kategorie];
            for (let i: number = 0; i < value.length; i++)
                displayEis2(value[i]);
        }
    }

    function displayEis2(_eis: Eiskategorie): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _eis.name);
        label.innerHTML = _eis.name;
        switch (_eis.type) {
            case "radio":
                input.setAttribute("type", _eis.type);
                input.setAttribute("name", "radiobutton");
                input.setAttribute("price", "0");
                input.setAttribute("bezeichnung", _eis.name)
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
                input.setAttribute("name", _eis.name)
                break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }

    function rdy(): void {
        document.getElementById("bestellen").addEventListener("click", missing);
        console.log("loaded");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", click);
        }
    }

    function click(_event: Event): void {
        let start: number = 0;
        let check: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let newElement: HTMLElement = document.createElement("li");
        document.getElementById("sorten").innerHTML = " ";
        document.getElementById("toppings").innerHTML = " ";
        document.getElementById("price").innerHTML = " ";
        document.getElementById("form").innerHTML = " ";
        document.getElementById("shipping").innerHTML = " ";
        for (let i: number = 0; i < check.length; i++) {
            if (check[i].checked == true && check[i].getAttribute("price") == "0.5") {
                let price: number = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                newElement.innerHTML = `${check[i].name}`;
                document.getElementById("toppings").appendChild(newElement);
            }
            if (check[i].checked == true && check[i].getAttribute("name") == "radiobutton") {
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let form: HTMLElement = document.createElement("li");
                form.innerHTML = `${check[i].getAttribute("bezeichnung")}`;
                document.getElementById("form").appendChild(form);
            }
            if (check[i].type == "number" && Number(check[i].value) > 0) {
                let price: number = Number(check[i].value);
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let sorten: HTMLElement = document.createElement("li");
                sorten.innerHTML = `${check[i].value} x ${check[i].name}`;
                document.getElementById("sorten").appendChild(sorten);
            }
            if (check[i].checked == true && check[i].name == "shipping") {
                let price: number = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + " " + "€";
                let shipping: HTMLElement = document.createElement("li");
                shipping.innerHTML = `${check[i].getAttribute("bezeichnung")}`;
                document.getElementById("shipping").appendChild(shipping);
        }
    }
}

    function missing(): void {
        let empty: string[] = [];
        let missing: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let sorten: number = 0;
        let button: number = 0;
        for (let i: number = 0; i < missing.length; i++) {            
            if (missing[i].type == "text")
                if (missing[i].value == "") {
                    let feldName: string = missing[i].name;
                    empty.push(feldName);
            }
            if (missing[i].type == "number") {
                if (Number(missing[i].value) > 0) {
                    sorten = 1;
                }
            }
            if (missing[i].type == "radio") {
                if (missing[i].checked == true) {
                    button = 1;
                }
            }
        } 
        if (button == 0) {
            alert("Darreichungsform wählen")
        }
        if (sorten == 0) {
            alert("Sorte auswählen")
        }
        if (empty.length == 0) {
            alert("Vielen Dank für Deine Bestellung");
        }
        else {
            alert(`Du musst unbedingt noch ${empty} angeben`);
        }
    }
}