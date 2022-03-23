import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPokemonData, selectPokemonList } from "../../pokedexSlice";
import Tile from "../Tile";
import { ItemList } from "./styled";

const List = () => {


    const dispatch = useDispatch();
    const pokemonList = useSelector(selectPokemonList);

    useEffect(() => {
        dispatch(fetchInitialPokemonData());
    }, [])

    return (
        <ItemList>
            {pokemonList.map((pokemon) =>
                <Tile
                    key={pokemon.name}
                    name={pokemon.name}
                    sprite={pokemon.sprites.other.dream_world.front_default}
                    types={pokemon.types}
                    weight={pokemon.weight}
                    height={pokemon.height}
                />
            )
            }
        </ItemList>
    )
}

export default List;