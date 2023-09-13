import axios from "axios";
const baseUrl = "https://aluraflixapi.gregorypf.site/login";

const loginService = (data) => {
  const request = axios.post(baseUrl, data);

  return request.then((response) => response).catch((err) => err);
};

export default loginService;
