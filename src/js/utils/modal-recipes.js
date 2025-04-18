import { findRecipes } from '../service/API';
import { measureRating } from '../renders/renders';
import { ratingScale } from '../renders/renders';
import SmoothScrollbar from 'smooth-scrollbar';
import Notiflix from 'notiflix';
import { patchRating } from '../service/API';

// DOM öğelerinin tanımlanması - DOM elements declaration
const refs = {
  closeModalBtn: document.querySelector('.close-modal'),
  backdropModal: document.querySelector('.backdrop-recipes'),
  mainModalRecipes: document.querySelector('.modal-recipes'),
  modalRecipes: document.querySelector('.modal-recipes-js'),
  backdropModal: document.querySelector('.backdrop-recipes'),
  saveRecipeBtn: document.querySelector('.save-recipes-btn'),
  giveRatingBtn: document.querySelector('.give-rating-btn'),
  rateModal: document.querySelector('.modal-rating'),
  closeRate: document.querySelector('.close-rating-modal'),
  modalRateList: document.querySelector('.modal-rating-list'),
  rateVal: document.querySelector('.modal-rating-span'),
  rateRage: document.querySelector('.rating-range-input'),
  rateEmail: document.querySelector('.rating-email-input'),
  rateForm: document.querySelector('.modal-rating-form'),
  sendRateBtn: document.querySelector('.modal-rating-send-btn'),
};

// Açılır pencere - Modal
export function OpenModal(currentBtn) {
  refs.closeModalBtn.addEventListener('click', CloseModal);
  refs.backdropModal.addEventListener('click', CloseOnClick);
  refs.giveRatingBtn.addEventListener('click', OpenRateModal);
  window.addEventListener('keydown', CloseOnBtnClick);

  refs.backdropModal.classList.remove('is-hidden-modal');
  refs.mainModalRecipes.classList.remove('is-hidden-modal');
  refs.rateForm.dataset.id = currentBtn.dataset.id;
  genereteRecipe(currentBtn.dataset.id);
  ToggleScroll();

  const storage = localStorage.getItem('favorites');
  const data = JSON.parse(storage);

  if (storage) {
    if (data.find(el => el.id === currentBtn.dataset.id)) {
      refs.saveRecipeBtn.textContent = 'Remove favorite';
    } else {
      refs.saveRecipeBtn.textContent = 'Add to favorite';
    }
  }

  refs.saveRecipeBtn.addEventListener('click', AddToFav);
}

// Puanlama penceresinin açılışı - Opening rating modal
function OpenRateModal() {
  refs.mainModalRecipes.classList.add('is-hidden-modal');
  refs.rateModal.classList.remove('is-hidden-modal');

  refs.closeRate.addEventListener('click', CloseRateModal); //1
  refs.modalRateList.addEventListener('click', GiveRate); //2
  refs.rateEmail.addEventListener('input', checkRateInputs); //3
  refs.rateForm.addEventListener('submit', SubmitRate); //4
}

// Puanlama - Rating
function GiveRate(e) {
  const target = e.target.closest('.modal-rating-star-item');

  if (target) {
    const rate = [...e.currentTarget.children].indexOf(target) + 1;
    [...e.currentTarget.children].forEach((el, i) =>
      i <= rate - 1
        ? el.classList.add('is-rated')
        : el.classList.remove('is-rated')
    );
    refs.rateVal.textContent = rate.toFixed(1);
    refs.rateRage.value = rate;
  }
}

// E-posta giriş kontrolü - Email input control
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function checkRateInputs() {
  if (!isValidEmail(refs.rateEmail.value)) {
    refs.rateEmail.style.borderColor = '#b83245';
    refs.sendRateBtn.disabled = true;
  } else {
    refs.rateEmail.style.borderColor = '#9bb537';
    refs.sendRateBtn.disabled = false;
  }
}

// Puanlama gönderme - Submit rating
async function SubmitRate(e) {
  e.preventDefault();
  const data = {
    rate: Number(e.target.elements['raiting-star'].value),
    email: e.target.elements['email'].value,
  };
  const id = refs.rateForm.dataset.id;

  try {
    await patchRating(id, data);
    Notiflix.Notify.success('Thank you for appreciating the recipe.');
  } catch (error) {
    Notiflix.Notify.failure(
      error.response.data.message || 'Rating has not been submited...'
    );
  }

  CloseModal();
}

// Varsayılana dönme - Reset
function restoreForm() {
  [...refs.modalRateList.children].forEach(el =>
    el.classList.remove('is-rated')
  );

  refs.rateEmail.style.borderColor = '';
  refs.sendRateBtn.disabled = true;
  refs.rateVal.textContent = '0.0';
  refs.rateForm.dataset.id = '';
  refs.rateForm.reset();
}

// Puanlama penceresini kapatma - Close rating modal
function CloseRateModal() {
  refs.mainModalRecipes.classList.remove('is-hidden-modal');
  refs.rateModal.classList.add('is-hidden-modal');

  refs.closeRate.removeEventListener('click', CloseRateModal); //1
  refs.modalRateList.addEventListener('click', GiveRate); //2
  refs.rateEmail.addEventListener('input', checkRateInputs); //3
  refs.rateForm.addEventListener('submit', SubmitRate); //4
}

// Açılır pencereyi kapatma - Close modal
function CloseModal() {
  removeListeners();
  restoreForm();
  refs.backdropModal.classList.add('is-hidden-modal');
  refs.mainModalRecipes.classList.add('is-hidden-modal');
  refs.rateModal.classList.add('is-hidden-modal');
  refs.modalRecipes.innerHTML = '';
  ToggleScroll();
}

function CloseOnClick({ currentTarget, target }) {
  if (currentTarget === target) CloseModal();
}

function CloseOnBtnClick(e) {
  if (e.key === 'Escape') CloseModal();
}

// Sayfayı oluştur - Build page
async function genereteRecipe(id) {
  try {
    const recipe = await findRecipes(id);

    const { title, description, preview, rating, _id, category } = recipe;

    const recipeObj = {
      title,
      description,
      preview,
      rating,
      id: _id,
      category,
    };

    refs.modalRecipes.dataset.info = `${JSON.stringify(recipeObj)}`;

    addData(CreateMarkup(recipe));
    addScrollbarText();
  } catch (err) {
    console.error(err);
  }
}

// İçeriğin oluşturma - Create markup
function CreateMarkup(data) {
  const ingr = data.ingredients;
  const src = !data.youtube
    ? data.thumb
    : data.youtube.replace('watch?v=', 'embed/');
  const tags = data.tags;
  let tagslist = '';
  if (!tags[0]) {
  } else {
    for (let k = 0; k < tags.length; k++) {
      tagslist += `<li class="recipe-tag">#${tags[k]}</li>`;
    }
  }
  let ingrList = '';
  for (let i = 0; i < ingr.length; i++) {
    ingrList += `<li class="recipe-ingridient">${ingr[i].name} <span class="recipe-ps">${ingr[i].measure}</span></li>`;
  }
  const fixRating =
    data.rating > 5 ? Number(5).toFixed(1) : data.rating.toFixed(1);
  const markup = `<div class="recipe-parts">
    ${checkSrc(src, data.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${data.title}</h2>
      <div class="rating-part">
        <p class='rate'>${fixRating}</p>
      ${ratingScale(fixRating)}
        <p class="recipe-time">${data.time} min</p>
      </div>
      <ul class="ingridients">
        ${ingrList}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${tagslist}
  </ul>
  <p class="recipe-instr">${data.instructions}</p>
  </div>
`;
  return markup;
}

// Kaydırma ekleme - Add scrollbar
function addScrollbarText() {
  const scrollbarBox = document.querySelector('.recipe-instr');
  const scrollbar = SmoothScrollbar.init(scrollbarBox, {
    alwaysShowTracks: true,
  });

  const scrollbarIngs = document.querySelector('.ingridients');
  const scrollbarSec = SmoothScrollbar.init(scrollbarIngs, {
    alwaysShowTracks: true,
  });
}

// Veri ekleme - Add data
function addData(markup) {
  refs.modalRecipes.insertAdjacentHTML('afterbegin', markup);
}

// İçerik gizleme - Hide content
function ToggleScroll() {
  const body = document.querySelector('body');
  body.classList.toggle('overflow-hidden');
}

// Kaynak kontrol - Source control
function checkSrc(url, description) {
  if (url.endsWith('.jpg')) {
    return `<img class="modal-img" src="${url}" alt="${description}">`;
  } else {
    return `<iframe
      class="recipe-frame"
      src="${url}"
      frameborder="0"
      alt="${description}"
    ></iframe>`;
  }
}

// Favorilere ekleme - Add to favorites
export function AddToFav({ target }) {
  const storage = localStorage.getItem('favorites');
  const data = JSON.parse(storage);
  const currentRec = JSON.parse(refs.modalRecipes.dataset.info);
  if (storage) {
    if (data.find(el => el.id === currentRec.id)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...data.filter(el => el.id !== currentRec.id)])
      );
      target.textContent = 'Add to favorite';
    } else {
      localStorage.setItem('favorites', JSON.stringify([...data, currentRec]));
      target.textContent = 'Remove favorite';
    }
  } else {
    localStorage.setItem('favorites', JSON.stringify([currentRec]));
    target.textContent = 'Remove favorite';
  }
}

function removeListeners() {
  // Tarif penceresi - Recipes Modal
  refs.closeModalBtn.removeEventListener('click', CloseModal);
  refs.backdropModal.removeEventListener('click', CloseOnClick);
  refs.saveRecipeBtn.removeEventListener('click', AddToFav);
  // Puanlama penceresi - Rating Modal
  refs.giveRatingBtn.removeEventListener('click', OpenRateModal);
  refs.closeRate.removeEventListener('click', CloseRateModal);

  refs.modalRateList.removeEventListener('click', GiveRate);
  refs.rateEmail.removeEventListener('input', checkRateInputs);
  refs.rateForm.removeEventListener('submit', SubmitRate);

  window.removeEventListener('keydown', CloseOnBtnClick);
}
