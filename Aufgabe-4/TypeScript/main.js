window.addEventListener("load", rdy);
function rdy(_event) {
    console.log("loaded");
    let fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", handlechange);
    }
}
function handlechange(_event) {
    let target = _event.target;
    switch (target.id) {
        case "scoop1":
        case "scoop2":
        case "scoop3":
        case "scoop4":
        case "scoop5":
            document.getElementById("price").innerHTML = target.value + " " + "€";
            break;
    }
}
//# sourceMappingURL=main.js.map