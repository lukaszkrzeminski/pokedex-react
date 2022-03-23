import styled, { css } from "styled-components";

export const Item = styled.li`
    list-style: none;
    margin: 10px 20px;
    padding: 20px 10px;
    max-width: 300px;
    border: 3px solid ${({ theme }) => theme.borderColor};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .5s;

    ${({ expand }) => expand && css`
        transform: scale(1.1);
    `}
`;

export const Image = styled.img`
    max-width: 60%;
    height: auto;
`;

export const BasicContent = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const DescriptionText = styled.span`
    margin: 15px 10px 5px;
`;

export const ExtraContent = styled.div`
    display:none;
    visibility: hidden;
    transition: all 2s;

    ${({ expand }) => expand && css`
        display:flex;    
        visibility: visible;
    `}
`;