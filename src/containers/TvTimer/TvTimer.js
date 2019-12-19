import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import TypeSelector from "../../components/TypeSelector/TypeSelector";
import MediaSelector from "../../components/MediaSelector/MediaSelector";
import api from "../../api";

class TvTimer extends Component {
  state = {
    config: null,
    films: null,
    currentFilm: null
  };

  componentDidMount() {
    api.getConfig().then(config => {
      this.setState({ config: config.data.images });
    });
  }

  // https://developers.themoviedb.org/3/getting-started/images
  getPosterBaseURL = () => {
    if (this.state.config) {
      const url = this.state.config.secure_base_url;
      const size = this.state.config.poster_sizes[4]; // width 500
      const posterURL = `${url}/${size}/`;

      return posterURL;
    }

    return null;
  };

  searchHandler = e => {
    e.preventDefault();
    api.findFilms("star wars").then(films => {
      this.setState({ films: films.data.results });
    });
  };

  render() {
    return (
      <Layout>
        <MediaSelector
          searchHandler={this.searchHandler}
          films={this.state.films}
          getPosterBaseURL={this.getPosterBaseURL}
        />
      </Layout>
    );
  }
}

export default TvTimer;
