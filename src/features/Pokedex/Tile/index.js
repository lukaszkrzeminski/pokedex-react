import React, { useState } from "react";
import { Item, BasicContent, DescriptionText, ExtraContent } from "./styled";

const Tile = ({ id, name, type, sprite, weight, height }) => {

    const [expand, setExpand] = useState(false);

        return (
            <Item onClick={() => setExpand(!expand)} expand={expand ? true : false}>
                <img src={sprite} alt={`${name} sprite`} />
                <BasicContent>
                    <DescriptionText>Name: {name}</DescriptionText>
                    <DescriptionText>Type: {type[0]} {type[1]}</DescriptionText>
                </BasicContent>
                <ExtraContent expand={expand ? true : false}>
                    <DescriptionText>Weight: {weight} kg</DescriptionText>
                    <DescriptionText>Height: {height} m</DescriptionText>
                </ExtraContent>
            </Item>
        )
}

export default Tile;