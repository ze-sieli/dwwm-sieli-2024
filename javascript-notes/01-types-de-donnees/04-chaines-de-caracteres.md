# Chaînes de caractères

## 1\. Déclaration et initialisation

En JavaScript, l'utilisation de guillemets (`""`) ou d'apostrophes (`''`) pour initialiser une chaîne de caractères est autorisée.

```js
let jeuRadio = "<p>K. Poulsen a fait l'acquisition d'une Porsche</p>";
```

Très souvent, les guillemets sont utilisés si la chaîne de caractères comporte une apostrophe.

Le caractère `\` permet d'échapper le caractère qui le suit immédiatement.

```js
let aeomc = 'C\'est une bonne situation ça, scribe ?';
```

Il permet également d'introduire des éléments de formatage du texte comme `\n` pour passer à la ligne et `\t` pour insérer une tabulation.

## 2\. Concaténation Concaténation

L'opérateur `+`, utile pour additionner les nombres, permet de concaténer des chaînes de caractères.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <title>Formation DWWM</title>
</head>
<body>
    <div id="resultat" style="white-space: pre;"></div>
    <script>
            // Chaînes de caractères
            let jeuRadio = "<p>K. Poulsen a fait l'acquisition d'une Porsche</p>";
            // Concaténation
            let titre =
                "<p>Daenerys du typhon de la Maison Targaryen, première du nom, "
                + "reine de Meereen, "
                + "reine des Andals, de Rhoynar et des Premiers Hommes,"
                + "suzeraine des Sept Couronnes et Protectrice du Royaume, "
                + "khaleesi de la Grande Mer Herbeuse,"
                + "mère des Dragons<p>";
            document.getElementById('resultat').innerHTML = "\tDaenerys : " + titre;
    </script>
</body>
</html>

```

Bien entendu, les variables de type chaîne de caractères peuvent aussi être concaténées.

```js
// Concaténation de chaînes de caractères
let premier = "Jean-Pierre";
let deuxieme = "Jean";
let troisieme = "Pierre";
let quatrieme = "TiPich";
let cinquieme = "le grand Bob";
let concat = premier + ', ' + deuxieme + ', ' + troisieme + ', ' + quatrieme + ' et ' + cinquieme + ' vont au bois !!';
document.write("<p>" + concat + "</p>");
```

Si une variable est la concaténation d'un nombre et d'une chaîne de caractères, alors elle est de type chaîne de caractères.

Attention donc à la concaténation d'un nombre et d'une chaîne de caractères constituée uniquement de chiffres.

```js
let ageDeRaison = 7;
let gizeh = "3";
let authentificationDiabloIII = gizeh + ageDeRaison;

// authentificationDiabloIII vaut 37 et pas 10
```
