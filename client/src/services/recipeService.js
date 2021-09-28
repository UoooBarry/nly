import axios from "axios";
import service from "./service";

const getAllRecipe = async () => {
  const response = await service.get("/recipes");
  if (response.data.status !== 'ok') console.error("Contact barry!");
  return response.data.payload;
}

const getRecipe = async (id) => {
  const response = await service.get(`/recipes/${id}`);
  if (response.data.status !== 'ok') console.error("Contact barry!");
  return response.data.payload;
}

const rateRecipe = async (id, rating) => {
  const response = await service.put(`/recipes/${id}`, {
    rating: rating
  });
  if (response.data.status !== 'ok') console.error("Contact barry!");
  return response.data.payload;
}

const getRecipeContent = async (mdUrl) => {
  const response = await axios.get(mdUrl);
  return response.data;
}

export {
  getAllRecipe,
  getRecipe,
  rateRecipe,
  getRecipeContent
}