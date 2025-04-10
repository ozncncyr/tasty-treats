import { getPopularRecipes } from '../service/API';
import { OpenModal } from '../utils/modal-recipes';

// Tariflerin render edilmesi - Recipes rendering
export const popularRecipes = document.querySelector('.popular-recipes-list');
popularRecipes.addEventListener('click', showPopularRecipeModal);

// Popüler tariflerin render edilmesi - Popular recipes rendering
async function renderPopularRecipes() {
  try {
    const data = await getPopularRecipes();
    createPopularRecipesList(data);
  } catch (error) {
    console.error('Error while rendering popular recipes:', error);
  }
}

// Tariflerin oluşturma - Recipes creation
function createPopularRecipesList(data) {
  const markup = data
    .map(recipe => {
      return `<li class="popular-recipes-item data-id="${recipe._id}"">
      <img class="popular-recipes-image" src="${recipe.preview}" alt="${recipe.title}" />
      <div data-id="${recipe._id}">
      <p class="popular-recipes-item-title">${recipe.title}</p>
      <p class="popular-recipes-item-description">${recipe.description}</p>
      </div>
    </li>`;
    })
    .join('');

  popularRecipes.innerHTML = markup;
}

renderPopularRecipes();

// Tariflerin modal'a gönderilmesi - Recipes sending to modal
function showPopularRecipeModal(event) {
  const popularRecipeId = event.target.parentNode;
  OpenModal(popularRecipeId);
}
