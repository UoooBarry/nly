import service from "./service";

const getAllLetters = async () => {
  const response = await service.get("/letters");
  return response;
}

const newLetter = async (letter) => {
  const response = await service.post("/letters", letter);
  return response;
}

export {
  getAllLetters,
  newLetter
};
