# Mini projet - Affichez une liste de posts avec liens !

## Objectif :

Mettre en pratique fetch, la manipulation du DOM et les liens entre pages web.

## Scénario :

Vous allez créer une mini-application qui affiche une liste de posts (titre uniquement) provenant d'une API. Chaque titre sera cliquable et mènera vers une page dédiée affichant le contenu complet du post.

## Ressources :

- API : Nous utiliserons l'API JSON Placeholder : https://jsonplaceholder.typicode.com/posts
- Fichiers : Vous aurez besoin de deux fichiers HTML (index.html, post.html) et deux fichiers javascript (index.js, post.js).

## Étapes :

1. Création du squelette HTML (index.html) :

    - Intégrez un titre "Liste de Posts".
    - Créez une liste non ordonnée (`<ul>`) ".list-group". C'est ici que les titres des posts seront affichés.
    - N'oubliez pas d'inclure le fichier index.js avant la fermeture de la balise `</body>`.


1. Récupération et affichage des titres (index.js) :

    - Utilisez fetch pour récupérer les données de l'API JSON Placeholder.
    - Parcourez les données reçues (tableau de posts). Pour chaque post :
        - Créez un élément de liste (`<li>`).
        - Créez un lien (`<a>`) et définissez son texte avec le titre du post (post.title).


1. Création de la page de détail du post (post.html) :

    - Intégrez un titre (`<h1>`).
    - Ajoutez un paragraphe (`<p>`) pour afficher le contenu du post.


1. Récupération et affichage du détail (post.js) :
    - Intégrez un script qui :
        - Récupère l'ID du post depuis les paramètres de l'URL (indice : URLSearchParams).
        - Fait une requête fetch à l'API en utilisant l'ID récupéré pour obtenir les informations détaillées du post.
        - Affiche le titre et le contenu du post dans les éléments HTML appropriés.


## Conseils :

- Utilisez `console.log()` pour inspecter les données reçues de l'API et les éléments du DOM.
- N'hésitez pas à consulter la documentation de fetch, URLSearchParams et des méthodes de manipulation du DOM.
- Testez votre code à chaque étape pour repérer et corriger les erreurs plus facilement.

## Bonus :

- Gérez les erreurs potentielles lors de l'utilisation de fetch.
- Ajoutez du style CSS pour améliorer l'apparence de votre mini-application.

## Tips :

### Faire un lien vers le post détaillé

```js
<a href="post.html?id=${post.id}">${post.title}</a>
```

### Fonction pour obtenir l'ID du post depuis l'URL

```js
function getPostIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

const postId = getPostIdFromUrl();

if (postId) {
  // Utilisation de `fetch` pour récupérer le post individuel via l'API JSONPlaceholder
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  /*
  RESTE DU CODE
  */
} else {
  // Si aucun ID n'est présent dans l'URL
  document.getElementById('post-detail-container').innerHTML = 'Aucun post sélectionné.';
}
```
