import React from "react";
import Header from "../common/Header";
import Main from "../common/Main"
import Buttons from "./Pokedex/Buttons";
import ItemList from "./Pokedex/ItemList";

const Pokedex = () => (
    <Main>
        <Header />
        <Buttons />
        <ItemList />
      </Main>
)

export default Pokedex;