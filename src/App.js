import React from "react";
import TvTimer from "./containers/TvTimer/TvTimer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TvTimer />
      </BrowserRouter>
    </div>
  );
}

export default App;
