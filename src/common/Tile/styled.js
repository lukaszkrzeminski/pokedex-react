import styled from "styled-components";

export const Item = styled.li`
    list-style: none;
    margin: 10px 20px;
    padding: 20px 10px;
    max-width: 300px;
    border: 3px solid ${({ theme }) => theme.borderColor};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.secondaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    display:flex;
`;