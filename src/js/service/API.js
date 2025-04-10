import axios from 'axios';

const API_URL = 'https://tasty-treats-backend.p.goit.global/api';

// Ana Sınıflarını alır - Fetch main classes
export async function findMasterClasses() {
  const url = `${API_URL}/events`;
  const res = await axios.get(url);
  return res.data;
}

// Kategorileri alır - Fetch categories
export async function fetchCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching categories:', error);
    return [];
  }
}

// Tarifleri alır - Fetch recipes
export async function findRecipes(id) {
  const url = `${API_URL}/recipes/${id}`;
  const res = await axios.get(url);
  return res.data;
}

// Populer tarifleri alır - Fetch popular recipes
export const getPopularRecipes = async function () {
  try {
    const response = await axios.get(`${API_URL}/recipes/popular`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Ülkelere göre tarifleri alır - Fetch recipes by area
export async function fetchAreaRecipes() {
  const url = `${API_URL}/areas`;
  const res = await axios.get(url);
  return res.data;
}

// Malzemelere göre tarifleri alır - Fetch recipes by ingredients
export async function fetchIngredientsRecipes() {
  const url = `${API_URL}/ingredients`;
  const res = await axios.get(url);
  return res.data;
}

// Puanlama gönderme - Submit rating
export async function patchRating(id, data) {
  const url = `${API_URL}/recipes/${id}/rating`;
  console.log(url, data);
  return await axios.patch(url, data);
}

// Sipariş oluşturma - Create order
export function postOrder(data) {
  return axios.post(`${API_URL}/orders/add`, data);
}
