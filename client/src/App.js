import React from "react";
import TvTimer from "./containers/TvTimer/TvTimer";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <TvTimer />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
