// alert("Fichier chargé");
/* -----------------------------------------------------------------------------
|  -------------------------- ✨ Les tableaux ✨ -------------------------------
------------------------------------------------------------------------------*/

// -- Déclarer un tableau
let monTableau = [];
console.log(monTableau);
console.log( typeof monTableau);

let monTableauV2 = new Array(); // Autre notation, mais reste identique.

monTableau[0] = "Jonathan";
monTableau[1] = "Wandy";
monTableau[2] = "Emilien";
monTableau[3] = "James";

console.clear();
console.log(monTableau);

console.log(monTableau[2]);
console.log(monTableau[3]);

monTableauV2 = [
    "Yannick",
    "Julien",
    "Célia L.",
    "Lucas",
];

console.log(monTableauV2);

//------------------------------------------------------------------------------
// Création d'un objet en javascript
//------------------------------------------------------------------------------

let coordonnees = {
    prenom  : "Scottie",
    nom     : "Pippen",
    age     : 56,
    tel     : "07 09 56 77 82"
};

console.clear();
console.log(coordonnees);

console.log("Première méthode : " + coordonnees["prenom"]);
console.log("Seconde méthode : " + coordonnees.prenom); // Ecriture à privilégier

let annuaireDesApprenants = [
    ["Farhat", "NomDeFarhat", 12],
    ["Jocelin", "NomDeJocelin", 12],
    ["Younes", "NomDeYounes", 12],
];

console.log(annuaireDesApprenants[0][0]);
console.log(annuaireDesApprenants[0][1]); // Pas très pratique...

//------------------------------------------------------------------------------

let annuaireDesApprenantsV2 = [
  {
    prenom  : "Scottie",
    nom     : "Pippen",
  },
  {
    prenom  : "Lucas",
    nom     : "Del Chilly",
  },
  {
    prenom  : "Mickael",
    nom     : "Jordan",
  }
];

console.clear();
console.log(annuaireDesApprenantsV2);

console.log(annuaireDesApprenantsV2[1].nom);
console.log(annuaireDesApprenantsV2[2].prenom);
console.log(annuaireDesApprenantsV2[0].nom);
console.log(annuaireDesApprenantsV2);

//------------------------------------------------------------------------------

let contacts = [
  {
    prenom  : "Scottie",
    nom     : "Pippen",
    coordonnees: {
      adresse: {
        rue: "12 rue du docteur Goujon",
        ville: "Paris",
        cp: 75012,
        departement: "Paris"
      }
    },
    email: "scottie@pippen.fr",
    tel: {
      fixe: "01 45 46 47 48",
      pro: "06 75 96 47 48",
    }
  },
  {
    prenom  : "Franklin",
    nom     : "Saint",
    coordonnees: {
      adresse: {
        rue: "5 rue Paul Gaugin",
        ville: "Corbeil",
        cp: 91000,
        departement: "Essonne"
      }
    },
    email: "franklin@saint.com",
    tel: {
      fixe: "03 65 98 47 48",
      pro: "02 85 46 47 48",
    }
  },
];
console.log(contacts[0].coordonnees.adresse.cp);
console.log(contacts[1].email);

/**
 * Cette structure de données s'appelle le format JSON !
 * C'est le format le plus utilisé pour échanger des données.
 * Il est facile à reconnaitre, ce sont des objets dans un tableau
 */

/* -----------------------------------------------------------------------------
|  --------------------------- 🚧 Exercices 🚧 ---------------------------------
------------------------------------------------------------------------------*/
/**
 *      ~ ~ CONSIGNE ~ ~
 *      Réaliser une structure JSON
 *      permettant de stocker des
 *      recettes de cuisine.
 */

let recettes = [
    {
        nom: "Tiramisu",
        categorie: "Desserts",
        sousCategorie: "Gateaux",
        difficulte: "Facile",
        cout: "Abordable",
        nbPersonnes: 8,
        specialite: "Italien",
        imgRecette: "https://ffcuisine.fr/wp-content/uploads/2024/06/1717801337_recette-facile-de-tiramisu-sans-mascarpone-decouvrez-comment-le-reussir-640x362.jpg",
        cuisson: {
            preparation: 30,
            duree: "",
            temperature: "",
            repos: 120,
            unite: "minutes",
        },
        ingredients: [
            { nom: "Sucre", quantite: 80, unite: "g" },
            { nom: "Mascarpone", quantite: 250, unite: "g" },
            { nom: "Café Expresso", quantite: 15, unite: "cl" }
        ],
        ustensiles: [
            "1 Plat Rectangulaire",
            "1 Spatule",
            "1 Saladier"
        ],
        instructions: [
            {
                description: "Séparer les blancs des jaunes...",
                photoUrl: "https://recettes.fr/monetape.jpg"
            },
            {
                description: "Mélanger les jaunes avec le sucre roux...",
                photoUrl: "https://recettes.fr/monetape.jpg"
            },
            {
                description: "Ajouter le mascarpone au Fouet",
                photoUrl: "https://recettes.fr/monetape.jpg"
            }
        ]
    },
    {
        nom: "Blaf",
        categorie: "Plats",
        sousCategorie: "Poissons",
        difficulte: "Moyen",
        cout: "Abordable",
        nbPersonnes: 4,
        specialite: "Antillaise",
        imgRecette: "https://www.tatiemaryse.com/wp-content/uploads/2015/01/blaff-de-poisson.jpg",
        cuisson: {
            preparation: 45,
            duree: 30,
            temperature: "",
            repos: "",
            total: 75,
            unite: "minutes"
        },
        ingredients: [
            { nom: "Poisson", quantite: 4, unite: "" },
            { nom: "Figue", quantite: 12, unite: "" }
        ],
        ustensiles: [
            "1 Canarie",
            "1 Spatule",
            "1 Saladier"
        ],
        instructions: []
    }
];

console.clear();
console.log(recettes[0].instructions);

/***
 * NOTA BENE : un objet respecte toujours le format
 * {
 *      propriete: valeur
 * }
 * Ou, la valeur peut-être de plusieurs types :
 *  - unBoolean  => true/false
 *  - unNombre   => 18
 *  - unString   => "Ma chaine de caractères"
 *  - unTableau  => ["Pomme","Banane","Kiwi","Cerise"]
 *  - unObjet    => {propriete: valeur}
 */

console.clear();

//------------------------------------------------------------------------------

let couleurs = ["Rouge", "Jaune", "Vert"];

// Ajouter un élément à la fin de mon tableau
couleurs.push("Bleu");
console.clear();
console.log(couleurs);

//------------------------------------------------------------------------------

// Ajouter un élément au début de mon tableau
couleurs.unshift("Orange")
console.log(couleurs);

//------------------------------------------------------------------------------

// Supprimer le dernier élément
let couleursV2 = ["Rouge", "Jaune", "Vert"];

couleursV2.pop();
console.clear();
console.log(couleursV2);

//------------------------------------------------------------------------------

//=> ["Rouge", "Jaune", "Vert"]
// Supprimer le premier élément

let couleursV3 = ["Rouge", "Jaune", "Vert"];

couleursV3.shift();
console.clear();
console.log(couleursV3);

//------------------------------------------------------------------------------
