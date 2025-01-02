// alert("Fichier chargé");
/* -----------------------------------------------------------------------------
|  ---------------- ✨ Incrémentation / Décrémentation ✨ ----------------------
------------------------------------------------------------------------------*/

// # Incrémentation

let nb1 = 1;
nb1 = nb1 + 1;
// Ecriture simplifié
// La même chose que nb1 = nb1 + 1;
nb1++;

nb1 = 10;
nb1 = nb1 + 2;
// Ecriture simplifié
nb1 += 2; // J'ajoute + 2 à nb1 => identique à 'nb1 = nb1 + 2;'
nb1 += 5; // J'ajoute + 5 à nb1 => identique à 'nb1 = nb1 + 5;'

//------------------------------------------------------------------------------

// # Décrémentation

let nb2 = nb2 - 1;
// Ecriture simplifié
nb2--;

nb2 = 100;
nb2 = 1000;
nb2 = 10080;
nb2 = nb2 - 2;
// Ecriture simplifié
nb2 -= 2;
nb2 -= 5;

//------------------------------------------------------------------------------

// # Subtilité

nb1 = 0;
nb1++;
console.log(nb1++); // Ici javascript affichera la valeur initiale "0" avant incrémentation
console.log(nb1);   // Ici javascript nous affichera la valeur après avoir incrémenté

//------------------------------------------------------------------------------
