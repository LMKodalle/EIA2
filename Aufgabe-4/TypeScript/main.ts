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
    
    switch (target.id) {
        case "scoop1" :
        case "scoop2" :
        case "scoop3" :
        case "scoop4" :
        case "scoop5" : document.getElementById("price").innerHTML = target.value + " " + "€"; break;

    }
}