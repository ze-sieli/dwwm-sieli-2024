// alert("Fichier chargé");
/* -----------------------------------------------------------------------------
|  ------------------------ ✨ Les Variables ✨ --------------------------------
------------------------------------------------------------------------------*/

// Deux slash pour faire un commentaire uniligne

/*
    Ici je peux faire
    un commentaire sur plusieurs
    ligne
 */

// -- 1 : Déclarer une variable en JS
let prenom;

// -- 2 : Affecter une valeur à la variable -> prenom
prenom = "Boukari";

// -- 3 : Afficher la valeur de la variable dans la console
// console.log("La valeur de la variable prenom vaut : " + prenom);

/* -----------------------------------------------------------------------------
|  ------------------- ✨ Les Types de variables ✨ ----------------------------
------------------------------------------------------------------------------*/

// -- typeof me permet de connaitre le type de la valeur de ma variable
console.log( typeof prenom);

//------------------------------------------------------------------------------

// -- Variable de type "Number"
let age = 65;
console.log(age);
console.log( typeof age);

//------------------------------------------------------------------------------

// -- Variable de type "Float"
let uneDecimale = -2.67546;
console.log("uneDecimale vaut : " + uneDecimale);
console.log( typeof uneDecimale);

//------------------------------------------------------------------------------

let estBooleen = false;
console.log("estBooleen vaut : " + estBooleen);
console.log( typeof estBooleen);

//------------------------------------------------------------------------------

/*
    La déclaration "const" me permet de créer une constante
    Celle-ci ne pourra pas être redéfinie par la suite.
 */

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";
const PI = 3.14

// Je ne peux pas faire ceci :
// USER = "boukari";
// Uncaught TypeError: invalid assignment to const 'USER'

//------------------------------------------------------------------------------

let unNombre = "14";
console.log(unNombre);
console.log(typeof unNombre);

//------------------------------------------------------------------------------

// -- Pour convertir une chaine de caractère comportant
// des chiffres en un nombre entier (string)
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//------------------------------------------------------------------------------

// -- Pour convertir en nombre à virgule (float)
unNombre = "22.676767";
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//------------------------------------------------------------------------------

console.clear();

unNombre = 10;
let uneChaine = unNombre.toString();
console.log(uneChaine);
console.log(typeof uneChaine);

/*
    ===========================
    | La portée des variables |
    ===========================

    Les variables déclarées à la racine de notre fichier JS
    sont appelées : variables GLOBALES

    Elles sont disponibles dans l'ensemble de notre document, y compris
    dans les fonctions

    ========================================================================

    Les variables déclarées à l'intérieur d'une fonction sont appelées :
    variables LOCALES

    Elles sont disponibles UNIQUEMENT dans le scope de la fonction
 */
