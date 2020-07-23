import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error };
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
