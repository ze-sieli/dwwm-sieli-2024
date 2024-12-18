// Récupère le conteneur où nous allons insérer les recettes
const container = document.getElementById("recettes-container");

// Utilisation de la fonction `fetch` pour récupérer/charger le fichier JSON contenant les recettes
fetch('js/data.json')

  // Transforme la réponse en JSON pour l'utiliser comme un objet JavaScript.
  .then(response => response.json())

  // Utilise les données JSON (les recettes) dans cette fonction.
  .then(recettes => {

    // Pour chaque recette dans le fichier JSON, nous allons créer un élément HTML
    recettes.forEach(recette => {

      // Crée un nouvel élément div pour chaque recette
      let recetteDiv = document.createElement("div");

      // Calcule le temps total en additionnant les temps de préparation, repos, et durée (si définis)
      let tempsTotal = (recette.cuisson.preparation || 0) + (recette.cuisson.repos || 0) + (recette.cuisson.duree || 0);

      // Ajoute une classe CSS "recette" à cette div pour faciliter le style
      recetteDiv.className = "recette";

      // Assigne le contenu HTML à l'intérieur de `recetteDiv`, en remplissant les informations de la recette
      recetteDiv.innerHTML = `
          <div class="card mb-5">
              <!-- Image de la recette -->
              <img src="${recette.imgRecette}" class="card-img-top" alt="illustration ${recette.nom}">

              <div class="card-body">
                  <!-- Nom de la recette -->
                  <h2 class="border-bottom pb-2">${recette.nom}</h2>

                  <!-- Catégorie et sous-catégorie -->
                  <p class="card-text"><strong>Catégorie :</strong> ${recette.categorie} (${recette.sousCategorie})</p>

                  <!-- Détails sur la difficulté, le coût, etc. -->
                  <p><strong>Difficulté :</strong> ${recette.difficulte}</p>
                  <p><strong>Coût :</strong> ${recette.cout}</p>
                  <p><strong>Pour :</strong> ${recette.nbPersonnes} personnes</p>
                  <p><strong>Spécialité :</strong> ${recette.specialite}</p>

                  <!-- Affichage conditionnel des temps de préparation, repos, et durée -->
                  ${recette.cuisson.preparation ? `<p><strong>Temps de préparation :</strong> ${recette.cuisson.preparation} ${recette.cuisson.unite}</p>` : ''}
                  ${recette.cuisson.repos ? `<p><strong>Temps de repos :</strong> ${recette.cuisson.repos} ${recette.cuisson.unite}</p>` : ''}
                  ${recette.cuisson.duree ? `<p><strong>Durée :</strong> ${recette.cuisson.duree} ${recette.cuisson.unite}</p>` : ''}

                  <!-- Temps total calculé précédemment -->
                  <p><strong>Temps total :</strong> ${tempsTotal} ${recette.cuisson.unite}</p>

                  <!-- Liste des ingrédients -->
                  <h3 class="h4 border-bottom pb-2">Ingrédients</h3>
                  <ul>
                      <!-- Crée un élément de liste pour chaque ingrédient -->
                      ${recette.ingredients.map(ing => `<li>${ing.nom} (${ing.quantite} ${ing.unite})</li>`).join("")}
                  </ul>

                  <!-- Liste des ustensiles -->
                  <h3 class="h4 border-bottom pb-2">Ustensiles</h3>
                  <ul>
                      <!-- Crée un élément de liste pour chaque ustensile -->
                      ${recette.ustensiles.map(ust => `<li>${ust}</li>`).join("")}
                  </ul>

                  <!-- Instructions de préparation -->
                  <h3 class="h4 border-bottom pb-2">Instructions</h3>
                  <ol>
                      <!-- Crée un élément de liste pour chaque instruction -->
                      ${recette.instructions.map(inst => `
                          <li>
                              ${inst.description}
                              ${inst.photoUrl ? `<img src="${inst.photoUrl}" alt="Étape">` : ""}
                          </li>
                      `).join("")}
                  </ol>

                  <a href="#" class="btn btn-dark w-100">Voir la recette</a>
              </div>
          </div>
      `;

      // Ajoute la div contenant la recette au conteneur principal
      container.appendChild(recetteDiv);
    });
  })

  // En cas d'erreur lors de la récupération du fichier JSON
  .catch(error => console.log("Erreur lors du chargement du fichier JSON :", error));
