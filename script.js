const orders = [
    {text: "Un restaurant veut une enseigne lumineuse en verre résistant.", correctGlass: "trempé", correctPrinting: "sérigraphie", correctCutting: "droite"},
    {text: "Une bijouterie cherche une enseigne élégante et fine.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Une boutique de vêtements veut une enseigne avec un lettrage en relief.", correctGlass: "acrylique", correctPrinting: "vinyle", correctCutting: "personnalisée"},
    {text: "Un hôtel de luxe commande une enseigne élégante et résistante.", correctGlass: "feuilleté", correctPrinting: "sérigraphie", correctCutting: "arrondie"},
    {text: "Une pharmacie veut une enseigne bien visible et durable.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "droite"},
    {text: "Une entreprise high-tech veut un design moderne et épuré.", correctGlass: "acrylique", correctPrinting: "sablage", correctCutting: "personnalisée"},
    {text: "Un salon de coiffure recherche une enseigne avec effet givré.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un fast-food a besoin d'une enseigne très résistante à la chaleur.", correctGlass: "trempé", correctPrinting: "sérigraphie", correctCutting: "droite"},
    {text: "Une clinique vétérinaire veut une enseigne visible la nuit.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "arrondie"},
    {text: "Un opticien souhaite une enseigne avec une découpe spécifique.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Une station-service veut une enseigne résistante aux intempéries.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "droite"},
    {text: "Un musée recherche une enseigne discrète et élégante.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un bar branché désire une enseigne colorée avec des effets.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Une boulangerie veut une enseigne traditionnelle et chaleureuse.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un supermarché a besoin d'une enseigne lisible de loin.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "droite"},
    {text: "Un fleuriste souhaite une enseigne délicate avec effet givré.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un concessionnaire automobile veut une enseigne haut de gamme.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Un spa veut une enseigne douce et relaxante.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un architecte souhaite une enseigne moderne et minimaliste.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Un garagiste recherche une enseigne robuste et résistante.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "droite"},
    {text: "Une salle de sport veut une enseigne dynamique et percutante.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Un studio de design graphique souhaite une enseigne artistique.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Une mairie commande une enseigne officielle et classique.", correctGlass: "trempé", correctPrinting: "vinyle", correctCutting: "droite"},
    {text: "Un centre commercial a besoin d'une enseigne imposante et claire.", correctGlass: "trempé", correctPrinting: "sérigraphie", correctCutting: "droite"},
    {text: "Une pizzeria veut une enseigne chaleureuse et conviviale.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un casino souhaite une enseigne luxueuse et brillante.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Une bibliothèque recherche une enseigne discrète et raffinée.", correctGlass: "feuilleté", correctPrinting: "sablage", correctCutting: "arrondie"},
    {text: "Un théâtre veut une enseigne élégante et spectaculaire.", correctGlass: "acrylique", correctPrinting: "sérigraphie", correctCutting: "personnalisée"},
    {text: "Un magasin de jouets veut une enseigne colorée et amusante.", correctGlass: "acrylique", correctPrinting: "vinyle", correctCutting: "personnalisée"}
];

let currentOrder;

function newOrder() {
    currentOrder = orders[Math.floor(Math.random() * orders.length)];
    document.getElementById("clientRequest").innerText = currentOrder.text;
}

function validateChoice() {
    let glass = document.getElementById("glassType").value;
    let printing = document.getElementById("printing").value;
    let cutting = document.getElementById("cutting").value;

    if (glass === currentOrder.correctGlass && printing === currentOrder.correctPrinting && cutting === currentOrder.correctCutting) {
        document.getElementById("result").innerText = "Félicitations ! Le client est satisfait.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Mauvais choix, le client est déçu...";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(newOrder, 3000); // Charge une nouvelle commande après 3 secondes
}

window.onload = newOrder;