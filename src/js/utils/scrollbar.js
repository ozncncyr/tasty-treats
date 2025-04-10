import SmoothScrollbar from 'smooth-scrollbar';
import { fetchCategories } from '../service/API';
import {
  recipeContainer,
  searchImagesAndDisplay,
  setSearchQueryName,
} from '../renders/search';
import { searchOnCategory } from '../service/categorySearch';

// Kategorilerin oluşturulması - Categories creation
function createCategoryButton(category, onClick) {
  const button = document.createElement('button');
  button.textContent = category;
  button.classList.add('button-category');
  button.addEventListener('click', onClick);
  return button;
}

// Kategori oluşum bloğu - Category creation block
async function createCategoriesBlock() {
  const categoriesContainer = document.getElementById('categoriesContainer');
  const scrollContent = categoriesContainer.querySelector('.scroll-content');

  scrollContent.innerHTML = '';
  const categories = await fetchCategories();
  const categoryButtons = [];

  categories.forEach(category => {
    const button = createCategoryButton(category.name, () => {
      setSearchQueryName(category.name);
      recipeContainer.innerHTML = '';
      searchImagesAndDisplay(1, searchOnCategory);

      const prevBtns = document.querySelectorAll('.isUse');
      prevBtns.forEach(button => {
        button.classList.remove('isUse');
        return;
      });

      button.classList.add('isUse');
    });

    categoryButtons.push(button);
    scrollContent.appendChild(button);
  });

  const scrollbar = SmoothScrollbar.init(categoriesContainer, {
    alwaysShowTracks: true,
  });
}

// Kaydırma ekleme - Add scrollbar
const categoriesContainer = document.getElementById('categoriesContainer');
const scrollContent = document.createElement('div');
scrollContent.className = 'scroll-content';
categoriesContainer.appendChild(scrollContent);

const allCategoriesButton = document.getElementById('allCategoriesButton');
allCategoriesButton.addEventListener('click', onClickAllCategoriesButton);
export function onClickAllCategoriesButton({ target }) {
  setActiveClass(target);
  setSearchQueryName();
  recipeContainer.innerHTML = '';
  searchImagesAndDisplay(1, searchOnCategory);
  const categoryButtons = Array.from(
    document.querySelectorAll('.scroll-content button')
  );
  categoryButtons.forEach(button => {
    button.classList.remove('isUse');
  });
}

createCategoriesBlock();

// Aktif kategori butonunu ayarla - Set active category button
export function setActiveClass(btn = allCategoriesButton) {
  const prevBtns = document.querySelectorAll('.isUse');
  prevBtns.forEach(el => el.classList.remove('isUse'));
  btn.classList.add('isUse');
}

// Kaydırma ekleme - Add scrollbar
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('scrollButton');
  el.addEventListener('click', function () {
    scrollToTop(1000);
  });
});

// Yukarı git düğmesi - Scroll to top button
function scrollToTop(duration) {
  const scrollStep = -window.scrollY / (duration / 30);
  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Yukarı git düğmesinin görünürlüğü - Visibility of the scroll to top button
window.addEventListener('scroll', function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollToTopButton = document.getElementById('scrollButton');

  if (scrollPosition > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
