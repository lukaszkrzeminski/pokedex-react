import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Header from "./common/Header";
import Main from "./common/Main";
import Buttons from "./features/Buttons";
import ItemList from "./features/ItemList";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <Header />
        <Buttons />
        <ItemList />
      </Main>
    </ThemeProvider>
  );
}

export default App;
