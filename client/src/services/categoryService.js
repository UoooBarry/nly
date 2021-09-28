import service from "./service";

const getAllCategories = async () => {
  const response = await service.get("/categories");
  if(response.data.status !== 'ok') console.error("Contact barry!");
  return response.data.payload;
}

export {
  getAllCategories
}