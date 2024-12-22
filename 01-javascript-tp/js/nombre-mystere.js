// Génère un nombre mystère aléatoire entre 1 et 100
let nombreMystere = Math.floor(Math.random() * 100) + 1;

// Initialisation du compteur d'essais
let nombreEssais = 0;

// Définition de la limite maximale d'essais
let limiteEssais = 10;

// On suppose que le nombre n'a pas encore été deviné
let nombreDevine = false;

// Boucle principale du jeu, tant que le nombre n'a pas été deviné
while (nombreDevine == false) {
  // Demande à l'utilisateur de deviner le nombre
  let essai = parseInt(prompt("Devinez le nombre (entre 1 et 100) :"));

  // Vérification si l'entrée de l'utilisateur est un nombre valide
  if (isNaN(essai) || essai < 1 || essai > 100) {
    // Si l'entrée est invalide, on affiche un message d'erreur et on passe à l'itération suivante
    alert("Veuillez entrer un nombre valide entre 1 et 100.");
    continue; // On ignore l'essai invalide et on demande une nouvelle saisie
  }

  // Incrémentation du nombre d'essais
  nombreEssais++;

  // Vérification si l'utilisateur a atteint la limite d'essais
  if (nombreEssais == limiteEssais && nombreDevine == false) {
    // Si la limite est atteinte sans avoir deviné le nombre, on informe l'utilisateur
    alert("Perdu, vous avez atteint la limite d'essais.");
    break; // Sort de la boucle, terminant ainsi le jeu
  }

  // Si l'utilisateur devine correctement le nombre mystère
  else if (essai == nombreMystere) {
    alert(`Bravo, vous avez trouvé en ${nombreEssais} essais !`);
    nombreDevine = true; // Le nombre a été deviné, on met fin à la boucle
  }

  // Si l'utilisateur devine un nombre trop petit
  else if (essai < nombreMystere) {
    alert("C'est plus !"); // Indication que le nombre mystère est plus grand
  }

  // Si l'utilisateur devine un nombre trop grand
  else if (essai > nombreMystere) {
    alert("C'est moins !"); // Indication que le nombre mystère est plus petit
  }
}
