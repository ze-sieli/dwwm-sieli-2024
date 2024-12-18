// alert("Fichier chargé");
/* -----------------------------------------------------------------------------
|  ---------------------- ✨ Les concaténation ✨ ------------------------------
------------------------------------------------------------------------------*/

let debutDePhrase = "Aujourd'hui ";
let dateDuJour = new Date();
let suiteDePhrase = ", sont présents : ";
let nbApprenants = 12;
let finDePhrase = " <strong>apprenants.</strong>";

/**
 * Nous souhaitons maintenant, grâce à la concaténation
 * afficher le tout en une phrase sur notre page !
 */

document.getElementById("resultat").innerHTML = debutDePhrase
                                                + dateDuJour.getDate()
                                                + "/"
                                                + (dateDuJour.getMonth() + 1)
                                                + "/"
                                                + dateDuJour.getFullYear()
                                                + suiteDePhrase
                                                + nbApprenants
                                                + finDePhrase
                                                ;

/**
 * Ici, notre variable dateDuJour nous donne accès aux fonctions
 * de l'objet Date.
 * Grâce au point '.', je peux utiliser ces fonctions.
 */
