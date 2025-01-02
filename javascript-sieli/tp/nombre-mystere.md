# TP 2 : Devinez le nombre mystère

## Objectif :

Créer un jeu où l'utilisateur doit deviner un nombre aléatoire généré par le programme.

## Instructions :

1. Générer un nombre aléatoire :
    - Utiliser `Math.random()` et `Math.floor()` pour générer un nombre entier aléatoire entre 1 et 100.

2. Initialiser le nombre d'essais :
    - Créer une variable pour suivre le nombre d'essais de l'utilisateur, initialisée à 0.

3. Boucle de jeu :
    - Utiliser une boucle while qui continue tant que l'utilisateur n'a pas deviné le nombre.
    - Demander à l'utilisateur de deviner le nombre avec prompt().
    - Incrémenter le nombre d'essais.
    - Utiliser des conditions pour comparer le nombre deviné au nombre mystère :
        - Si le nombre deviné est trop bas, afficher un message à l'utilisateur.
        - Si le nombre deviné est trop haut, afficher un message à l'utilisateur.
        - Si le nombre deviné est correct, afficher un message de félicitations avec le nombre d'essais, puis terminer la boucle.

4. Limite d'essais :
    - Ajouter une condition pour limiter le nombre d'essais.
    - Si la limite est atteinte, afficher un message à l'utilisateur et terminer la boucle.

## Tips :

- Des conditions if comparent le nombre deviné au nombre mystère pour guider l'utilisateur.
