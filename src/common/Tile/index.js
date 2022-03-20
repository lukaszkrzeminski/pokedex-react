import React from "react";
import { Item, BasicContent, DescriptionText, ExtraContent } from "./styled";

const Tile = ({ id, name, type, sprite, weight, height }) => {

    const isVisible = true;

    if (isVisible === false) {
        return (
            <Item>
                <img src={sprite} alt={`${name} sprite`} />
                <BasicContent>
                    <DescriptionText>Name: {name}</DescriptionText>
                    <DescriptionText>Type: {type[0]} {type[1]}</DescriptionText>
                </BasicContent>
            </Item>
        )
    }

    return (
        <Item>
            <img src={sprite} alt={`${name} sprite`} />
            <BasicContent>
                <DescriptionText>Name: {name}</DescriptionText>
                <DescriptionText>Type: {type[0]} {type[1]}</DescriptionText>
            </BasicContent>
            <ExtraContent>
                <DescriptionText>Weight: {weight} kg</DescriptionText>
                <DescriptionText>Height: {height} m</DescriptionText>
            </ExtraContent>
        </Item>
    )
}

export default Tile;