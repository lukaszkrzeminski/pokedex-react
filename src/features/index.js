import React from "react";
import Header from "../common/Header";
import Main from "../common/Main"
import Buttons from "./Pokedex/Buttons";
import List from "./Pokedex/List";

const Pokedex = () => (
    <Main>
        <Header />
        <Buttons />
        <List />
      </Main>
)

export default Pokedex;