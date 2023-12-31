import axios from "axios";
const baseUrl = "https://aluraflixapi.gregorypf.site/664/Videos";

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

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const getCategoryVideos = (category) => {
  const request = axios.get(
    `${baseUrl}?categoria=${category?.replace(" ", "%20")}`
  );
  return request
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const createVideo = (data) => {
  const request = axios.post(baseUrl, data, config);

  return request.then((response) => response).catch((err) => err);
};

const apiVideos = { getAll, getOne, getCategoryVideos, createVideo, setTkn };

export default apiVideos;
