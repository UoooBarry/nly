import service from "./service";

const getAllCategories = async () => {
  const response = await service.get("/categories");
  return response;
}

export {
  getAllCategories
}