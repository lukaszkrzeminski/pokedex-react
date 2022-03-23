import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPokemonData, selectPokemonList } from "../../pokedexSlice";
import { Item, BasicContent, DescriptionText, ExtraContent, List, Image } from "./styled";

const Tile = () => {
    const [expand, setExpand] = useState(false);
    const dispatch = useDispatch();
    const pokemonList = useSelector(selectPokemonList);

    useEffect(() => {
        dispatch(fetchInitialPokemonData());
    }, [])

    const onTileClick = () => {
        setExpand(!expand);
    }

    return (
        <>
        <List>
            {pokemonList.map((pokemon) => 
                <Item key={pokemon.name} onClick={() => onTileClick()} expand={expand ? true : false}>
                    <Image src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} sprite`} />
                    <BasicContent>
                        <DescriptionText>Name: {pokemon.name}</DescriptionText>
                        <DescriptionText>Type: {pokemon.types[0].type.name}</DescriptionText>
                    </BasicContent>
                    <ExtraContent expand={expand ? true : false}>
                        <DescriptionText>Weight: {pokemon.weight}</DescriptionText>
                        <DescriptionText>Height: {pokemon.height}</DescriptionText>
                    </ExtraContent>
                </Item>
            )
            }
        </List>
        </>
    )
}

export default Tile;