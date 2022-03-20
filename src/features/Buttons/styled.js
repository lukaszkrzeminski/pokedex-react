import styled from "styled-components";

export const ButtonsContainer = styled.div`
    padding: 20px 30px;
    border-top: 3px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    margin: 10px 30px;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.primaryButton};
    color: ${({ theme }) => theme.secondaryText};
    font-weight: bold;

    &:hover{
        filter: brightness(110%);
    }
    &:active{
        filter: brightness(120%);
    }

`;