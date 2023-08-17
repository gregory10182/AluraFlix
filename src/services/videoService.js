import axios from "axios";
const baseUrl = "http://localhost:3000/Videos";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => err);
};

const getCategoryVideos = (category) => {
  const request = axios.get(
    `${baseUrl}?categoria=${category.replace(" ", "%20")}`
  );
  return request
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const apiVideos = { getAll, getCategoryVideos };

export default apiVideos;
