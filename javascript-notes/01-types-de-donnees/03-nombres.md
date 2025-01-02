# Nombres

## 1\. Types de nombres

Ils peuvent être définis en base 2 (binaire), 8 (octale), 10 (décimale) ou 16 (hexadécimale).

```js
let samael;
samael = 0b0000001010011010;   // précédé par 0b : binaire
samael = 01232;                // précédé par 0 : octale
samael = 666;                  // décimale
samael = 0x29a;                // précédé par 0x : hexadécimale
```

## 2\. Opérations élémentaires

Un nombre est un type de données primitif représentant une donnée numérique.

Toutes les opérations mathématiques connues peuvent être utilisées entre deux nombres, entre une variable et un nombre, mais aussi entre deux variables.  Opérations mathématiques

```js
let calcul = 1;                   // calcul vaut 1
calcul = 1 + 3;                   // calcul vaut 4
calcul = 4 - 1                    // calcul vaut 3
calcul = calcul * 100;            // calcul vaut 300 (3*100)
let diviseur = 10;                // diviseur vaut 10
calcul = calcul / diviseur;       // calcul vaut 30 (300/10)
```

En plus de ces opérations, l’opérateur `%` permet de récupérer le reste de la division euclidienne de deux nombres.

Le résultat de 22 divisé par 5 vaut 5,5. Cependant, la division de deux nombres entiers renvoie un nombre entier. Donc, 22 divisé par 5 donne 4 et il reste 2.

Donc : 22 % 5 = 2.

## 3\. Nombres à virgule

Les nombres à virgule, appelés nombres flottants, peuvent aussi être représentés en JavaScript. Tout comme les entiers naturels et relatifs, ce sont des nombres sur 64 bits à précision double.

Sans rentrer dans les détails, cela signifie qu’il est possible d’avoir une perte de précision de certaines variables lors d’opérations mathématiques nécessitant une très grande précision avant et après la virgule.

> C’est ce type d’imprécision qui a coûté la vie à 28 militaires américains en Arabie saoudite en février 1991. L’antimissile n’ayant pas pu suivre la progression d’un projectile lancé par l’Irak.

```js
let pi = 3.14;
```

## 4\. Syntaxe simplifiée

### a. Incrémentation et décrémentation Incrémentation Décrémentation

Deux opérations, l’incrémentation et la décrémentation, ont été définies afin de simplifier l’écriture. Ainsi, les lignes

```js
calcul = calcul + 1
calcul = calcul - 1;
```

peuvent respectivement s’écrire :

```js
calcul++;
calcul--;
```

### b. Opérations mathématiques courantes

La plupart des langages de programmation ont mis en place une façon plus élégante de faire des opérations mathématiques fréquentes.

Ainsi, pour augmenter de 2 euros le prix d’un article, on peut écrire :

```js
let prix = 10;
prix = prix + 2;
```

ou bien :

```js
let prix = 10;
prix += 2;
```

Les deux expressions produisent exactement le même résultat, à savoir passer le prix de 10 à 12 euros.

De la même façon, les syntaxes suivantes peuvent être utilisées pour diminuer, multiplier ou diviser le prix.

```js
let prix = 20;                          // prix vaut 20
prix -= 10;                             // prix vaut 10 (20 - 10)
prix *= 2;                              // prix vaut 20 (10 * 2)
prix /= 2;                              // prix vaut 10 (20 / 2)
```
