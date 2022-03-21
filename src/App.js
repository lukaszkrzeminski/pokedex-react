import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Pokedex from "./features";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Pokedex />
    </ThemeProvider>
  );
}

export default App;
