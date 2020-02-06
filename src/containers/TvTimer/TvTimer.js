import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import MediaSelector from "../../components/MediaSelector/MediaSelector";
import api from "../../api";
import TimeCalculator from "../../components/TimeCalculator/TimeCalculator";
import FinalResult from "../../components/FinalResult/FinalResult";
import { Route, withRouter } from "react-router-dom";

class TvTimer extends Component {
  state = {
    config: null,
    media: null,
    currentMedia: null,
    endTime: null,
    startTime: null
  };

  componentDidMount() {
    api.getConfig().then(config => {
      this.setState({ config: config.data.images });
    });

    // temp for testing
    api
      .findFilms("avengers")
      .then(media => {
        this.loadNewMedia(media);
      })
      .catch(err => {
        console.log(err);
      });
  }

  loadNewMedia = media => {
    this.setState({ media: media.data.results });
  };

  setCurrentMediaHandler = mediaID => {
    const chosenMedia = this.state.media.find(
      element => element.id === mediaID
    );

    // need to wait until media has been set before redirecting
    this.setState(
      { currentMedia: chosenMedia },
      this.props.history.push("/calculator")
    );
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

  getBackdropBaseURL = () => {
    if (this.state.config) {
      const url = this.state.config.secure_base_url;
      const size = this.state.config.backdrop_sizes[3]; // width original
      const backdropURL = `${url}/${size}/`;

      return backdropURL;
    }
  };

  searchHandler = event => {
    event.preventDefault();

    const searchValue = event.target.elements[0].value;

    api.findFilms(searchValue).then(media => {
      this.loadNewMedia(media);
    });
  };

  render() {
    const backdropPath = this.state.currentMedia
      ? this.state.currentMedia.backdrop_path
      : null;

    return (
      <Layout
        getBackdropBaseURL={this.getBackdropBaseURL}
        backdropPath={backdropPath}
        pathName={this.props.location.pathname}
      >
        <Route path="/" exact>
          <MediaSelector
            searchHandler={this.searchHandler}
            media={this.state.media}
            getPosterBaseURL={this.getPosterBaseURL}
            setCurrentMediaHandler={this.setCurrentMediaHandler}
          />
        </Route>
        <Route path="/calculator">
          <TimeCalculator
            currentMedia={this.state.currentMedia}
            getPosterBaseURL={this.getPosterBaseURL}
          />
        </Route>
        <Route path="/result">
          <FinalResult />
        </Route>
      </Layout>
    );
  }
}

export default withRouter(TvTimer);
