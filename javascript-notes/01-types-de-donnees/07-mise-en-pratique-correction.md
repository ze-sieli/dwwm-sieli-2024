# Mise en pratique

## Correction

En JavaScript, le premier élément d’un tableau est à l’indice 0.

```js
// Afficher le premier élément d'un tableau 
document.write("Le premier élément du tableau est : " + tableau[0] +  
"<br />");
```

JavaScript permet l’addition de deux nombres grâce à l’opérateur `+`. Le troisième élément est à l’indice 2. Le cinquième élément à l’indice 4.

```js
// Additionner les éléments 3 et 5 et afficher le résultat 
let resultat = tableau[2] + tableau[4] 
document.write("L'addition des éléments 3 et 5 donne : " + resultat +  
"<br />");
```

L’initialisation d’un tableau se fait avec des crochets. Les éléments qui composent ce tableau sont séparés par des virgules. Lorsqu’il s’agit de caractères ou de chaînes de caractères, ils sont, en plus, entourés de guillemets.

La méthode `indexOf` permet de retourner l’indice de l’élément recherché.

```js
// Initialisation d'un nouveau tableau 
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
// Récupération du huitième élement 
let huitiemeElement = tableau[7]; 
// Recherche de l'élément récupéré dans le tableau alphabet 
let index = alphabet.indexOf(huitiemeElement); 
// Affichage 
document.write("L'indice de l'élément " + huitiemeElement +  
" dans le tableau alphabet est le " + index);
```

La correction dans une version plus condensée :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Formation DWWM</title>
  </head>
  <body>
    <script>
      let tableau = [
        'a', 'b', 6, 'd', 3, 'b', 99, 'e', 6, 'e', 'c', 15, 'f',8, 'b', 6, 'f',
        5, 'b', 338576, 'f', 0o57, 'e'];
      // 1) Afficher le premier élément d'un tableau
      document.write(
        'Le premier élément du tableau est : ' + tableau[0] + '<br />'
      );
      // 2) Additionner les éléments 3 et 5 et afficher le résultat
      document.write(
        "L'addition des éléments 3 et 5 donne : " +
          (tableau[2] + tableau[4]) +
          '<br />'
      );
      // 3) Initialisation d'un nouveau tableau et recherche dans son contenu
      let alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
      document.write("L'indice de l'élément " + tableau[7]
        + ' dans le tableau alphabet est le '
        + alphabet.indexOf(tableau[7]));
    </script>
  </body>
</html>
```
