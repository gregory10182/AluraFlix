import axios from "axios";
const baseUrl = "https://aluraflixapi.gregorypf.site/Videos";

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

const createVideo = (data) => {
  const request = axios.post(baseUrl, data);

  return request.then((response) => response).catch((err) => err);
};

const apiVideos = { getAll, getCategoryVideos, createVideo };

export default apiVideos;
