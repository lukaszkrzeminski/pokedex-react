import React, { useState } from "react";
import { Item, BasicContent, DescriptionText, ExtraContent, Image } from "./styled";

const Tile = ( {name, sprite, types, weight,  height} ) => {
    const [expand, setExpand] = useState(false);

    const typesList = [];
    let i = 0;
    for(const type of types){
        typesList[i] = type.type.name+" ";
        i++;
    }

    return (
                <Item onClick={() => setExpand(!expand)} expand={expand ? true : false}>
                    <Image src={sprite} alt={`${name} sprite`} />
                    <BasicContent>
                        <DescriptionText>Name: {name}</DescriptionText>
                        <DescriptionText>Type: {typesList}</DescriptionText>
                    </BasicContent>
                    <ExtraContent expand={expand ? true : false}>
                        <DescriptionText>Weight: {weight}</DescriptionText>
                        <DescriptionText>Height: {height}</DescriptionText>
                    </ExtraContent>
                </Item>
    )
}

export default Tile;