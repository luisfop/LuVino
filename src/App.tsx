import React from "react";
import { Container } from "@material-ui/core";


import Navbar from './components/navbar/index';

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <h1>Container</h1>
      </Container>
    </>
  );
}

export default App;
