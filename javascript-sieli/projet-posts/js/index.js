// Récupère le conteneur où nous allons insérer la liste des posts
const container = document.getElementById("posts-container");

// Utilisation de la fonction `fetch` pour récupérer la liste des posts depuis l'API JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Transformer la réponse en JSON
  .then(posts => {
    // Créer une liste HTML pour afficher tous les posts
    let postsListHTML = '';

    // Pour chaque post dans les résultats récupérés, créer un élément de liste
    posts.forEach(post => {
      postsListHTML += `
        <li class="list-group-item">
          <!-- Lien vers le détail du post avec ID -->
          <a href="post.html?id=${post.id}" class="d-flex align-items-center">
            <!-- Titre du post -->
            ${post.title}
          </a>
          <!-- Contenu du post -->
          <p class="mb-0">${post.body.substring(0, 100)}...</p>
        </li>
      `;
    });

    // Insérer le contenu HTML dans le conteneur de la liste
    container.innerHTML = `
      <ul class="list-group">
        ${postsListHTML}
      </ul>
    `;
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des posts :", error);
  });
