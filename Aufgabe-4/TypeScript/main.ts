window.addEventListener("load", rdy);

function rdy(_event: Event): void {
    console.log("loaded");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        fieldset.addEventListener("change", handlechange);
    }
}

function handlechange(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let x: number = 0;
    if (target.name == "scoops") {
        let price: number = Number(target.value);
        x += price;
        document.getElementById("price").innerHTML = x;
    }
}

