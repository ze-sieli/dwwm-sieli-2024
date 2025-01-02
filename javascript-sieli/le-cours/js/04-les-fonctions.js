/* -----------------------------------------------------------------------------
|  ------------------------- 😍 Les fonctions 😍 -------------------------------
------------------------------------------------------------------------------*/

function bonjour() {
    // -- instruction js --
    // -- instruction js --
    alert("Bonjour");
    // -- instruction js --
    // -- instruction js --
}

/**
 * Je déclenche ma fonction
 */

// bonjour();

//------------------------------------------------------------------------------

function calcul(a, b) {
    return a + b
}

// let resultatCalcul = calcul(10, 20);
// console.log(resultatCalcul);

//------------------------------------------------------------------------------

function ditBonjour(prenom, nom) {
    console.log("Bonjour ! " + prenom + " " + nom);
    // document.getElementById("resultat").innerHTML += "Bonjour ! " + prenom + " " + nom + "<br>"
    let message = document.createElement('p');
    message.innerHTML = "Bonjour ! " + prenom + " " + nom;
    document.getElementById("resultat").appendChild(message);
}

// ditBonjour("Boukari", "D.");
// ditBonjour("Célia", "S.");
// ditBonjour("Farhat", "K.");
// ditBonjour("Hector", "Dupond");
// ditBonjour("Jean", "Aymar");

//------------------------------------------------------------------------------

/**
 *      Exercice
 *      Créez une fonction permettant d'effectuer une multiplication
 *      de deux nombres
 */
console.clear();

function multiplication(a, b){
    return a * b;
}

// alert(multiplication(12, 4));
// console.log(multiplication(10, 10));

//------------------------------------------------------------------------------

function ditCiao(prenom, nom) {
    console.log("Ciao " + prenom + " " + nom);
}

console.clear();
// ditCiao("Louis", "");

//------------------------------------------------------------------------------

/**
 *
 *      Exercice :
 *      Créez une fonction permettant d'effectuer le calcul de la TVA
 *      d'un montant HT.
 *      Sachant que le taux de la TVA varier : 5.5, 8.5, 10, 20.
 *      Retourner le montant TTC.
 */

function calculTva( montantHt, tauxTva = 8.5 ) {
    return montantHt + ( montantHt * ( tauxTva / 100 ) );
}

let montantTtc1 = calculTva(10);
let montantTtc2 = calculTva(10, 5.5);
let montantTtc3 = calculTva(10, 20);

console.log( montantTtc1 );
console.log( montantTtc2 );
console.log( montantTtc3 );

/* ------- V2 ------- */

function calculTvaV2( montantHt, tauxTva = 8.5 ) {
    let montantTtc = document.createElement('p');
    montantTtc.innerHTML = montantHt
            + "€ HT (Tva "
            + tauxTva
            + ") = "
            + montantHt + ( montantHt * ( tauxTva / 100 ) )
            + "€ TTC";
    document.getElementById("resultat").appendChild(montantTtc);
}

calculTvaV2(10);
calculTvaV2(10, 5.5);
calculTvaV2(10, 20);


//------------------------------------------------------------------------------

/**
 *      Exercice
 *      Créer une fonction permettant de convertir des devises.
 *      La conversion d'un montant en Euro vers le Dollar
 */


function convertirEnDollar(euro, tauxChange = 1.0417) {
    let dollar = euro * tauxChange;
    return dollar;
}
console.log(convertirEnDollar(10));














/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] !
-- */




// -- 1. Création d'une fonction
function presentation() {
    // -- 2. Demande à l'utilisateur son prénom via un prompt
    let prenom = prompt("Quel est votre prénom ?", "<Votre prénom>");
    console.log( prenom );

    // -- 3. Je lui demande son age
    let age = parseInt(
        prompt("Bonjour " + prenom + ", Quel age as-tu ?", "-- Votre age --")
    );
    console.log( age );
    console.log( typeof age );

    // -- 4. Calculer l'année de naissance
        let objetDate = new Date();
        let anneeActuelle = objetDate.getFullYear();
        let dateDeNaissance = anneeActuelle - age;
        alert("Tu es donc né en " + dateDeNaissance);

    // -- 5. Afficher le récapitulatif

    // Créez un nouvel élément <p>
    let message = document.createElement('p');
    // Créez le texte du message
    message.innerHTML = "Bonjour "
            + prenom
            + " tu as "
            + age
            + " !";
    // Ajoutez l'élément <p> à l'élément "resultat"
    document.getElementById("resultat").appendChild(message);
}

presentation();











//------------------------------------------------------------------------------
//  Les fonctions anonymes
//------------------------------------------------------------------------------

/*
    Les fonctions anonymes sont des fonctions sans nom.
    Elles sont souvent utilisées lorsqu'une fonction est requise
    de manière temporaire ou pour des opérations simples.
*/

let additioner = function(a, b) {
    return a * b;
};

console.clear();
console.log(additioner(100, 1));









//------------------------------------------------------------------------------
//  Les fonctions fléchées (arrow functions)
//------------------------------------------------------------------------------

let multiplier = (a, b) => a * b;
console.log(multiplier(2, 5));




// Si la fonction a un seul paramètre, on peut se passer des parenthèses

let doubler = x => x * 2;
