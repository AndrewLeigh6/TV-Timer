import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import MediaSelector from "../../components/MediaSelector/MediaSelector";
import api from "../../api";
import { setEqualHeights } from "../../helpers/helpers";

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

    // temp for testing
    api.findFilms("star wars").then(films => {
      this.loadNewMedia(films);
    });

    // ensure we set the heights again if the window is resized
    window.addEventListener("resize", setEqualHeights);
  }

  /* we always want to re-set heights after putting
  new films into state, so they're being grouped here */
  loadNewMedia = films => {
    this.setState({ films: films.data.results });
    setEqualHeights();
  };

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

  searchHandler = event => {
    event.preventDefault();

    const searchValue = event.target.elements[0].value;

    api.findFilms(searchValue).then(films => {
      this.loadNewMedia(films);
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
