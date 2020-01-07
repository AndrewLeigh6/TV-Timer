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

    // temp for testing
    api.findFilms("star wars").then(films => {
      this.setState({ films: films.data.results });
      this.setEqualHeights();
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

  searchHandler = event => {
    event.preventDefault();

    const searchValue = event.target.elements[0].value;

    api.findFilms(searchValue).then(films => {
      this.setState({ films: films.data.results });
    });
  };

  // this is for the film name heights
  setEqualHeights = () => {
    const titles = document.querySelectorAll("p[class^=MediaDetails_Title]");

    let largestHeight = 0;

    // get tallest title
    titles.forEach(element => {
      if (element.clientHeight > largestHeight) {
        largestHeight = element.clientHeight;
      }
    });

    // set all titles to largest height
    titles.forEach(element => {
      element.style.height = largestHeight + "px";
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
