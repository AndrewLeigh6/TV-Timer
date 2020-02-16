const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
const PORT = process.env.PORT || 8080;

require("dotenv").config();
const key = process.env.REACT_APP_API_KEY_BEARER;

app.use(express.static(path.join(__dirname, "build")));

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${key}`
  }
});

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

/* ==========
ROUTES
=========== */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/api/config", (req, res) => {
  api
    .getConfig()
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get("/api/search/film", (req, res) => {
  api
    .findFilms(req.query.search)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.get("/api/film/:film", (req, res) => {
  api
    .getFilmDetails(req.params.film)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(PORT);
