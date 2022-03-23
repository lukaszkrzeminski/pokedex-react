import React from "react";
import Header from "../common/Header";
import Main from "../common/Main"
import Buttons from "./Pokedex/Buttons";
import Tile from "./Pokedex/Tile";

const Pokedex = () => (
    <Main>
        <Header />
        <Buttons />
        <Tile />
      </Main>
)

export default Pokedex;