import React from "react";
import { ButtonsContainer, Button } from "./styled";

const Buttons = () => {
    return (
        <ButtonsContainer>
            <Button>Load more</Button>
            <Button>Filter by:</Button>
        </ButtonsContainer>
    )
}

export default Buttons;