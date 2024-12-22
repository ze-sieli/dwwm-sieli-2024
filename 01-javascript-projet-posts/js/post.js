// Fonction pour obtenir l'ID du post depuis l'URL
function getPostIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

const postId = getPostIdFromUrl();

if (postId) {
  // Utilisation de `fetch` pour récupérer le post individuel via l'API JSONPlaceholder
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json()) // Transforme la réponse en JSON
    .then(post => {

      // Mise à jour du titre de la page avec le titre du post
      document.title = post.title; // Modifie le titre de la page avec le titre du post

      // Crée une div pour afficher le détail du post
      const postDetailHTML = `
        <div class="card mb-5">
          <div class="card-title">
            <!-- Titre du post -->
            <h1 class="border-bottom pb-2">${post.title}</h1>
          </div>

          <div class="card-body">
            <!-- Corps du post -->
            <p class="card-text">${post.body}</p>
            <!-- Lien vers la liste des posts -->
            <a href="index.html" class="btn btn-dark w-100">← Retour à la liste des posts</a>
          </div>
        </div>
      `;

      // Insérer le détail du post dans le conteneur
      document.getElementById('post-detail-container').innerHTML = postDetailHTML;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération du post :', error);
      document.getElementById('post-detail-container').innerHTML = 'Erreur lors de la récupération des détails du post.';
    });
} else {
  // Si aucun ID n'est présent dans l'URL
  document.getElementById('post-detail-container').innerHTML = 'Aucun post sélectionné.';
}
