namespace aufgabe5 {
    export interface Eiskategorie {
        name: string;
        price: number;
        type: string;
    }

    export interface KeyArray {
        [kategorie: string]: Eiskategorie[];
    }

    export let categories: KeyArray = {
        "form": [
            { name: "Waffel", price: 0, type: "radio"},
            { name: "Becher", price: 0, type: "radio"}
        ],
        "eisSorten": [
            { name: "Vanille", price: 1, type: "number"},
            { name: "Schokolade", price: 1, type: "number"},
            { name: "Mango", price: 1, type: "number"},
            { name: "Zitrone", price: 1, type: "number"},
            { name: "Erdbeere", price: 1, type: "number"}
        ],
        "toppings": [
            { name: "Sahne", price: 0.5, type: "checkbox"},
            { name: "Streusel", price: 0.5, type: "checkbox"},
            { name: "Sauce", price: 0.5, type: "checkbox"}
        ]
    };
}