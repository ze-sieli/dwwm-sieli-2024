// Récupère le conteneur où nous allons insérer les détails du personnage
const container = document.getElementById("character-container");

// Fonction pour obtenir l'ID du personnage depuis l'URL
function getCharacterIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

const characterId = getCharacterIdFromUrl();

// Si un ID est trouvé, récupérer et afficher le personnage
if (characterId) {
  // Utilisation de la fonction `fetch` pour récupérer les détails du personnage via l'API Rick and Morty
  fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(response => response.json())
    .then(character => {

      // Mise à jour du titre de la page avec le titre du post
      document.title = character.name; // Modifie le titre de la page avec le titre du post

      // Crée un nouvel élément div pour afficher les détails du personnage
      let characterDiv = document.createElement("div");

      // Ajoute une classe CSS "character" à cette div pour faciliter le style
      characterDiv.className = "character";

      // Assigne le contenu HTML à l'intérieur de `characterDiv`, en remplissant les informations du personnage
      characterDiv.innerHTML = `
          <div class="card mb-5">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-md-8">
                  <!-- Nom du personnage -->
                  <h2 class="border-bottom pb-2">${character.name}</h2>

                  <!-- Détails sur le personnage -->
                  <p class="card-text"><strong>Statut :</strong> ${character.status}</p>
                  <p><strong>Espèce :</strong> ${character.species}</p>
                  <p><strong>Genre :</strong> ${character.gender}</p>
                  <p><strong>Origine :</strong> ${character.origin.name}</p>

                  <!-- Liste des épisodes où le personnage apparaît -->
                  <h3 class="h4 border-bottom pb-2">Épisodes</h3>

                  <ul>
                    <!-- Crée un élément de liste pour chaque épisode -->
                    ${character.episode.map(episodeUrl => `
                        <li>
                            ${episodeUrl.split("/").pop()} <!-- Utilise l'ID de l'épisode pour l'afficher -->
                        </li>
                    `).join("")}
                  </ul>
                </div>
                <div class="col-12 col-md-4">
                  <!-- Image du personnage -->
                  <img src="${character.image}" class="card-img-top" alt="Image de ${character.name}">
                </div>
              </div>
              <a href="index.html" class="btn btn-dark w-100 mt-3">← Retour à la liste des personnages</a>
            </div>
          </div>
      `;

      // Ajoute la div contenant les détails du personnage au conteneur principal
      container.appendChild(characterDiv);
    })
    .catch(error => console.log("Erreur lors du chargement du personnage :", error));
} else {
  // Si aucun ID n'est présent dans l'URL, affiche un message d'erreur
  container.innerHTML = "<p>Aucun personnage sélectionné.</p>";
}
