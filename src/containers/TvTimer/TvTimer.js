import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import TypeSelector from "../../components/TypeSelector/TypeSelector";

class TvTimer extends Component {
  render() {
    return (
      <Layout>
        <TypeSelector />
      </Layout>
    );
  }
}

export default TvTimer;
