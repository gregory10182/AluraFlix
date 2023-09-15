import axios from "axios";
const baseUrl = "https://aluraflixapi.gregorypf.site/664/Categorias";

let config = {
  headers: { Authorization: `` },
};

const setTkn = (tkn) => {
  config.headers.Authorization = `Bearer ${tkn}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => err);
};

const getOne = (category) => {
  const request = axios.get(
    `${baseUrl}?nombre=${category?.replace(" ", "%20")}`
  );
  return request
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const createCategory = (data) => {
  const request = axios.post(baseUrl, data, config);

  return request.then((response) => response).catch((err) => err);
};

const editCategory = (data, id) => {
  const request = axios.put(`${baseUrl}/${id}`, data, config);

  return request.then((response) => response).catch((err) => err);
};

const deleteCategory = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, config);

  return request.then((response) => response).catch((err) => err);
};

const apiCategories = {
  getAll,
  getOne,
  createCategory,
  editCategory,
  deleteCategory,
  setTkn,
};

export default apiCategories;
