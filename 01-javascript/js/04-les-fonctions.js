/* -----------------------------------------------------------------------------
|  ------------------------- ✨ Les fonctions 😍 -------------------------------
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
