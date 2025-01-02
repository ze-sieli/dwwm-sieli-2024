
# Introduction

La donnée est considérée, en informatique, comme un des éléments les plus importants. En développement, le compilateur et le développeur ont besoin de déclarer, d’utiliser et de manipuler des données variables, ou non, tout au long du processus d’exécution du programme ou de l’application.

JavaScript est dynamique et non fortement typé.

Dynamique, car il n’est pas nécessaire de définir précisément le type de la variable utilisée. C’est la donnée attribuée qui définit le type de donnée, automatiquement. Par exemple, si une variable var01 contient "12", alors elle est une chaîne de caractères. Si elle contient 12, alors elle est un nombre.

Non fortement typé parce qu’une variable d’un certain type peut en changer, c’est-à-dire devenir une variable d’un autre type au cours de l’exécution du programme.

Cette facilité permise aux développeurs est un des points très largement critiqués de JavaScript. En effet, s’il permet par commodité de pouvoir modifier une valeur selon les besoins, il permet aussi une anarchie complète du code, le rendant de fait impossible à maintenir.

Non fortement typé ne signifie pas non typé du tout. JavaScript reconnaît les types de variables suivants :

- `String`, pour les chaînes de caractères

- `Symbol`, pour une donnée unique et inchangeable

- `number`, pour un chiffre ou nombre

- `boolean`, pour une variable ne pouvant prendre que deux valeurs

- `Object`, un type un peu particulier détaillé au chapitre JavaScript orienté objet

- `null`, pour une variable vide

- `undefined`, pour une variable dont le type n’est pas encore défini
