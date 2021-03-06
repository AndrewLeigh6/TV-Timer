import axios from "axios";

/* if we get a 401 error again for some reason, the env
 file has probably vanished again. just add a new one with the bearer 
 key, it's the really long one. */

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY_BEARER}`
  }
});

/* seems to be a bug with axios.create params at the minute,
so i'm having to do it like this. 
solution from https://stackoverflow.com/questions/56397239/default-query-params-not-getting-passed-in-axios-request */

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  request.params = {
    ...request.params,
    language: "en-US",
    include_adult: "false",
    page: "1"
  };
  return request;
});

api.interceptors.response.use(response => {
  console.log("Response:", response);
  return response;
});

// https://developers.themoviedb.org/3/configuration/get-api-configuration
api.getConfig = () => {
  return api.get("/configuration");
};

// https://developers.themoviedb.org/3/search/search-movies
api.findFilms = query => {
  return api.get("/search/movie", {
    params: {
      query: query
    }
  });
};

// https://developers.themoviedb.org/3/movies/get-movie-details
api.getFilmDetails = filmID => {
  return api.get("/movie/" + filmID);
};

export default api;
