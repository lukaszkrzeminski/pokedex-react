import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
         box-sizing: border-box;
         line-height: 1.15;
    }
    *, ::after, ::before{
         box-sizing: inherit;
    }
    body{
         font-family: 'Montserrat', sans-serif;
         margin: 0;
         background-color: ${({theme}) => theme.backgroundColor};
    }
`;