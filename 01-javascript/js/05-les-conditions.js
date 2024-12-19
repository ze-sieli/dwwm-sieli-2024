/* -----------------------------------------------------------------------------
|  ------------------------- ✨ Les conditions ✨ -------------------------------
------------------------------------------------------------------------------*/

let majoriteFr = 18;

if (19 >= majoriteFr) {
    console.log( "Vous pouvez entrer dans l'espace...");
}


if (17 <= majoriteFr) {
    console.log("Mineur");

} else if (18 == majoriteFr) {
    console.log("Un peu juste");
} else {
    console.log("Majeur");
}

/* -----------------------------------------------------------------------------
    EXERCICE
    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue,
    sinon, je fais une redirection sur Google après lui avoir signalé le soucis.
------------------------------------------------------------------------------ */


function ageUtilisateur() {
    let age = prompt("Saisir age :");
    if (age >= 18) {
        console.log("Bienvenue, tu es majeur");
    } else {
        console.log("Accès refusé");
        document.location.href = "https://google.fr";
    }
}

ageUtilisateur();

/* -----------------------------------------------------------------------------
    EXERCICE
    J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
    Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
    En cas d'échec une "alert" m'informe du problème.
    Si tous se passe bien, un message de bienvenue m'accueil.
------------------------------------------------------------------------------ */

// // -- BASE DE DONNEES
const email = "sieli@formation-dev.fr";
const mdp = "sieli";

// -- 1. Demander à l'utilisateur son email / mdp
let emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
let mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.

// If imbriqué...
if ( email == emailPrompt ) {
    if(mdp == mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email == emailPrompt && mdp == mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

function connexion( emailUser, mdpUser ) {

    // -- Avec les fonctions
    // -- 1. Demander à l'utilisateur son email / mdp

    if ( email == emailUser && mdp == mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}
