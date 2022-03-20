import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1200px;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.primaryColor};
`;