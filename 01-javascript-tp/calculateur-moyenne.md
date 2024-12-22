# TP 1 : Calculateur de moyenne

## Objectif :

Créer une fonction qui calcule la moyenne d'un nombre illimité de notes saisies par l'utilisateur.

## Instructions :

1. Demander les notes à l'utilisateur :
    - Utiliser `prompt()` pour demander à l'utilisateur de saisir une note.
    - Utiliser une boucle while pour continuer à demander des notes jusqu'à ce que l'utilisateur saisisse un caractère non numérique (ex: "fin").

1. Stocker les notes :
    - Créer un tableau pour stocker les notes saisies.
    - Utiliser `parseFloat()` pour convertir les entrées de l'utilisateur (qui sont des chaînes de caractères) en nombres décimaux.

1. Créer la fonction `calculerMoyenne()` :
    - Prendre le tableau de notes en paramètre.
    - Calculer la somme des notes en utilisant une boucle for.
    - Diviser la somme par le nombre de notes pour obtenir la moyenne.
    - Retourner la moyenne calculée.

1. Afficher la moyenne :
    - Appeler la fonction `calculerMoyenne()` avec le tableau de notes.
    - Afficher la moyenne à l'utilisateur avec `alert()` ou en l'injectant dans un élément HTML.

## Tips :

- La fonction `isNaN()` est utilisée pour vérifier si la saisie est un nombre valide.
