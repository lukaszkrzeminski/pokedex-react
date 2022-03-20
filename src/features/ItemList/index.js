import React from "react";
import Tile from "../../common/Tile";

const ItemList = () => {
    return (
        <ul>
            <Tile
                id={1}
                name={'Bulbasaur'}
                type={['grass', 'poison']}
                sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                weight={6.9}
                height={0.7}
            >
            </Tile>
        </ul>
    )
}

export default ItemList;