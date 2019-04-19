window.addEventListener("load", rdy);

function rdy(_event: Event): void {
    document.getElementById("bestellen").addEventListener("click", missing);
    console.log("loaded");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        fieldset.addEventListener("change", click);
    }
}

function click(_event: Event): void {       
    let x: number= 0;
    let check: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    document.getElementById("sorten").innerHTML = " ";
    document.getElementById("toppings").innerHTML = " ";
    for (let i: number = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            let price: number = Number(check[i].value)
            x += price;
            document.getElementById("price").innerHTML = x.toFixed(2).toString() + " " + "€";
            let bezeichung = document.createElement("li");
            bezeichung.innerHTML = `${check[i].id}`
            document.getElementById("toppings").appendChild(bezeichung)
        }
    if (check[i].type == "number" && Number(check[i].value) > 0) {
            let sorten = document.createElement("li");
            sorten.innerHTML = `${check[i].value} x ${check[i].name}`
            document.getElementById("sorten").appendChild(sorten)
        }
    } 
}

function missing(): void {
    let empty: string[] = [];
    let missing: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    for (let i: number = 0; i < missing.length; i++) {
        if (missing[i].value == "") {
            let feldName: string = missing[i].name
            empty.push(feldName)
        }
    } if (empty.length == 0) {
        alert("danke fur ihre Bestellung");
    } else { alert(`Du musst unbedingt noch ${empty} angeben`); }
}

     
