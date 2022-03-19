import React from "react";
import { MainContainer } from "./styled";

const main = (props) => (
        <MainContainer>
            {props.children}
        </MainContainer>
)

export default main;