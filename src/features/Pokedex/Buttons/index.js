import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPokemonList, selectPokemonList } from "../../pokedexSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = () => {

    const dispatch = useDispatch();
    const pokemonList = useSelector(selectPokemonList);

    useEffect(() => {
        dispatch(fetchInitialPokemonList());
        console.log(pokemonList);
    }, [dispatch])


    return (
        <ButtonsContainer>
            <Button>Load more</Button>
            <Button>Switch to DarkMode</Button>
        </ButtonsContainer>
    )
};

export default Buttons;