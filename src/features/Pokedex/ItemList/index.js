import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPokemonList, selectPokemonList } from "../../pokedexSlice";
import Tile from "../Tile";
import { List } from "./styled";

const ItemList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialPokemonList());
    }, [dispatch])

    return (
        <List>
            <Tile
                id={1}
                name={'Bulbasaur'}
                type={['grass', 'poison']}
                sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                weight={6.9}
                height={0.7}
            />
            <Tile
                id={1}
                name={'Bulbasaur'}
                type={['grass', 'poison']}
                sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                weight={6.9}
                height={0.7}
            />
            <Tile
                id={1}
                name={'Bulbasaur'}
                type={['grass', 'poison']}
                sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                weight={6.9}
                height={0.7}
            />
            <Tile
                id={1}
                name={'Bulbasaur'}
                type={['grass', 'poison']}
                sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                weight={6.9}
                height={0.7}
            />
            
        </List>
    )
}

export default ItemList;