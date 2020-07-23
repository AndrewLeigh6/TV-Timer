import axios from "axios";

const api = axios.create({
  baseURL: "/api/"
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  request.params = {
    ...request.params
  };
  return request;
});

api.interceptors.response.use(response => {
  console.log("Response:", response);
  return response;
});

api.getConfig = () => {
  return api.get("/config");
};

api.findFilms = query => {
  return api.get(`/search/film?search=${encodeURI(query)}`);
};

api.getFilmDetails = id => {
  return api.get(`/film/${id}`);
};

export default api;
