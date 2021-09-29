import service from "./service";

const getAllRecipe = async () => {
  const response = await service.get("/recipes");
  return response
}

const getRecipe = async (id) => {
  const response = await service.get(`/recipes/${id}`);
  return response
}

const rateRecipe = async (id, rating) => {
  const response = await service.put(`/recipes/${id}`, {
    rating: rating
  });
  return response;
}

const getRecipeContent = async (id) => {
  const response = await service.get(`/recipes/${id}/content`)
  return response;
}

export {
  getAllRecipe,
  getRecipe,
  rateRecipe,
  getRecipeContent
}