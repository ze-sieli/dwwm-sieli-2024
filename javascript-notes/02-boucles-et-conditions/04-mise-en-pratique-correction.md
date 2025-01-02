# Mise en pratique

## Correction

Pour les nombres de 0 à 200, le code repose sur une boucle dont les bornes sont connues. Elle commence à 0 et finit à 200 inclus.

```js
document.writeln("<h4>Les nombres de 0 à 200</h4>");
for (let i = 0; i <= 200; i++) {
  document.writeln(i);
}
```

Pour la suite de Fibonacci, chaque élément est le résultat de la somme des deux précédents éléments. Les deux premiers éléments seront 1 et 2, et le troisième sera donc 3 (1+2).

C’est une nouvelle fois une boucle qui s’arrête dès que l’élément à afficher est supérieur à 66. Pour chaque élément, elle affiche la somme des deux précédents éléments et décale ensuite chaque élément d’un cran. L’élément qui précédait immédiatement devient précédent du précédent et la somme devient l’élément précédent.

Par exemple, si les deux éléments précédents sont 13 et 21, la boucle affiche 34 (13+21), puis définit les nouveaux éléments précédents comme étant 21 et 34.

```js
document.writeln("<h4>La suite de Fibonacci de 1 à 999</h4>");
let precedentDuPrecedent = 0;
let precedent = 1;
let somme = 0;
while (precedentDuPrecedent + precedent < 999) {
  somme = precedentDuPrecedent + precedent;
  precedentDuPrecedent = precedent;
  precedent = somme;
  document.writeln(somme);
}
```

Pour les nombres premiers, il faut, pour chaque nombre, tester l’ensemble des nombres qui lui sont inférieurs et voir si le résultat de la division euclidienne est égal à 0. Si un seul des nombres apporte ce résultat, alors le nombre de départ n’est pas un nombre premier.

Prenons 8. Est-il divisible par 7 ? Non. Est-il divisible par 6 ? Non. Est-il divisible par 5 ? Non. Est-il divisible par 4 ? Oui. Ce n’est donc pas un nombre premier.

```js
document.writeln("<h4>Les nombres premiers de 2 à 99</h4>");
for (let i = 2; i <= 99; i++) {
  let divisible = false;
  for (j = 2; j < i; j++) {
    // Pour tous les nombres inférieurs à i :
    if (i % j == 0)
      divisible = true;
  }
  // Si aucun nombre ne divise i alors c'est un nombre premier.
  if (!divisible)
    document.writeln(i);
}
```

Une solution plus élégante et moins coûteuse est possible en utilisant le crible d’Ératosthène : [https://fr.wikipedia.org/wiki/Crible_d%27Ératosthène](https://fr.wikipedia.org/wiki/Crible_d%27Ératosthène).

Une correction condensée :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Formation DWWM</title>
  </head>
  <body>
    <script>
      document.writeln('<h4>Les nombres de 0 à 200</h4>');
      // En commencant par zéro et jusqu'a ce qu'on soit arrivé à 200 avec un pas de 1 :
      for (let i = 0; i <= 200; i++) {
        // On écrit le numéro courant
        document.writeln(i);
      }
      document.writeln('<h4>La suite de Fibonacci de 1 à 999 </h4>');
      let precedentDuPrecedent = 0;
      let precedent = 1;
      let somme = 0;
      while (precedentDuPrecedent + precedent < 999) {
        // On additione le précédent et celui d'avant
        somme = precedentDuPrecedent + precedent;
        // Le précédent devient le précédent du précédent
        precedentDuPrecedent = precedent;
        // La somme devient le précédent pour la prochaine itération
        precedent = somme;
        document.writeln(somme);
      }
      document.writeln('<h4>Les nombres premiers de 2 à 99</h4>');
      for (let i = 2; i <= 99; i++) {
        let divisible = false;
        for (j = 2; j < i; j++) {
          // Pour tous les nombres inférieurs à i :
          if (i % j == 0) divisible = true;
        }
        // Si aucun nombre ne divise i alors c'est un nombre premier.
        if (!divisible) document.writeln(i);
      }
    </script>
  </body>
</html>
```
