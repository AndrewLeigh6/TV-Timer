import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import TypeSelector from "../../components/TypeSelector/TypeSelector";
import MediaSelector from "../../components/MediaSelector/MediaSelector";

class TvTimer extends Component {
  render() {
    return (
      <Layout>
        <MediaSelector />
      </Layout>
    );
  }
}

export default TvTimer;
