import React, { Fragment } from "react";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import "./scss/index.scss";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}

export default App;
