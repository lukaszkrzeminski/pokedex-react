import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Header from "./common/Header";
import Main from "./common/Main";
import Buttons from "./features/Buttons";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Header />
        <Buttons />
      </Main>
    </ThemeProvider>
  );
}

export default App;
