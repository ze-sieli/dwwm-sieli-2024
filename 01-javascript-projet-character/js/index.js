// Récupère le conteneur où nous allons insérer la liste des personnages
const container = document.getElementById("characters-container");

// Utilisation de la fonction `fetch` pour récupérer la liste des personnages depuis l'API Rick and Morty
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json()) // Transformer la réponse en JSON
  .then(data => {
    // Créer une liste HTML pour afficher tous les personnages
    let charactersListHTML = '';

    // Pour chaque personnage dans les résultats récupérés, créer un élément de liste
    data.results.forEach(character => {
      charactersListHTML += `
        <li class="list-group-item">
          <a href="character.html?id=${character.id}" class="d-flex align-items-center">
            <!-- Image du personnage -->
            <img src="${character.image}" alt="${character.name}" class="me-3" style="width: 50px; height: 50px;">
            <!-- Nom du personnage -->
            <span>${character.name}</span>
          </a>
        </li>
      `;
    });

    // Insérer le contenu HTML dans le conteneur de la liste
    container.innerHTML = `
      <ul class="list-group">
        ${charactersListHTML}
      </ul>
    `;
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des personnages :", error);
  });
