import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1200px;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 3px solid ${({ theme }) => theme.borderColor};
    border-radius: 10px;
`;