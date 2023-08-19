import axios from "axios";
const baseUrl = "http://localhost:3000/Categorias";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => err);
};

const createCategory = (data) => {
  const request = axios.post(baseUrl, data);

  return request.then((response) => response).catch((err) => err);
};

const apiCategories = { getAll, createCategory };

export default apiCategories;