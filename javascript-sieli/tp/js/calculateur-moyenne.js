// Initialisation du tableau pour stocker les notes saisies par l'utilisateur
let notes = [];

// Variable pour stocker la saisie de l'utilisateur
let saisie = prompt("Entrez une note (ou 'fin' pour terminer) :");

// Tant que l'utilisateur n'a pas saisi 'fin', on continue à lui demander des notes
while (saisie !== "fin") {
  // Conversion de la saisie en nombre à virgule flottante (float)
  let note = parseFloat(saisie);

  // Vérification si la saisie est un nombre valide
  if (!isNaN(note)) {
    // Si c'est un nombre valide, on ajoute cette note au tableau 'notes'
    notes.push(note);
  } else {
    // Si ce n'est pas un nombre valide, on affiche un message d'erreur
    alert("Veuillez entrer un nombre valide.");
  }

  // Demander une nouvelle saisie
  saisie = prompt("Entrez une note (ou 'fin' pour terminer) :");
}

// Fonction pour calculer la moyenne des notes
function calculerMoyenne(notes) {
    let somme = 0; // Variable pour stocker la somme de toutes les notes

    // Boucle pour additionner toutes les notes dans le tableau 'notes'
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i]; // Ajoute chaque note à la somme totale
    }

    // Retourne la moyenne en divisant la somme par le nombre total de notes
    return somme / notes.length;
}

// Si des notes ont été saisies, on calcule et affiche la moyenne
if (notes.length > 0) {
  let moyenne = calculerMoyenne(notes);
  // Affiche la moyenne des notes calculée
  alert("La moyenne des notes est : " + moyenne);
} else {
  // Si aucune note n'a été saisie, on affiche un message d'erreur
  alert("Aucune note saisie.");
}
