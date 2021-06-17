import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primary};
    height: 100vh;
    padding-top: 5rem;
  `}
`;
